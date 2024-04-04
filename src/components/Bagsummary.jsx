import React from "react";
import {  useSelector } from "react-redux";

function Bagsummary({}) {
  const bagItemIds = useSelector((store) => store.bag);

  const items = useSelector((store) => store.items);

  const itemsFound = items.filter((item) => {
    const elementFound = bagItemIds.indexOf(item.id);

    return elementFound >= 0;
  });

  const Convience_fees =99 ;
  let totalItem = bagItemIds.length;
  let totalMrp =0;
  let totalDiscount =0;

  itemsFound.forEach((bagItem)=>{
      totalMrp += bagItem.original_price;
      totalDiscount += bagItem.original_price -bagItem.current_price;
  })

  let finalPayment = totalMrp - totalDiscount + Convience_fees;


  
  return (
    <>
      <div className="bag-summary">
        <div className="bag-details-container">
          <div className="price-header">PRICE DETAILS ({totalItem})</div>
          <div className="price-item">
            <span className="price-item-tag">Total MRP</span>
            <span className="price-item-value">{totalMrp}</span>
          </div>
          <div className="price-item">
            <span className="price-item-tag">Discount on MRP</span>
            <span className="price-item-value priceDetail-base-discount">
              {totalDiscount}
            </span>
          </div>
          <div className="price-item">
            <span className="price-item-tag">Convenience Fee</span>
            <span className="price-item-value">{Convience_fees}</span>
          </div>
          <hr />
          <div className="price-footer">
            <span className="price-item-tag">Total Amount</span>
            <span className="price-item-value">{finalPayment}</span>
          </div>
        </div>
        <button className="btn-place-order">
          <div className="css-xjhrni">PLACE ORDER</div>
        </button>
      </div>
    </>
  );
}

export default Bagsummary;
