import { useState } from "react";
import style from "./ListGroup.module.css"
import { CiViewTable } from "react-icons/ci"
interface Props {
  items : string[];
  heading : string[];
  onSelectItem : (item : string) => void ;
} 

function ListGroup({items , heading , onSelectItem} : Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1 className={style.ListGroupHeader}><CiViewTable /> {heading}</h1>
      <ul className="list-group m-2">
        {items.length === 0 && <p>No item found</p>}
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item)
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
