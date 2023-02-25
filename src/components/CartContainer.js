import CartItem from "./CartItem"
import { useDispatch ,useSelector } from "react-redux"
import { clearCart } from "../features/cart/cartSlice"
import { openModal, closeModal } from "../features/modal/modalSlice"


const CartContainer = () => {
    const {cartItems, amount, total} = useSelector((store) => store.cart)
  const dispatch = useDispatch()
  if(amount < 1){
    return (
        <section className="cart">
            <header>
                <h2>Your Bag</h2>
                <h4 className="empty-cart">
                    is currently empty
                </h4>
            </header>
        </section>
    )
  }

  return (
    <section className="cart">
        <header>
            <h2>Your Bag</h2>
        </header>
        <div>
            {cartItems.map((cartItem)=>{
                return (
                    <CartItem key={cartItem.id} {...cartItem}/>
                )
            })}
        </div>
        <footer>
            <hr />
            <div className="cart-total">
                <h4>
                    total <span>${total.toFixed(1)}</span>
                </h4>
            </div>
            <button type="button" className="btn clear-btn" onClick={() => dispatch(openModal())}>clear cart</button>
        </footer>
    </section>
  )
}

export default CartContainer