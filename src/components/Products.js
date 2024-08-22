import './Products.css'

export const Products = ({product}) => {
    const { name, price, image} = product
  return (
    <div className="products">
        <img src={image} alt={name} />
        <p>{name}</p>
        <div className="quantity">
            <span className='price'>{price}$</span>
            <button>Add To Cart</button>
        </div>      
    </div>
  )
}

