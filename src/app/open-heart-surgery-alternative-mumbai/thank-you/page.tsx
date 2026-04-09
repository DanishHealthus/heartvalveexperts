import Link from 'next/link';
import Script from 'next/script';
import { FiCheckCircle } from 'react-icons/fi';

const ThankYouPage = () => {
  // useEffect(() => {
  //   const footer = document.querySelector(
  //     "footer.relative.animate-gradient-circle.text-white.px-6.md\\:px-16.lg\\:px-24.py-12"
  //   ) as HTMLElement | null;
  //   if (footer) {
  //     footer.style.display = "none";
  //   }
  //   return () => {
  //     if (footer) footer.style.display = "";
  //   };
  // }, []);

  return (
    <>
     <head>
      <Script
        src="https://www.googletagmanager.com/gtm.js?id=GTM-TVQ5P76L"
        strategy="afterInteractive"
      />

      <Script id="google-ads-conversion-1" strategy="afterInteractive">
        {`
  function gtag_report_conversion_1(url) {
    var callback = function () {
      if (typeof(url) != 'undefined') {
        window.location = url;
      }
    };
    gtag('event', 'conversion', {
      'send_to': 'AW-17726300204/3fdyCKzQs9YbEKzAx4RC',
      'value': 1.0,
      'currency': 'INR',
      'event_callback': callback
    });
    return false;
  }
`}
      </Script>

      <Script id="google-ads-conversion-2" strategy="afterInteractive">
        {`
  function gtag_report_conversion_2(url) {
    var callback = function () {
      if (typeof(url) != 'undefined') {
        window.location = url;
      }
    };
    gtag('event', 'conversion', {
      'send_to': 'AW-17726300204/7ABuCOSOidkbEKzAx4RC',
      'value': 1.0,
      'currency': 'INR',
      'event_callback': callback
    });
    return false;
  }
`}
      </Script>

      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '1594402638354912');
  fbq('track', 'PageView');
`}
      </Script>
</head>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-TVQ5P76L"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      <div className="min-h-screen animate-gradient-circle flex items-center justify-center p-6 overflow-hidden">
        <div className="bg-white rounded-3xl shadow-2xl max-w-xl w-full p-10 text-center">
          <FiCheckCircle className="w-20 h-20 mx-auto text-blue-500 mb-6 animate-bounce" />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Thank You!</h1>
          <p className="text-gray-600 text-lg mb-8">
            Your submission has been received successfully. We will get back to you shortly.
          </p>
          <Link href="/">
            <button className="cursor-pointer animate-gradient-circle text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform mb-4">
              Go to Homepage
            </button>
          </Link>
          <p className="text-gray-400 text-sm">
            Or explore more services on our website.
          </p>
        </div>
      </div>
    </>
  );
};

export default ThankYouPage;
