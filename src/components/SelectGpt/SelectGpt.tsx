import StarsIcon from "../../assets/stars.svg?react";
import BoltIcon from "../../assets/bolt.svg?react";
import { useState } from "react";
import ToggleButton from "../ToggleButton/ToggleButton";

const SelectGpt = () => {
  const [activeBtn, setActiveBtn] = useState<string>("old");

  const handleClick = (version: string) => {
    setActiveBtn(version);
  };

  return (
    <div className="select-gpt">
      <ToggleButton
        icon={StarsIcon}
        isActive={activeBtn === "old"}
        buttonLabel="GPT-3.5"
        onClick={() => handleClick("old")}
      />
      <ToggleButton
        icon={BoltIcon}
        isActive={activeBtn === "new"}
        buttonLabel="GPT-4"
        onClick={() => handleClick("new")}
      />
    </div>
  );
};

export default SelectGpt;
