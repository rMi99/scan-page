import React from "react";
import useUpdateDomTitle from "../utils/updateDomTitle";

let NoData = (props) => {

  useUpdateDomTitle('Scanned Page | No Data')

  return <div className="w-full h-[100vh] flex items-center justify-center bg-green-50">
    <img src="/No data.svg" style={{width:'300px'}} alt="no data" />
  </div>;
};

export default NoData;
