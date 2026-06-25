import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../app.module.css';




      
const Heading = () => {

    return (
    <>
  <h1
  className={styles.h1}
  onClick={() => {
    console.log("don't click me");
    const value = prompt("Are you sure you want to click me?");
    console.log(value);

   document.querySelector("h1").innerText = value;}



  }
>
  Healthy Food
</h1>




</>

    )




}


export default Heading;