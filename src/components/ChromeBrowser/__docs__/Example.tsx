import React, { FC } from "react";
import BrowserProps from "../../types/BrowserProps";
import ChromeBrowser from "../ChromeBrowser";

const Example: FC<BrowserProps> = ({
  theme,
  tabs,
  shadow,
  useContentSize,
  leftIcons,
  rightIcons,
  children,
}) => {
  const [tab, setTab] = React.useState(0);

  return (
    <div
      style={{
        width: "100%",
        height: "600px",
      }}
    >
      <ChromeBrowser
        theme={theme}
        tabs={tabs}
        tab={tab}
        setTab={setTab}
        useContentSize={useContentSize}
        shadow={shadow}
        leftIcons={leftIcons}
        rightIcons={rightIcons}
      >
        {children}
      </ChromeBrowser>
    </div>
  );
};

export default Example;
