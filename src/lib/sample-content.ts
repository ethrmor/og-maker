/**
 * Sample content generator for OG Maker
 * Provides realistic Lorem ipsum-style content for testing and demos
 */

const SAMPLE_TITLES = [
  "Building the Future of Web Design",
  "Introducing Our Latest Product Update",
  "How We Scaled to 1 Million Users",
  "The Complete Guide to Modern UI",
  "Why Developer Experience Matters",
  "10 Tips for Better Typography",
  "Design Systems at Scale",
  "The Art of Minimalist Interfaces",
  "React Best Practices for 2024",
  "Creating Accessible Components",
  "Our Journey to TypeScript",
  "Designing for Dark Mode",
];

const SAMPLE_SUBTITLES = [
  "Learn how we redesigned our platform with accessibility and performance in mind for all users.",
  "Discover the new features and improvements that make building interfaces faster than ever.",
  "A deep dive into our infrastructure decisions and lessons learned along the way.",
  "Everything you need to know about creating beautiful, functional user interfaces.",
  "Why investing in tooling and documentation pays dividends for engineering teams.",
  "Practical advice for improving readability and visual hierarchy in your designs.",
  "How to maintain consistency across products while allowing team flexibility.",
  "Less is more: creating powerful experiences with fewer elements and reduced complexity.",
  "Patterns and anti-patterns we've discovered building production React applications.",
  "WCAG guidelines, screen readers, and inclusive design principles explained simply.",
  "Migrating a large codebase and the tools that made it possible without breaking changes.",
  "Color theory, contrast ratios, and implementation strategies for dark themes.",
];

const SAMPLE_BRAND_NAMES = [
  "Acme Inc.",
  "Design Co",
  "TechStart",
  "BuildFast",
  "UI Labs",
  "CodeBase",
  "AppWorks",
  "DevTools",
  "PixelPerfect",
  "CloudNative",
  "WebStudio",
  "ProductHub",
];

/**
 * Generate random sample content for OG image
 * @returns Object with title, subtitle, and brandName
 */
export function generateSampleContent() {
  const title = SAMPLE_TITLES[Math.floor(Math.random() * SAMPLE_TITLES.length)];
  const subtitle =
    SAMPLE_SUBTITLES[Math.floor(Math.random() * SAMPLE_SUBTITLES.length)];
  const brandName =
    SAMPLE_BRAND_NAMES[Math.floor(Math.random() * SAMPLE_BRAND_NAMES.length)];

  return { title, subtitle, brandName };
}
