import { useState } from "react";
import Styles from "./button.module.css";
import classnames from "classnames";

function Button() {
  const [on, setOn] = useState<Boolean>(false);
  return (
    <div className={Styles.ToggleContainer}>
      <label className={Styles.switch} >
        <input
          type="checkbox"
          checked={on as any}
          onChange={(e) => setOn(e.target.checked)}
        />
        <span
          className={classnames(Styles.slider,Styles.round)}
        ></span>
      </label>
     
    </div>
  );
}

export default Button;
