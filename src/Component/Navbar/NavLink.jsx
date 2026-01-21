import Link from "next/link";
import React from "react";

const NavLink = ({ href, className, children }) => {
  return (
    <Link
      href={href}
      className={`text-xl font-medium ${className} tracking-wider`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
