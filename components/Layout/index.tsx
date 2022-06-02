import React, { ReactNode } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <div className="flex flex-col lg:flex-row font-primary">
      <Navbar />
      <div className="w-full">
        <main className="bg-black">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
