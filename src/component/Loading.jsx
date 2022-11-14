import React from "react";
import ReactLoading from "react-loading";
import { ThemeContext } from "../context/ThemeContex";

const Loading = () => {
  const { theme } = React.useContext(ThemeContext);
  return (
    <div className="rounded-div my-4 mx-auto">
      <ReactLoading className="my-8 mx-auto" type="bars" color={theme ==='dark'? `#81e6d9`:`#2b6cb0`} height={'5%'} width={'5%'} />
    </div>
  );
};

export default Loading;
