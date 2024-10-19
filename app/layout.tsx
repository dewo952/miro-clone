import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ConvexClientProvider } from "@/providers/convex-client-provider";
import { Toaster } from "@/components/ui/sonner";
import { ModalProvider } from "@/providers/model-provider";
import { Suspense } from "react";
import { Loading } from "@/components/auth/loading";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Miro Clone - Collaborative Whiteboard App",
  description: "Create, collaborate, and visualize ideas seamlessly with our Miro clone. Perfect for teams, classrooms, and creative minds. Experience an interactive whiteboard with tools for brainstorming, mapping, and designing.",
  keywords: "Miro clone, collaborative whiteboard, brainstorming tool, online whiteboard, team collaboration, visual collaboration, remote work, creative tools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Suspense fallback={<Loading />}>
          <ConvexClientProvider>
            <Toaster />
            <ModalProvider />
            {children}
          </ConvexClientProvider>
        </Suspense>
      </body>
    </html>
  );
}
