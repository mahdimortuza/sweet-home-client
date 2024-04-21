import ComparisonCart from "@/components/Shared/ComparisonCart/ComparisonCart";
import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import { ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <ComparisonCart />
      <div className="h-full w-full max-w-[1300px] px-5 mx-auto">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default CommonLayout;
