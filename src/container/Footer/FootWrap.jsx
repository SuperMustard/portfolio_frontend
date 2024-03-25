import React from "react";
import Footer from "./Footer";
import { StarsCanvas } from "../../component/canvas";
import { AppWrap, MotionWrap } from "../../Wrapper";
import { BrowserView } from "react-device-detect";

function FootWrap() {
  return (
    <div className="app__footerWrap">
      <BrowserView>
        <StarsCanvas />
      </BrowserView>
      <Footer />
    </div>
  );
}

export default AppWrap(
  MotionWrap(FootWrap, "app__footer"),
  "contact",
  "app__darkbg"
);
