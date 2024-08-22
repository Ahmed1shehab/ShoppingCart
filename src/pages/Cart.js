import { useTitle } from "../assets/hooks/useTitle"
import { Cartitems } from "../components/Cartitems";

export const Cart = () => {
  useTitle("Cart");
    
  const products = [
    {id: 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": " /assets/Products/1001.png",}, 
  {id: 2, "name": "boAt Rockerz 450", "price": 49, "image": "/assets/Products/1002.png",}, 
  ]
  return (
  <main>
    <section className="cart">
    <h1>Cart Items: {products.length}</h1>

      {products.map((product) => <Cartitems key={product.id} product={product} />)}
    </section>
  </main>
  
  )
}

 
