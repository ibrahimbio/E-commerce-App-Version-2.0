import PRODUCT from '../../products'
import Product from './Product'
import "./shop.css";


const Shop = () => {
  return (
    <div className='shop'>
        <div className='shopTitle'>
            <h1>Shoe Stack</h1>
        </div>
        <div className="products" >
            {PRODUCT.map((product) => { 
           return <Product data={product}/>    
            })}
        </div>

    
    </div>
  )
}

export default Shop
