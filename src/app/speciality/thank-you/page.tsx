import Link from "next/link";
import { FiCheckCircle } from "react-icons/fi";

/**
 * Shared thank-you page for every /speciality/[slug] consultation form —
 * one page for the whole template, same as the other landing pages'
 * dedicated thank-you routes (open-heart-surgery-tavi/thank-you, etc).
 * A literal `thank-you` folder here takes priority over the sibling
 * `[slug]` dynamic route for this exact path, so no routing conflict.
 */
export const metadata = {
  title: "Thank You | Heart Valve Experts",
  robots: { index: false, follow: true },
};

export default function SpecialityThankYouPage() {
  return (
    <div className="min-h-screen animate-gradient-circle flex items-center justify-center p-6 overflow-hidden">
      <div className="bg-white rounded-3xl shadow-2xl max-w-xl w-full p-10 text-center">
        <FiCheckCircle className="w-20 h-20 mx-auto text-blue-500 mb-6 animate-bounce" />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Thank You!</h1>
        <p className="text-gray-600 text-lg mb-8">
          Your consultation request has been received successfully. Our coordinator will call
          you shortly to arrange your consultation and report review.
        </p>
        <Link href="/">
          <button className="cursor-pointer animate-gradient-circle text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform mb-4">
            Go to Homepage
          </button>
        </Link>
        <p className="text-gray-400 text-sm">Or explore more services on our website.</p>
      </div>
    </div>
  );
}
