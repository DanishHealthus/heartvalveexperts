import Services from "@/component/Comp404";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="animate-gradient-circle">
      <Services />
      <div className="animate-gradient-circle relative min-h-screen w-full overflow-hidden bg-[#0B0E14] flex items-center justify-center px-4">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-700/20 blur-[180px] rounded-full"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-600/20 blur-[180px] rounded-full"></div>
        <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 
           rounded-3xl p-14 max-w-xl w-full text-center shadow-[0_0_60px_-15px_rgba(0,0,0,0.8)]
           animate-fadeIn">
          <h1 className="text-8xl font-black bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent drop-shadow-xl">
            404
          </h1>
          <p className="text-gray-300 text-lg mt-4 leading-relaxed">
            The page you&apos;re searching for seems to have lost its way.
          </p>
          <Link
            href="/"
            className="inline-block mt-8 px-10 py-3 text-lg font-semibold rounded-full
          bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500
          text-white shadow-xl shadow-purple-600/20 hover:shadow-purple-600/30
          transition-all duration-300 hover:scale-105"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
