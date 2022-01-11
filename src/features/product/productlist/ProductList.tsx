import React, { useEffect, useState } from "react";

import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { formatRupiah, getList, selectData } from "./productlistSlice";
import styles from "./ProductList.module.css";

export function ProductList() {
  const [payload, setPayload] = useState({
    pageNumber: 1,
    rowPerpage: 10,
    search: "",
  });
  const data = useAppSelector(selectData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getList(payload));
  }, []);
  return (
    <div className={styles.container}>
      <h3>Product List</h3>
      {data.loading ? (
        <div>
          <span>loading</span>
        </div>
      ) : (
        <div className={styles.content}>
          {
            data.outData.map((item, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.cardContent}>
                  <div className={styles.cardImage}>
                    <span>image</span>
                  </div>
                  <div className={styles.catWrapper}>

                    {item.categories.map((cat, index) => <span key={index} className={styles.catName}>{cat.category_name}</span>)}
                  </div>
                  <h5>{item.productName}</h5>
                  <h6 className={styles.priceBadge}>{formatRupiah(item.productPrice.toString(), "Rp. ")}</h6>
                </div>
              </div>
            ))
          }
        </div>
      )}
    </div>
  );
}
