import { useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalState";

export const ProductDetail = () => {
    const {Data} = useContext(GlobalContext)
    const {memberId} = useParams()

  return (
    <div>
        <div className="product">
            <div id='zoom'>
            <img src={Data[memberId].img}/>
            </div>
            <h2>{Data[memberId].name}</h2>
            <h3>₺{Data[memberId].price} </h3>
        </div>
    </div>
  )
};
