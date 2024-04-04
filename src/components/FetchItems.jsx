import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/ItemsSlice";
import { fetchStatusActions } from "../store/FetchedItemSlice";

function FetchItems() {
  const fetchStatus = useSelector((store) => store.fetchedStatus);

  const dispatchd = useDispatch();
  console.log(fetchStatus);

  useEffect(() => {
    if (fetchStatus.fetchedDone) return;

    // const controller = new AbortController();
    // const signal = controller.signal;

    // dispatchd(fetchStatusActions.markFecheingStarted());

    fetch("http://localhost:8080/items")
      .then((res) => res.json())
      .then(({ items }) => {
        // dispatchd(fetchStatusActions.markFechedDone());
        // dispatchd(fetchStatusActions.markFecheingEnd());
        dispatchd(itemsActions.addInitialItems(items[0]));
      });

    console.log(fetchStatus);
    // return ()=>{
    //   controller.abort();
    // }
  }, [fetchStatus]);

  return <></>;
}

export default FetchItems;
