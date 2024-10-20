import React from "react";
import { Link } from "react-router-dom";
import Topic from "../Topic";
import Option, { OptionButton } from "../Option";

function Home() {
  return (
    <>
      <section>
        <Topic />
      </section>
      <section>
        <Option />
      </section>
      <section>
        <Option />
      </section>
      <section style={{marginBottom:"10px"}}>
        <OptionButton />
      </section>
    </>
  );
}

export default Home;
