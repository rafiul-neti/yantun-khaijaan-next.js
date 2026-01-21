import Navbar from "@/Component/Navbar/Navbar";
import React from "react";
import CartContextProvider from "../Contexts/ContextProviders/CartContextProvider";

const layout = ({ children }) => {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <CartContextProvider>
        <main className="pt-16 lg:pt-24 w-11/12 mx-auto">{children}</main>
      </CartContextProvider>
    </div>
  );
};

export default layout;
