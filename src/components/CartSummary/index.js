import './index.css'
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let totalAmount = 0
      cartList.forEach(item => {
        totalAmount += item.quantity * item.price
      })
      /*    const totalAmount = cartList.reduce(
        (pointer, item) => pointer + item.quantity * item.price,
        0,
      ) */
      return (
        <div className="cartSummaryContainer">
          <div className="orderTotal">
            <h1 className="grandTotal">
              Order Total: <span>{totalAmount}/-</span>
            </h1>
            <p className="summaryDescription">
              {cartList.length} Items in cart
            </p>
            <button type="button" className="checkoutBtn">
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
