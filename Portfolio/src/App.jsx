import React from "react";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import "./style.css";
import About from "./components/About";
import Services from "./components/Services";

export default function App() {
  const [state, setState] = React.useState(false);
  console.log(state);
  return (
    <>
      <Header
        onclick={() => {
          setState((prevstate) => !prevstate);
        }}
        state={state}
      />
      <HomePage />
      <About />
      <Services />
    </>
  );
}
