export const GA_MEASUREMENT_ID = "G-XGFPCV10CX";

export type GtagEventParams = Record<
  string,
  string | number | boolean | undefined
>;

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

const sendEvent = (eventName: string, params?: GtagEventParams) => {
  if (typeof window === "undefined" || !window.gtag) return;

  const cleanedParams = params
    ? Object.fromEntries(
        Object.entries(params).filter(([, value]) => value !== undefined)
      )
    : undefined;

  window.gtag("event", eventName, cleanedParams);
};

/** @deprecated Prefer typed helpers below; kept for ad-hoc events. */
export const trackEvent = sendEvent;

export const trackPageView = (path: string, title?: string) => {
  if (typeof window === "undefined" || !window.gtag) return;

  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: path,
    ...(title && { page_title: title }),
  });
};

export const trackOutboundLink = (params: {
  url: string;
  linkText: string;
  location: string;
  category?: string;
}) => {
  sendEvent("click", {
    event_category: "outbound",
    event_label: params.linkText,
    link_url: params.url,
    link_text: params.linkText,
    location: params.location,
    ...(params.category && { project_category: params.category }),
  });
};

export type ContactFormStatus =
  | "attempt"
  | "success"
  | "validation_error"
  | "server_error"
  | "network_error";

export const trackContactForm = (params: {
  status: ContactFormStatus;
  errorMessage?: string;
}) => {
  if (params.status === "success") {
    sendEvent("generate_lead", {
      form_name: "contact",
      location: "contact_page",
    });
  }

  sendEvent("contact_form", {
    form_status: params.status,
    ...(params.errorMessage && { error_message: params.errorMessage }),
  });
};

export type SocialPlatform = "email" | "github" | "linkedin";

export const trackSocialClick = (
  platform: SocialPlatform,
  url: string,
  location = "contact_page"
) => {
  sendEvent("click", {
    event_category: "social",
    event_label: platform,
    link_url: url,
    location,
  });
};

export const trackProjectClick = (params: {
  title: string;
  category: string;
  url: string;
}) => {
  sendEvent("select_content", {
    content_type: "project",
    item_id: params.title,
    project_category: params.category,
    link_url: params.url,
    location: "works_page",
  });

  trackOutboundLink({
    url: params.url,
    linkText: params.title,
    location: "works_page",
    category: params.category,
  });
};
