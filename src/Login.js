// import test from 'node:test';
import React, { useState} from 'react';
// import { json } from 'stream/consumers';
// import { fileURLToPath } from 'url';

const reSpaces = /^\S*$/;

// const usernamelogin = [{username:'admin',password:'1'}]
// localStorage.setItem("user",JSON.stringify(usernamelogin))

//  
const userLocal = JSON.parse(localStorage.getItem("user")) || [];

function Login  () { 
    const [errorMessageuser, setErrorMessageuser] = useState('');
    const [errorMessagepassword, setErrorMessagepassword] = useState('');
    const [userlogin, setUserlogin] = useState({
        usernamelogin: "",
        passwordlogin: ""
    });
    if (!reSpaces.test(userlogin.usernamelogin)) {
        setErrorMessageuser('Tên người dùng không được chứa khoảng trắng.');
        setTimeout(() => {
            setErrorMessageuser('');
        },2500);
        return;
    }
   
   
    const handleLogin = () => {
        let isLoggedIn = false;
        console.log(userlogin.usernamelogin)
        userLocal.forEach(item => {
            const username = item.username;
            const password = item.password;

            if (username === userlogin.usernamelogin && password === userlogin.passwordlogin) {
                isLoggedIn = true;
            }
            if (username !== userlogin.usernamelogin) {
                setErrorMessageuser("Tài khoản sai chưa có trên hệ thống")
                setTimeout(() => {
                    setErrorMessageuser('');
                },2500);
                return;
            }
        });

        if (isLoggedIn) {
            alert("Đăng nhập thành công!");
            window.location.href= "/home"
        } else {
            setErrorMessagepassword('Mật khẩu sai')
            setTimeout(() => {
                setErrorMessagepassword('');
            },2500);
            return;
        }
        setUserlogin({
            usernamelogin:"",
            passwordlogin:""
        })  
    };   
  return (
    <div className="bg-blue_login w-100vh h-height_screen font-input_san text-xs">
      <div className="flex flex-col items-center p-36">
        <div className="mb-9">
          <box-icon name="cart-add" size="120px" />
        </div>

        <div className="mb-9">
          <div className="absolute mt-3 ml-2">
            <box-icon name="user" type="solid" animation="etc" />
          </div>

          <input
            type="text"
            className="w-72 h-height_input_form pl-9 border-2 border-white bg-blue_login text-white outline-none rounded-sm"
            placeholder="USERNAME"
           
            value={userlogin.userlogin}
            onChange={(e) => setUserlogin({...userlogin,usernamelogin:e.target.value})}
          />
          <div>
             {errorMessageuser && (
            <span className="valid_form text-red-500 pt-3  ">{errorMessageuser}</span>
          )}
          </div>
         
        </div>

        <div className="mb-12">
          <div className="absolute mt-3 ml-2">
            <box-icon name="lock-alt" />
          </div>

          <input
            type="password"
            className="w-72 h-height_input_form pl-9 border-2 border-white bg-blue_login text-white outline-none rounded-sm"
            placeholder="PASSWORD"
            
            value={userlogin.passwordlogin}
            onChange={(e)=> setUserlogin({...userlogin,passwordlogin:e.target.value})}
          />
            <div>
            {errorMessagepassword && (
            <span className="valid_form text-red-500  ">{errorMessagepassword}</span>
          )}
            </div>
           
        </div>
    
        <div className="mb-9">
          <button className="w-72 h-height_input_form border-2 text-white rounded-sm"     onClick={handleLogin}>
           Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
