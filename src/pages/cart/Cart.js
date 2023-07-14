import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'
import { PRODUCTS } from '../../products';
import {CartItem} from './CartItem';
import './Cart.css';
import {useNavigate} from 'react-router-dom';

function Cart() {
  const {cartItems,getTotalCartAmount} =useContext(ShopContext);
  const navigate = useNavigate();
  const totalAmount = getTotalCartAmount();
  return (
    <div className='cart'>
      <div>
        <h1>Your cart Itema</h1>
      </div>
      <div className='cartItems'>
        {
          PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product} key={product.id}/>
            }
          })
        }
      </div>

      {
        totalAmount > 0 ?

        <div className='checkout'>
          <p>Subtotal : ${totalAmount}</p>
          <button onClick={() => navigate('/')}>Continue Shopping</button>
          <button>Checkout</button>
        </div>
        :
        <h1>Yout Cart is empty</h1>
      }
    </div>
  )
}

export default Cart