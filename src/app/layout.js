import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import Provider from "@/components/Provider";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PDSA_Bowen",
  description: "Political Science and Diplomatic Student Association",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <Provider> */}
          {children}
        {/* </Provider> */}
        <Toaster />
      </body>
    </html>
  );
}