import Script from "next/script";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Heart Valve Experts",
  description: "Advanced Cardiac Care & Innovation",
  verification: {
    google: "s8bc_S5m9h-MxNlii4UsZvK2OvA_VH81a7Fb9GNLBbU",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">      
      {/* <body> */}
        {children}
      {/* </body> */}
    </html>
  );
}
