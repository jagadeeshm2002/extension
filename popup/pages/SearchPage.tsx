import React from "react";
import Styles from "./search.module.css";
import cl from "classnames";
import { Link } from "react-router-dom";

function SearchPage() {
  const [value, setValue] = React.useState("default");
  function handleTrigger() {
    if (value !== "default") {
      console.log("Triggering search...");
      chrome.storage.sync.set({ TriggerTopic: value });
      chrome.runtime.sendMessage<{ type: "performSearch"; topic: string }>({
        type: "performSearch",
        topic: value,
      });
    }
  }
  return (
    <main className={Styles.SearchContainer}>
      <div className={Styles.TitleContainer}>
        <p className={Styles.Title}>Search Trigger AI</p>
        <p className={Styles.Description}>
          Search trigger get content title and Trigger auto Seaarch in Youtube
        </p>
      </div>
      <div className={Styles.InputContainer}>
        <p className={Styles.InputTitle}>Select Topic</p>

        <select
          className={Styles.Input}
          name="topic"
          id="topic"
          value={value || "default"}
          onChange={(e) => setValue(e.target.value)}
        >
          <option value="default" className="option" disabled>
            Select Topic
          </option>
          <option value={"frontend"} className="option">
            frontend
          </option>
          <option value={"backend"} className="option">
            backend
          </option>
        </select>
      </div>
      <div className={Styles.ButtonContainer}>
        <button
          className={cl(Styles.button, Styles.ButtonTrigger)}
          onClick={handleTrigger}
        >
          Trigger
        </button>
      </div>
    </main>
  );
}

export default SearchPage;
