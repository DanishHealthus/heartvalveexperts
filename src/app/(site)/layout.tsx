import CustomCursor from "@/component/CustomCursor";
import Footer from "@/component/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
   <>
        <CustomCursor />
        {children}
        <Footer />
        
      </>
  );
}
