import React from "react";
import Styles from "./search.module.css";
import cl from "classnames"
import { Link } from "react-router-dom";

function SearchPage() {
  return (
    <main className={Styles.SearchContainer}>
      <div className={Styles.TitleContainer}>
        <p className={Styles.Title}>Search Trigger AI</p>
        <p className={Styles.Description}>
          Search trigger get content titile form chatGpt Trigger auto Seaarch in
          Youtube
        </p>
      </div>
      <div className={Styles.InputContainer}>
        <p className={Styles.InputTitle}>Custom Prompt</p>

        <textarea name="prompt" id=""  className={Styles.Input} placeholder="Prompt here..."/>
      </div>
      <div className={Styles.ButtonContainer}>
        <button className={cl(Styles.button,Styles.ButtonTrigger)}>Trigger</button>
        <Link to="/" className={cl(Styles.button,Styles.ButtonBack)}>⬅️back</Link>
      </div>
    </main>
  );
}

export default SearchPage;
