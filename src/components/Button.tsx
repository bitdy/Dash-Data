import Alert from "./Alert";

interface Props {
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  children: string;
  onClickBtn: () => void;
}
const Button = ({ children, onClickBtn, color = "primary" }: Props) => {
  return (
    <>
      <button className={"m-2 btn btn-" + color} onClick={onClickBtn}>
        {children}
      </button>
    </>
  );
};

export default Button;
