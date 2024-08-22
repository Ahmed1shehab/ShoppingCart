import './Cartitems.css'
export const Cartitems = ({product}) => {
    const { name, price, image} = product;
  return (
    <div className='cartitems'>
        <img src={image} alt={name} />
        <p>{name}</p>
        <span>{price}$</span>
        <button>Remove</button>
    </div>
  )
}


