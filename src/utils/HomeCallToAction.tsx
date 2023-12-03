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
      <ActionButton type="secondary" href="/docs-mobile-user/" target="_self">
        Mobile
      </ActionButton>
      <ActionButton type="secondary" href="/docs-web-user/" target="_self">
        Web
      </ActionButton>
      <ActionButton type="secondary" href="/docs-admin/" target="_self">
        Admins
      </ActionButton>
      <ActionButton type="secondary" href="/docs/" target="_self">
        Devs
      </ActionButton>
    </>
  );
};


export default HomeCallToAction