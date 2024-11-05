
import Styles from "./button.module.css";
import classnames from "classnames";

function Button({ state, toggle }: { state: boolean; toggle: () => void }) {
  return (
    <div className={Styles.ToggleContainer}>
      <label className={Styles.switch}>
        <input type="checkbox" checked={state} onChange={toggle}/>
        <span className={classnames(Styles.slider, Styles.round)}></span>
      </label>
    </div>
  );
}

export default Button;
