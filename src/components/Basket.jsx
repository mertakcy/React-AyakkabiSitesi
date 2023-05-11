import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import '../styles/Product.css'

export const Basket = () => {
    const {sepet, total, setTotal,addClick,deleteClick} = useContext(GlobalContext)

    const totalPrice = sepet.reduce((pre,sepet) => pre +(sepet.amount*sepet.price),0)
    setTotal(totalPrice) 

  return (
    <div className="basket">
        {sepet.length>0 && <h2 id="total">Toplam Tutar: {total} ₺</h2> || <h2 id="total">Sepetinizde Hiç Ürün Yok</h2>}
        {
            sepet.map(ürün => {
                
                return (
                    <div className="product" key={ürün.id}>
                        <div id="zoom">
                            <img src={ürün.img}/>
                        </div>
                        <h2>{ürün.name}</h2>
                        <h3>₺{ürün.price} </h3>
                        <div className='basketButton'>
                            <button onClick={() => addClick(ürün)}>+</button> <b>{ürün.amount}</b> <button onClick={() => deleteClick(ürün)}>-</button>
                        </div>
                    </div>
                )
                
            })
        }
    </div>
  )
};
