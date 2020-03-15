import React from "react";

import Header from "../Header";

/**
 *
 * This component can be used as a wrapper for future pages that will have the same structure
 * Consist of Header & Footer
 */

const Layout: React.FC = ({ children }) => {
  return (
    <>
      {/* NavBar that can be extendend for next features */}
      <Header />
      <main>{children}</main>
      {/* If necessary we can also add a global footer, similar as I did with <Header/> */}
    </>
  );
};

export default Layout;
