import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Option, { OptionLink } from "../components/Option";

function HomePage() {
  return (
    <main>
      <OptionLink
        title="Feed Filter"
        icon="Filter"
        LinkTo="/feedfilter"
        discription="filter out your youtube feed based on your need"
      />
      <OptionLink
        title="Search Trigger"
        icon="default"
        LinkTo="/search"
        discription="Our extension do some search in your Youtube search in background to improve your feed."
      />
      <OptionLink
        title="View/Add Topic"
        icon="Add"
        LinkTo="/topic"
        discription="add topic before select feed filter"
      />
      <OptionLink
        title="Feed enhancer"
        icon="Video"
        LinkTo="/"
        discription="This insert some videos related to topic"
      />
    </main>
  );
}

export default HomePage;
