import { useContext } from "react";
import Product from "./Product";
import { GlobalContext } from "../Context/GlobalState";


export const AllProducts = () => {
  const {Data, search, setSearch, dizi, setDizi} = useContext(GlobalContext)
  const searchClick = (e) => {
    e.preventDefault()
    let searched = Data.filter(item => {
      return item.name.search(search) !== -1
    })
    setDizi(searched)
    setSearch('')
  }


  return (
    <div className="allProducts">
      <form className="searchBar" onSubmit={(e) => searchClick(e)}>
        <input value={search} onChange={(e) => setSearch(e.target.value) }/>
        <button>Ara</button>
      </form>
        { dizi.length>0 &&
          dizi.map(ürün => (
            <Product ürün={ürün} key={ürün.id}/>
          ))
        }
        { dizi.length==0 &&
          Data.map(ürün => (
            <Product ürün={ürün} key={ürün.id}/>
          ))
        }
    </div>
  )
};
