import styles from "../app.module.css";
import "bootstrap/dist/css/bootstrap.min.css";


const Foodinput = ({handleKeyDown, onButtonClicked}) => {
  return (
    <>
      {console.log("food input is being rendered")}

      <div className="d-flex gap-1">
   
        <input id="foodinput"
          type="text" 
          placeholder="Enter Ur Food"
          onKeyDown={handleKeyDown}
          className={styles.foodinput}
        />
        <button
          className={`${styles.bttn}`}
          onClick={()=>{onButtonClicked()}}
        >
          Add Item
        </button>
      </div>
    </>
  );
};

export default Foodinput;
