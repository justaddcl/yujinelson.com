# yujinelson.com

![Screenshot of yujinelson.com](static/yujinelson.com.png)
This is the codebase for my [personal website](https://yujinelson.com) built with Gatsby and hosted on AWS.

## Analytics

PostHog is enabled when `GATSBY_POSTHOG_KEY` and `GATSBY_POSTHOG_HOST` are set. Set `GATSBY_POSTHOG_HOST` to the managed proxy URL (`https://wa.yujinelson.com`) in each environment; visitors are opted out until they make an explicit choice in the analytics consent banner.

PostHog automatically captures standard UTM parameters. Use an opaque `application_ref` to associate a visit with a job application without putting a company or person in the URL:

```text
https://yujinelson.com/?utm_source=job_application&utm_medium=application&utm_campaign=portfolio&application_ref=a7k3p
```

Keep the mapping from `application_ref` to an application in a private tracker.

## Change log

- 1.0.1 - Kan415Typos replaced with Chiaro Std

- 1.0.0 - Website relaunch
