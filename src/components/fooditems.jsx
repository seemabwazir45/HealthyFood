import { useState } from 'react';
import Item from './item.jsx';

const FoodItems = ({ fooditems, onDeleteItem }) => {
  return (
    <ul className="list-group">
      {fooditems.map((food, index) => (
        <Item
          key={index}
          fooditems={food}
          onDeleteItem={onDeleteItem}
        />
      ))}
    </ul>
  );
};
export default FoodItems;