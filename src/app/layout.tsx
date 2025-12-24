import Script from "next/script";
import "./globals.css";
import type { Metadata } from "next";
import ClientModalWrapper from "@/component/ClientModalWrapper";

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
        {/* Google Analytics */}
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
        {/* --- Google Tag Manager (noscript) --- */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-599QJTKW"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
         <ClientModalWrapper />
        {/* --- End Google Tag Manager (noscript) --- */}

        {children}

        {/* Kenyt Chatbot */}
        <script
          defer
          src="https://india.kenyt.ai/botapp/ChatbotUI/dist/js/bot-loader.js"
          type="text/javascript"
          data-bot="51349922"
        ></script>
      </body>
    </html>
  );
}
