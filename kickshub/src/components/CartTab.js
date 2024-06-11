export default function CartTab({ onClickCart }) {
  return (
    <div className='cart-tab'>
      <h2>Shopping Cart</h2>
      <div className='cart-tab__products'>
        <div className='cart-product'>
          <div className='cart-img-name'>
            Image
            <h3>Name</h3>
          </div>
          <p>Color</p>
          <p>Size</p>
          <div className='cart-qty-price'>
            <div className='quantity__wrapper'>
              <button>-</button>
              <input type='number'></input>
              <button>+</button>
            </div>
            <p>Price</p>
          </div>
        </div>
      </div>
      <div className='cart-tab__btns'>
        <button onClick={onClickCart}>Close</button>
        <button>Check Out</button>
      </div>
    </div>
  );
}
