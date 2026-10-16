export type ServiceItem = { id: string; title: string; description: string; symbol: string };

// Starter categories only. Confirm final names against AMM's approved service list before launch.
export const services: ServiceItem[] = [
  { id: "ai-automation", title: "AI & Workflow Automation", description: "Reduce repetitive work and connect everyday business processes.", symbol: "↗" },
  { id: "business-systems", title: "Business Systems", description: "Organize tools, handoffs and information into clearer workflows.", symbol: "⌘" },
  { id: "seo-visibility", title: "Google & AI Search Visibility", description: "Improve how your business is structured and discovered in search.", symbol: "◎" },
  { id: "data-reporting", title: "Data & Reporting", description: "Make spreadsheets, reports and business information easier to use.", symbol: "▤" },
  { id: "creative-digital", title: "Creative & Digital Content", description: "Create consistent digital materials that support your business.", symbol: "✳" },
  { id: "digital-growth", title: "Digital Growth Support", description: "Build a practical digital foundation as your business grows.", symbol: "↗" },
];
