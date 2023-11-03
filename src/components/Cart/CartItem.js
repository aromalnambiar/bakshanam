import React from "react";
import styles from "./CartItem.module.css";

const CartItem = (props) => {


  const price = `Rs: ${props.price.toFixed(2)}`;
  return (
    <>
      <div className={styles.item}>
        <div className={styles.item_content}>
          <div className={styles.item_img_div}>
            <img
              className={styles.item_image}
              src={props.src}
              alt="food"
            ></img>
          </div>
          <div className={styles.item_value}>
            <div className={styles.item_name_div}>
              <p>{props.name}</p>
            </div>
            <div className={styles.item_info_div}>
              <p>{price}</p>
              <p>x {props.amount}</p>
            </div>
          </div>
        </div>
        <div className={styles.item_buttons}>
          <div onClick={props.onRemove}>
            <button>-</button>
          </div>
          <div onClick={props.onAdd}>
            <button>+</button>
          </div>
        </div>
      </div>
    </>
  );
  //ENDS
};

export default CartItem;
