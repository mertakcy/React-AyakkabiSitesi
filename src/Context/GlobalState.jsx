import { createContext, useEffect, useState } from "react";
import Data from '../Data/data.json'

export const GlobalContext=createContext();

export const GlobalProvider=({children})=>{

    const [sepet, setSepet] = useState([])
    const [total, setTotal] = useState(0)
    const [search, setSearch] = useState('')
    const [dizi, setDizi] = useState([])
    const [loginBilgi, setLoginBilgi] = useState({ kullanıcıAdı: '', sifre: ''})
    const [signBilgi, setSignBilgi] = useState({ kullanıcıAdı: '', sifre: ''})
    const [kayıtOldumu, setKayıtOldumu] = useState(false)
    
    
    const addClick = (ürün) => {
        let addFind = sepet.find(item => item.id === ürün.id)
        if(addFind) {
            addFind.amount += 1
            setSepet((prev) => [...prev.filter(item => item.id !== ürün.id), {
                id: ürün.id,
                name: ürün.name,
                price: ürün.price,
                img: ürün.img,
                amount: addFind.amount
            }])
        }
        else {
            setSepet((prev) => [...prev, {
                id: ürün.id,
                name: ürün.name,
                price: ürün.price,
                img: ürün.img,
                amount: 1
            }])
        }
    }


    
    const deleteClick = (ürün) => {
        let deleteFind = sepet.find(item => item.id === ürün.id)
        deleteFind.amount -= 1
        if(deleteFind.amount === 0) {
            setSepet((prev)=>[...prev.filter(item => item.id !== ürün.id)])
        }
        else {
            setSepet((prev)=>[...prev.filter(item => item.id !== ürün.id), {
                id: ürün.id,
                name: ürün.name,
                price: ürün.price,
                img: ürün.img,
                amount: deleteFind.amount
            }])
        }
    }



    const value={
        Data,
        sepet, setSepet,
        total, setTotal,
        addClick,
        deleteClick,
        search, setSearch,
        dizi, setDizi,
        loginBilgi, setLoginBilgi,
        kayıtOldumu, setKayıtOldumu,
        signBilgi, setSignBilgi
    }

    useEffect(() => {
        console.log(sepet);
    }, [sepet])

    

    return(
        <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
    )
}