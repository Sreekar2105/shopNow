import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { Row,Col, Button } from 'react-bootstrap';
import cart from '../images/cart.png'
import emoji from '../images/emoji.png'
import { addToCart, cartTotalAmount, clearCart, decreaseQuantity, removeFromCart } from './cartSlice';
import Footer from './Footer';
import bin from '../images/delete.png'
import { px } from 'framer-motion';

function CartItems() 
{
  // window.scrollTo(0, 0);

  let dispatch = useDispatch();

  let itemsCount = useSelector((state) => {return state.Cart.itemsCount});
  let totalPrice = useSelector((state) => {return state.Cart.totalPrice});
  let items = useSelector((state) => {return state.Cart.items});

  let max_length = 75;

 
  if(itemsCount == 0)
  {
      return(
          <div className='empty-cart'>
          <div className='d-flex justify-content-center'>
              <img src={emoji} alt="sad-emoji" className='emoji me-lg-3 mt-lg-3'/>
               <p className='empty-cart-para'>Your Cart is currently empty</p>
             </div>
             <img className="cart-img" src={cart}/>
             <Footer/>

          </div>

      )

  }

  else{


     return(

   <div className='cart-items overflow-x-hidden'>

     <div className='cart-page-title pt-3 pb-2'>
       <h1 className='text-center'>Shopping Cart</h1>
     </div>

     <div className='subtotal-and-clear-cart d-flex justify-content-between py-lg-3 px-lg-5 mx-lg-5 my-lg-2 '>
       { 
          itemsCount==1 ?
         <p className='cart-subtotal'>Cart Subtotal ( {itemsCount} Item ) : ₹{totalPrice}</p> 
         : 
         <p className='cart-subtotal'>Cart Subtotal ( {itemsCount} Items ) : ₹{totalPrice}</p>
        
       }
        <Button variant="secondary" className='me-lg-5 py-lg-2 px-lg-4 clear-cart-button' onClick={()=>{dispatch(clearCart())}}>Clear Cart</Button>
     </div>

        {
          items.map((item,index) =>
          (             
                <Row className='gx-0'>
                  
                       <div className='cart-products d-flex align-items-center row-gap-sm-3'>

                            <Col lg={3} className='product-image-and-quantity d-flex flex-column'>

                    <img src={item.img1} alt="product-image" className="product-image img-fluid"/>

                    <div className='quantity d-flex gap-2'>

                      <button className='button decrement' onClick={() => 
                        {
                          dispatch(decreaseQuantity(item))
                          dispatch(cartTotalAmount(item))
                          }}>
                        <p className='decrement-symbol'>-</p></button>

                      <p className='count'>{item.quantity}</p>

                      <button className='button increment' onClick={() => {
                        dispatch(addToCart(item))
                        dispatch(cartTotalAmount(item))
                        }}><p className='increment-symbol'>+</p></button>

                      <button className='ms-lg-3 mb-4 delete-button' onClick={() => {
                        dispatch(removeFromCart(item))
                        dispatch(cartTotalAmount(item))
                        }}><img src={bin} alt="bin-img" className='delete-img'/></button>
                        
                    </div>
                   
                  </Col>
              


               
              <Col lg={9} className='product-data  d-flex ms-5 ms-lg-3 me-2 mb-2'>
               
                <Col lg={9}>
                <div>
              <p className='fw-semibold cart-products-title'>{item.title}</p>

              <p className='cart-products-short-description'>
               {
                 item.description.length > max_length ? `${item.description.substring(0,max_length)}...` : item.description}

              </p>

              <p className='cart-products-description'>

                {item.description}

                </p>
              </div>
                </Col>
              
                 
           <Col lg={3}>
           <div className='cart-item-price fw-semibold'>₹{item.price}</div>
           </Col>
             
              </Col>


              </div>

              </Row>


          ))
        }

<Footer/>

     </div>

)
}
}

export default CartItems