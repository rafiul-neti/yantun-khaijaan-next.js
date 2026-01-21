import Navbar from "@/Component/Navbar/Navbar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main className="pt-16 lg:pt-24 w-11/12 mx-auto">{children}</main>
    </div>
  );
};

export default layout;
