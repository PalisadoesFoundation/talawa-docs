declare interface Window {
  heap?: {
    track: (eventName: string, eventData: unknown) => void
  }
  gtag?: (type: string, eventName: string, eventData: unknown) => void
  analytics: SegmentAnalytics.AnalyticsJS
}
