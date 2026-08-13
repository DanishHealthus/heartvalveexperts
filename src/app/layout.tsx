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
        <script id="google-ads">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-17726300204');
          `}
        </script>
        <Script id="hve-conversion">
          {`
          gtag('event', 'conversion', {
            'send_to': 'AW-17726300204/7ABuCOSOidkbEKzAx4RC'
          });
        `}
        </Script>
      </head>
      <body>
        {/* <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TVQ5P76L"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          />
        </noscript> */}

        {children}
      </body>
    </html>
  );
}
