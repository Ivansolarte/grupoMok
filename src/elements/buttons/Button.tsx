
import { IButton, defaultButton } from "../../interfaces/interface.Button";

export const Button = (props: IButton) => {
  return (
    <button
      className={`btn btn-success ${props.class}`}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};
Button.defaultProps = defaultButton;
