import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const RootLayout = ({children}: {children: string}) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default RootLayout;
