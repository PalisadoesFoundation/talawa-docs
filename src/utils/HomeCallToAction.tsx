import React from "react";
import  ActionButton  from "./ActionButton";

interface HomeCallToActionProps {}

 const HomeCallToAction: React.FC<HomeCallToActionProps> = () => {
  return (
    <>
      <ActionButton
        type="primary"
        href="https://github.com/PalisadoesFoundation"
        target="_self"
        buttonClassName="custom-button"
      >
        Learn More
      </ActionButton>
      <ActionButton type="secondary" href="/docs/" target="_self">
        Developers
      </ActionButton>
    </>
  );
};


export default HomeCallToAction