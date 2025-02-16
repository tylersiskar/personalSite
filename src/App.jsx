import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Home, About, ContactModal } from "./pages";
import { Header, wheel, Menu } from "./components";
import { data } from "./data";

const AppWrapper = styled.div`
  background-image: url(${wheel});
  background-position: center;
  background-size: cover;
  overflow: hidden;
  scroll-behavior: smooth;
`;

function RenderScreen({ route }) {
  const [animate, animateContactPage] = useState(false);
  const [contactPage, showContactPage] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  let path = loc.pathname.substring(1);

  function _onOpen() {
    showContactPage(true);
    animateContactPage(true);
  }

  function _onClose() {
    animateContactPage(false);
    setTimeout(() => showContactPage(false), 350);
  }

  const commonElements = (
    <>
      {contactPage && <ContactModal open={animate} onClick={_onClose} />}
      <Header onButtonClick={_onOpen} path={path} onBurgerClick={setOpen} />
      <Menu open={open} onContactClick={_onOpen} />
    </>
  );

  switch (route) {
    case "work":
    case "academia":
    case "about":
      return (
        <AppWrapper>
          {commonElements}
          <About data={data[path]} />
        </AppWrapper>
      );
    case "homepage":
    default:
      return (
        <AppWrapper>
          <Home data={data["home"]} />
        </AppWrapper>
      );
  }
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RenderScreen route="homepage" />} />
      <Route path="/about" element={<RenderScreen route="about" />} />
      <Route path="/work" element={<RenderScreen route="work" />} />
      <Route path="/academia" element={<RenderScreen route="academia" />} />
    </Routes>
  );
};

export default App;
