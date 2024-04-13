// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

// export default nextConfig;

import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-blog",
  themeConfig: "./theme.config.jsx",
  defaultShowCopyCode: true,
  readingTime: true,
});

export default withNextra({
  reactStrictMode: true,
  cleanDistDir: true,
});

// import nextra from "nextra";

// export default nextra({
//   reactStrictMode: true,
//   theme: "nextra-theme-blog",
//   themeConfig: "./theme.config.jsx",
// });
