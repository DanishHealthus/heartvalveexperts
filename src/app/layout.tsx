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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-W0DD0BVY5G"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-W0DD0BVY5G');
          `}
        </Script>
        {/* ---- Google Ads Global Tag (gtag.js) ---- */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17726300204"
        />

        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            // Google Ads Conversion ID
            gtag('config', 'AW-17726300204');
          `}
        </Script>
        {/* ---- END Google Ads Global Tag ---- */}

        {/* --- Google Tag Manager --- */}
        <Script id="gtm-script" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-599QJTKW');
          `}
        </Script>
        {/* --- End Google Tag Manager --- */}
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
