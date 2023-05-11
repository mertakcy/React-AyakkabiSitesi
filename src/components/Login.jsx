import { useContext } from 'react';
import '../styles/Login.css'
import { GlobalContext } from '../Context/GlobalState';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  
  const navigate = useNavigate()  

  const {loginBilgi, setLoginBilgi, kayıtOldumu, setKayıtOldumu, signBilgi, setSignBilgi} = useContext(GlobalContext)

  const ClickLogin = (e) => {
    e.preventDefault()
    if(loginBilgi.kullanıcıAdı && loginBilgi.sifre) {
      setKayıtOldumu(true)
    }
    if (!loginBilgi.kullanıcıAdı) {
      alert('Lütfen kullanıcı adı giriniz')
    }
    if (!loginBilgi.sifre) {
      alert('Lütfen şifre giriniz')
    }
  }



  const ClickSign = (e) => {
    e.preventDefault()
    if(loginBilgi.kullanıcıAdı === signBilgi.kullanıcıAdı) {
      if(loginBilgi.sifre === signBilgi.sifre) {
        navigate('/products')
      }
      else {
        alert("Şifreyi yanlış girdiniz")
        setSignBilgi({kullanıcıAdı: '', sifre: ''})
      }
  }
  else {
    alert("Kullanıcı adını yanlış girdiniz")
    setSignBilgi({kullanıcıAdı: '', sifre: ''})
  }
}





  return (
    <div className="login">
      {
        !kayıtOldumu &&
          <form className="loginForm">
            <label>Kullanıcı Adı</label>
            <input value={loginBilgi.kullanıcıAdı} onChange={(e) => setLoginBilgi({kullanıcıAdı: e.target.value, sifre: loginBilgi.sifre}) } placeholder='Lütfen kullanıcı adı giriniz'/>
            <label>Şifre</label>
            <input value={loginBilgi.sifre} onChange={(e) => setLoginBilgi({kullanıcıAdı: loginBilgi.kullanıcıAdı, sifre: e.target.value}) }  placeholder='Lütfen şifre adı giriniz' type="password"/>
            <button onClick={(e) => ClickLogin(e)}>Kayıt Ol</button>
        </form>
      }

      {
        kayıtOldumu &&
        <form className="loginForm">
          <label>Kullanıcı Adı</label>
            <input value={signBilgi.kullanıcıAdı} onChange={(e) => setSignBilgi({kullanıcıAdı: e.target.value, sifre: signBilgi.sifre}) } placeholder='Kullanıcı adınızı giriniz'/>
            <label>Şifre</label>
            <input value={signBilgi.sifre} onChange={(e) => setSignBilgi({kullanıcıAdı: signBilgi.kullanıcıAdı, sifre: e.target.value}) }  placeholder='Şifrenizi giriniz' type="password"/>
            <button onClick={(e) => ClickSign(e)}>Giriş Yap</button>
        </form>
      }
        
    </div>
  )
}

