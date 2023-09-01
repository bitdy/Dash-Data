import { useState } from "react";
import Alert from "../Alert";
import Button from "../Button";
import ListGroup from "../ListGroup";
import Like from "../Like";

function Home() {
  const items = ["New York", "San Francisco", "Tokyo", "London"];
  const [showItem, setshowItem] = useState(false);

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [drink , setDrink] = useState({
    title : "Americono",
    price : 5,
  });

  const handleDrink = () => {
    setDrink({...drink , price : 6})
  } ;

  const [customer , setCustomer] = useState({
    name : "John",
    address : {
      city : "San Francisco",
      zipCode : 94111
    }
  })

  //Try to stop using object nesting 
  //becuase it's makes lot's of problems

  const handleZipCode = () => {
    setCustomer({
      ...customer ,
      address: {...customer.address , zipCode : 92112}
    })
  }

  const [ tags , setTages] = useState(["happy" , "cheerful"]);

  const handleTag = () => {
    //Add
    setTages([...tags , 'exciting']);

    //Remove 
    setTages(tags.filter(tag => tag !== "happy"));

    // Update
    setTages(tags.map(tag => tag === "happy" ? "happiness" : tags));
  }

  const [bugs , setBugs] = useState([
    {id : 1 , title : "Bug 1" , fixed: false},
    {id : 2 , title : "Bug 2" , fixed: false}
  ]);

  const handleMulti = () => {
    setBugs(bugs.map(bug => bug.id === 1 ? {...bug , fixed : true} : bug))
  }

  return (
    <>
      {showItem && <Alert onClose={() => setshowItem(false)}>Your'welcome</Alert>}
      {showItem && <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> }
      {showItem === true ? <Button onClickBtn={() => setshowItem(false)}>hide the form</Button> :<Button onClickBtn={() => setshowItem(true)}>show the form</Button>}
      <Like onClick={() => console.log("clicked")} />
      <div className="d-inline">
      <button onClick={handleDrink} className="mx-2 btn btn-success">Update Drink</button>
      {drink.price}
      <button onClick={handleZipCode} className="btn btn-warning mx-2">Updata ZipCode </button>
      {customer.address.zipCode}
      <button onClick={handleTag} className="btn btn-primary mx-2">Update Tag</button>
      {tags}
      </div>
      <button onClick={handleMulti} className="btn btn-outline-dark mx-3">Fixed First bug the bug</button>
      
    </>
  );
}

export default Home;
