import '../styles/Product.css'
import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import { useNavigate } from 'react-router-dom';


const Product = ({ürün}) => {
  const {sepet, setSepet, addClick} = useContext(GlobalContext)
  const navigate = useNavigate()
  const sepettekiSayi = sepet.find(item => item.id === ürün.id)

  const ClickImage = () => {
    navigate(`/products/${ürün.id}`)
  }

  return (
    <div className="product">
        <div id='zoom'>
          <img onClick={() => ClickImage()} src={ürün.img}/>
        </div>
        <h2>{ürün.name}</h2>
        <h3>₺{ürün.price} </h3>
        <div className='button'>
          <button onClick={() => addClick(ürün)}>Sepete Ekle</button>
          {sepettekiSayi && <b>{sepettekiSayi.amount} adet</b> || ""}
        </div>
    </div>
  )
};

export default Product;
