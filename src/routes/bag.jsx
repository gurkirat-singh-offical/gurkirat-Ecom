import React from "react";
import Bagsummary from "../components/Bagsummary";
import BagItem from "../components/BagItem";
import {useSelector} from "react-redux"

function Bag() {
  const bagItems = useSelector(store => store.bag)

  const items = useSelector((store) => store.items);

  const itemsFound = items.filter((item)=>{
    const elementFound = bagItems.indexOf(item.id)

    return elementFound >=0 ;
  })

  
  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {itemsFound.map((item) => (
              <BagItem item={item}></BagItem>
            ))}
          </div>
          <Bagsummary></Bagsummary>
        </div>
      </main>
    </>
  );
}

export default Bag;
