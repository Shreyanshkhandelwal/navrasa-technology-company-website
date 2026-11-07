type AnalyticsWindow = Window & { dataLayer?: Array<Record<string, unknown>> };

export function trackEvent(name: string, parameters: Record<string, string | number | boolean> = {}) {
  const analyticsWindow = window as AnalyticsWindow;
  const event = { event: name, ...parameters };
  analyticsWindow.dataLayer = analyticsWindow.dataLayer ?? [];
  analyticsWindow.dataLayer.push(event);
}
