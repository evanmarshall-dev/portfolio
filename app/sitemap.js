export default function sitemap() {
  const staticPages = [
    {
      url: "https://www.evanmarshall.dev",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    // {
    //   url: "https://www.evanmarshall.dev",
    //   lastModified: "2024-11-17",
    //   changeFrequency: "weekly",
    //   priority: 0.5,
    //   images: ["https://www.evanmarshall.dev/desktop-image.jpg"],
    // },
  ];

  return [...staticPages];
}
