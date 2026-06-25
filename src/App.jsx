import "bootstrap/dist/css/bootstrap.min.css";
import Item from "./components/item.jsx";
import Container from "./components/Container.jsx";
import "./App.css";
import FoodInput from "./components/foodinput.jsx";
import FoodItems from "./components/fooditems.jsx";
import Heading from "./components/Heading.jsx";
import { useState } from "react";





function App() {
  // var fooditems = ["Apple", "Banana", "harris", "danish", "Eggplant"];
  // let txtstateuser = useState("Healthy Food is entered by user");
  // let txtshow = txtstateuser[0];
  // let txtfunction = txtstateuser[1];
  // console.log(`current value of input is ${txtshow}`);
  // const handleparabystate = (e) => {
  //   txtfunction(e.target.value);
  // };
let [currentfooditem, setcurrentfoodmethod] = useState([  "Amrood",  "Banana",  "Badam", "Anar","Green Tea"]);
  
   let newfooditems;



  const onKeyDown = (event)=>{
    if (event.key==="Enter"){
    if(event.target.value!==""){newfooditems= event.target.value;
    let newitems =[...currentfooditem, newfooditems ];
    setcurrentfoodmethod(newitems);
  console.log(`Your Current Added Value is ${newfooditems}`)
    }} else{    alert("Please Enter a Food Item");  }

  }

const onAddButtonClick = () => {
  newfooditems = document.getElementById("foodinput").value;
if(newfooditems!==""){
  let newitems = [...currentfooditem, newfooditems];
  setcurrentfoodmethod(newitems);

  console.log(`Your Current Added by button: Value is ${newfooditems}`);


  document.getElementById("foodinput").value="";

} else{   alert("Please Enter a Food Item");}

};



const handleDeleteItem = (itemToDelete) => {
  alert(`${itemToDelete} has been bought!`);

  let newItems = currentfooditem.filter(
    (item) => item !== itemToDelete
  );

  setcurrentfoodmethod(newItems);

 console.log(`Your Current Added by button: Value is ${newfooditems}`);
 
  document.getElementById("foodinput").value="";


};



 
  return (
    <>
      <Container>
        <Heading></Heading>
       
        <FoodInput onButtonClicked={onAddButtonClick} handleKeyDown={onKeyDown}></FoodInput>
        <FoodItems fooditems={currentfooditem} onDeleteItem={handleDeleteItem}></FoodItems>
      </Container>
    </>
  );
}

export default App;
