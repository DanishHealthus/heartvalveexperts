import ClientModalWrapper from "@/component/ClientModalWrapper";
import CustomCursor from "@/component/CustomCursor";
import Footer from "@/component/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-599QJTKW"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      <CustomCursor />
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
    </>
  );
}
