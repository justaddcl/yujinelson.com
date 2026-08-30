const { execFileSync } = require('node:child_process');
const { join } = require('node:path');
const { findLatestCvFilename } = require('./find-latest-cv');

const aliases = ['cv', 'resume'];
const isDryRun = process.argv.includes('--dry-run');
const bucket = process.env.S3_BUCKET_NAME;
const distributionId = process.env.CLOUDFRONT_DISTRIBUTION_ID;
const cvFilename = findLatestCvFilename(join(process.cwd(), 'public'));
const redirectTarget = `/${cvFilename}`;

function requireEnvironmentVariable(name, value) {
  if (!value) {
    throw new Error(`${name} must be set before publishing CV aliases.`);
  }
}

function runAws(arguments_) {
  if (isDryRun) {
    process.stdout.write(`aws ${arguments_.join(' ')}\n`);
    return '';
  }

  return execFileSync('aws', arguments_, { encoding: 'utf8' });
}

requireEnvironmentVariable('S3_BUCKET_NAME', bucket);
requireEnvironmentVariable('CLOUDFRONT_DISTRIBUTION_ID', distributionId);

aliases.forEach((alias) => {
  runAws([
    's3api',
    'put-object',
    '--bucket',
    bucket,
    '--key',
    alias,
    '--website-redirect-location',
    redirectTarget,
    '--content-type',
    'text/html',
    '--cache-control',
    'max-age=0, no-cache',
  ]);
});

runAws([
  'cloudfront',
  'create-invalidation',
  '--distribution-id',
  distributionId,
  '--paths',
  ...aliases.map((alias) => `/${alias}`),
]);

process.stdout.write(
  `Published /cv and /resume as no-cache redirects to ${redirectTarget}.\n`
);
