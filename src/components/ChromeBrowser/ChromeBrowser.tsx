import React from "react";
import { ThemeProvider } from "styled-components";
import BrowserProps from "../types/BrowserProp";
import {
  Bar,
  BrowserContainer,
  ContentContainer,
  Dot,
  Dots,
  IconsFlex,
  SearchBar,
  SearchRow,
  TabsContainer,
  TitleRow,
  darkTheme as defaultDarkTheme,
  lightTheme as defaultLightTheme,
} from "./styles";

// Import SVGs
import ArrowBackIcon from "../../assets/arrowback.svg?react";
import ArrowForwardIcon from "../../assets/arrowforward.svg?react";
import MoreVertIcon from "../../assets/morevert.svg?react";
import RefreshIcon from "../../assets/refresh.svg?react";
import Tab from "./containers/Tab";

const ChromeBrowser: React.FC<BrowserProps> = ({
  theme = "light",
  tabs = [
    {
      name: "Example",
      link: "https://example.com",
      content: (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "640px",
            height: "480px",
          }}
        >
          Hello
        </div>
      ),
    },
  ],
  shadow = true,
  usecontentsize = true,
  leftIcons = (
    <>
      <ArrowBackIcon width={16} height={16} />
      <ArrowForwardIcon width={16} height={16} />
      <RefreshIcon width={16} height={16} />
    </>
  ),
  rightIcons = <MoreVertIcon width={16} height={16} />,
  children = null,
  lightTheme = null,
  darkTheme = null,
  tab = 0,
  setTab = () => {},
  ...props
}) => {
  return (
    <ThemeProvider
      theme={
        theme === "dark"
          ? darkTheme || defaultDarkTheme
          : lightTheme || defaultLightTheme
      }
    >
      <BrowserContainer
        {...props}
        $shadow={shadow}
        $usecontentsize={usecontentsize}
      >
        <Bar>
          <TitleRow>
            <Dots>
              <Dot color="red" />
              <Dot />
              <Dot color="green" />
            </Dots>
            <TabsContainer>
              {Array.isArray(tabs) &&
                tabs.length > 0 &&
                tabs.map((t, index) => {
                  if (index === tab) {
                    return (
                      <Tab key={index} selected>
                        {t.name}
                      </Tab>
                    );
                  } else {
                    return (
                      <Tab key={index} onClick={() => setTab(index)}>
                        {t.name}
                      </Tab>
                    );
                  }
                })}
            </TabsContainer>
          </TitleRow>
          <SearchRow>
            <IconsFlex>{leftIcons}</IconsFlex>
            <SearchBar>
              {Array.isArray(tabs) && tabs.length > 0 && tabs[tab].link}
            </SearchBar>
            <IconsFlex>{rightIcons}</IconsFlex>
          </SearchRow>
        </Bar>
        <ContentContainer>
          {Array.isArray(tabs) && tabs.length > 0 && tabs[tab].content}
          <div style={{ position: "absolute" }}>{children}</div>
        </ContentContainer>
      </BrowserContainer>
    </ThemeProvider>
  );
};

export default ChromeBrowser;
