export default function CartTab({ onClickCart }) {
  return (
    <div className='cart-tab'>
      <h2>Shopping Cart</h2>
      <p>show item here</p>
      <div className='cart-tab__btns'>
        <button onClick={onClickCart}>Close</button>
        <button>Check Out</button>
      </div>
    </div>
  );
}
