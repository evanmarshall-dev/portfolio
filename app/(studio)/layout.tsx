import "../globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Evan Marshall | Web Developer",
  description:
    "Web developer crafting business websites. Expert in branding design, consultation, and monthly maintenance. Optimize your online presence. Explore my portfolio or 📞 📧 me for a free consultation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
