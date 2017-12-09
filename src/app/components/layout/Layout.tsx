import * as React from "react";

import Navigation from "../navigation/Navigation";

interface ILayoutProps {
  children?: React.ReactNode;
}

const Layout = (props: ILayoutProps): JSX.Element => {
  return (
    <>
      <Navigation />
      <div>
        {props.children}
      </div>
    </>
  );
};

export default Layout;
