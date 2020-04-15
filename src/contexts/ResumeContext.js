import React, { createContext, useState } from "react";

export const ResumeContext = createContext();

const ResumeContextProvider = (props) => {
  const [content, setContent] = useState({
    header: {},
    //   professional: {},
    //   education: {},
    //   additional: {}
  });

  function updateHeaderData(data) {
    // Similar to this.setState({ fruit: 'orange' })
    setContent({ header: data });
  }

  return (
    <ResumeContext.Provider value={{ content, updateHeaderData }}>
      {/* This refers to the children that this provider/components wraps. */}
      {props.children}
    </ResumeContext.Provider>
  );
};

export default ResumeContextProvider;
