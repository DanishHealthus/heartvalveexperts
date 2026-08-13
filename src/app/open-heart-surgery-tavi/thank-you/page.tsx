import Link from 'next/link';
import Script from 'next/script';
import { FiCheckCircle } from 'react-icons/fi';

const ThankYouPage = () => {
  return (
    <>
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
