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
      <ActionButton type="secondary" href="/docs-user/" target="_self">
        Users
      </ActionButton>
      <ActionButton type="secondary" href="/docs-admin/" target="_self">
        Admins
      </ActionButton>
    </>
  );
};


export default HomeCallToAction