import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
        <div className='navbar'>
        <div className='nav-left'>
            <Link to="/" className='h-text'><h1>Eshop</h1></Link>
        </div>
        <div className='nav-right'>
            <Link to="/cart" className='nav-link'>Cart</Link>
            {/* <Link to="/myproducts" className='nav-link'><p>Products</p></Link> */}
            <Link to="/counter" className='nav-link'><p>Counter</p></Link>
        </div>
    </div>
    <div>
        <h1>Hero Section</h1>
    </div>
    </div>
  )
}
