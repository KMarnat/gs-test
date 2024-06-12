interface ToggleButtonProps {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  isActive: boolean;
  buttonLabel: string;
  onClick: () => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  icon: Icon,
  isActive,
  buttonLabel,
  onClick,
}) => {
  return (
    <button onClick={onClick} className={`toggle-button ${isActive ? "active" : "in-active"}`}>
      <span className="toggle-button__bubble">
        <Icon />
      </span>
      {buttonLabel}
    </button>
  );
};

export default ToggleButton;
