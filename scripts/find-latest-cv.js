const { readdirSync } = require('node:fs');
const { join } = require('node:path');

const CV_FILENAME_PATTERN = /^Yuji-Nelson-CV-(\d{4})\.pdf$/;

function findLatestCvFilename(directory) {
  const cvFiles = readdirSync(directory)
    .filter((filename) => CV_FILENAME_PATTERN.test(filename))
    .sort();

  if (cvFiles.length === 0) {
    throw new Error(
      `No versioned CV found in ${directory}. Add a file named Yuji-Nelson-CV-YYYY.pdf.`
    );
  }

  return cvFiles[cvFiles.length - 1];
}

if (require.main === module) {
  const directory = process.argv[2];

  if (!directory) {
    throw new Error('Usage: node scripts/find-latest-cv.js <directory>');
  }

  process.stdout.write(
    `${findLatestCvFilename(join(process.cwd(), directory))}\n`
  );
}

module.exports = { findLatestCvFilename };
