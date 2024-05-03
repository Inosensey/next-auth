import type { Metadata } from "next";

// Components
import SlideDownNotification from "@/components/notificationComponents/SlideDownNotification";

// Chakra UI
import { Providers } from "@/utils/Providers";

// Fonts
import { poppins, montserrat } from "../fonts";

// Css
import "./globals.css";

export const metadata: Metadata = {
  title: "Next Auth",
  description: "Next Auth integration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ background: "#000" }} className={poppins.variable}>
        <SlideDownNotification />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
