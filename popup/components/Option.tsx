import React, {
  type JSXElementConstructor,
  type ReactElement,
  type ReactNode,
} from "react";
import "./option.css";
import Button from "./Button";
import { Link } from "react-router-dom";
import { BrainCircuit, DiamondPlus, FilterX, Video } from "lucide-react";

function Option({
  title,
  discription,
  state,
  setState,
  head = false,
}: {
  title: string;
  discription?: string;
  state: boolean;
  setState: () => void;
  head?: boolean;
}) {
  return (
    <div className="optionContainer">
      <div className="OptionWrapperforButton">
        <div className="textContainer">
      {head ? <div className="optionTitleHead">{title}</div>:<>
      <div className="optionTitle">
        <p>{title}</p>
      </div>
      <div className="optionDescription">
        <p>{discription}</p>
      </div></>}
        </div>

        <div className="buttonContainer">
          <Button state={state} toggle={setState} />
        </div>
      </div>
    </div>
  );
}

export default Option;

export function OptionLink({
  title,
  discription,
  LinkTo,
  icon,
}: {
  title: string;
  discription: string;
  LinkTo: string;
  icon: string | any;
}) {
  const iconMap: { [key: string]: React.ReactElement } = {
    Video: <Video size={32} color="#ababab" strokeWidth={1.5} />,
    Filter: <FilterX size={32} color="#ababab" strokeWidth={1.5} />,
    Add: <DiamondPlus size={32} color="#ababab" strokeWidth={1.5} />,
    default: <BrainCircuit size={32} color="#ababab" strokeWidth={1.5} />,
  };
  const iconsvg = iconMap[icon] || iconMap.default;
  return (
    <div className="optionContainer">
      <Link to={LinkTo || "/"} className="optionWrapper">
        <div className="iconContainer">
          <div className="icon">{iconsvg}</div>
        </div>

        <div className="textContainer">
          <div className="optionTitle">
            <p>{title}</p>
          </div>
          <div className="optionDescription">
            <p>
              {discription}
              <br />
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
