/* eslint-disable spellcheck/spell-checker */
import posthog from 'posthog-js';

const posthogKey = process.env.GATSBY_POSTHOG_KEY;
const posthogHost = process.env.GATSBY_POSTHOG_HOST;

const analyticsConsentSettingsEvent = 'analytics-consent-settings';

type AnalyticsEventProperties = {
  case_study_external_link_clicked: {
    case_study: string;
    link_label: string;
  };
  contact_email_clicked: undefined;
  project_case_study_clicked: {
    project_name: string;
  };
  resume_link_clicked: undefined;
};

type AnalyticsEvent = keyof AnalyticsEventProperties;

export const isAnalyticsConfigured = Boolean(posthogKey && posthogHost);

export const initializeAnalytics = () => {
  if (!posthogKey || !posthogHost) {
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.warn(
        'PostHog is disabled because GATSBY_POSTHOG_KEY or GATSBY_POSTHOG_HOST is missing.'
      );
    }
    return;
  }

  posthog.init(posthogKey, {
    api_host: posthogHost,
    defaults: '2026-05-30',
    capture_pageview: 'history_change',
    custom_campaign_params: ['application_ref'],
    opt_out_capturing_by_default: true,
    opt_out_persistence_by_default: true,
    person_profiles: 'identified_only',
    session_recording: {
      maskAllInputs: true,
      maskTextSelector: '[data-private]',
    },
    capture_exceptions: {
      capture_unhandled_errors: true,
      capture_unhandled_rejections: true,
      capture_console_errors: false,
    },
  });
};

export function captureAnalyticsEvent(
  event: 'contact_email_clicked' | 'resume_link_clicked'
): void;
export function captureAnalyticsEvent<Event extends AnalyticsEvent>(
  event: Event,
  properties: Exclude<AnalyticsEventProperties[Event], undefined>
): void;
export function captureAnalyticsEvent(
  event: AnalyticsEvent,
  properties?: Record<string, string>
) {
  if (!isAnalyticsConfigured) return;

  posthog.capture(event, properties);
}

export const getAnalyticsConsentStatus = () =>
  posthog.get_explicit_consent_status();

export const acceptAnalytics = () => {
  if (!isAnalyticsConfigured) return;

  const isNewConsent = getAnalyticsConsentStatus() !== 'granted';
  posthog.opt_in_capturing();

  if (isNewConsent) {
    posthog.capture('$pageview');
  }
};

export const rejectAnalytics = () => {
  if (!isAnalyticsConfigured) return;

  posthog.opt_out_capturing();
};

export const openAnalyticsConsentSettings = () => {
  window.dispatchEvent(new Event(analyticsConsentSettingsEvent));
};

export const subscribeToAnalyticsConsentSettings = (listener: () => void) => {
  window.addEventListener(analyticsConsentSettingsEvent, listener);

  return () =>
    window.removeEventListener(analyticsConsentSettingsEvent, listener);
};
