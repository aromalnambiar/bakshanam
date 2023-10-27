import React, { useContext } from "react";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import CartContext from "../../store/CartContext";
import TheButton from "../UI/Button";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `Rs: ${cartCtx.totalAmount.toFixed(2)}`;

  const hasItems = cartCtx.items.length > 0;

  const onAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const onRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  console.log(" cart",cartCtx)

  var cartItems = cartCtx.items.map((item) => (
    <CartItem
      name={item.name}
      amount={item.amount}
      price={item.price}
      key={`${item.src} ${item.id}`}
      src={item.src}
      onAdd={onAddHandler.bind(null, item)}
      onRemove={onRemoveHandler.bind(null, item.id)}
    />
  ));

 

  return (
    <Modal onCloseCart={props.onHideCart}>
      <div className={styles.items}>
        <div className={styles.item_group}>{cartItems}</div>
        <div className={`${styles.amount} `}>
          <p>Total Amount</p>
          <p>{totalAmount}</p>
        </div>
        <div className={styles.buttons}>
          <TheButton
            onClick={props.onHideCart}
            className={` ${styles.btn_style} me-2`}
          >
            Close
          </TheButton>
          {hasItems && (
            <TheButton className={styles.btn_style2} onClick={props.onOrder}>
              Order
            </TheButton>
          )}
        </div>
      </div>
    </Modal>
  );
};

// ENDS

export default Cart;
