import { ReactNode } from "react";

interface Props {
    children : ReactNode;
    onClose : () => void;
}
const Alert = ({ children , onClose } : Props) => {
  return (
    <div className="alert alert-primary m-2 alert-dismissible fade show">
      { children }
      <button type="button"  className="btn-close" title="close" onClick={onClose} data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}

export default Alert
