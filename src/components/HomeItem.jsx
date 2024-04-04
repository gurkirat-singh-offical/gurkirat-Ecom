import React from "react";
import {useDispatch, useSelector} from "react-redux"
import { bagActions } from "../store/bagSlice";

function HomeItem({ item }) {
  const dispatch = useDispatch()
  const bagItems = useSelector((store)=> store.bag)

  const elementFound = bagItems.indexOf(item.id) >= 0

  const handleAddItem = ()=>{
     dispatch(bagActions.addToBag(item.id));
  }
  const handleRemoveItem = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };
  return (
    <>
      <div className="item-container">
        <img src={item.image} alt="item image" className="item-image" />
        <div className="rating">
          {item.rating.stars}⭐ |{item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name} </div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="orignal-price">rs {item.orignal_price} </span>

          <span className="discount">{item.discount_percentage}% OFF</span>
        </div>

        <div>
          {elementFound ? (
            <button className="btn-remove-bag" onClick={handleRemoveItem}>
              Remove
            </button>
          ) : (
            <button className="btn-add-bag" onClick={handleAddItem}>
              Add To Bag
            </button>
          )}
          
        </div>
      </div>
    </>
  );
}

export default HomeItem;
