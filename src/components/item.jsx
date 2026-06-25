import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../app.module.css';



const Item = ({ fooditems, onDeleteItem }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {fooditems}

      <button
        type="button"
        className={`${styles.button} btn btn-primary btn-sm ms-2`}
        onClick={() => onDeleteItem(fooditems)}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
