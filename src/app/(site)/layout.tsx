import ClientModalWrapper from "@/component/ClientModalWrapper";
import CustomCursor from "@/component/CustomCursor";
import Footer from "@/component/Footer";
import Script from "next/script";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
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
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-599QJTKW"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* <CustomCursor /> */}
        <ClientModalWrapper />
        {children}
        <Footer />
        {/* Kenyt Chatbot */}
        <script
          defer
          src="https://india.kenyt.ai/botapp/ChatbotUI/dist/js/bot-loader.js"
          type="text/javascript"
          data-bot="51349922"
        ></script>
      </body>
    </>
  );
}

