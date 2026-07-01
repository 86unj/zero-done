import type { Metadata, Viewport } from "next";
import { Press_Start_2P, VT323 } from "next/font/google";
import { StarField } from "@/components/graphics/StarField";
import { ConditionalFooter } from "@/components/layout/ConditionalFooter";
import "./globals.css";

const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
});

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
});

export const metadata: Metadata = {
  title: "0% Done — Convince Your Teammate",
  description:
    "Group project due tomorrow and you did nothing? Write one pitch to convince your lazy teammate to do your share. AI scores your persuasion and roleplays the reply. 150 characters, 45 seconds, one shot.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1a1c2c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${pressStart.variable} ${vt323.variable} h-full`}
      data-theme="dark"
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("theme")||"dark";document.documentElement.setAttribute("data-theme",t)}catch(e){}`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <StarField />
        {children}
        {/* <ConditionalFooter /> */}
      </body>
    </html>
  );
}
