    import React, { useState,useEffect} from 'react';


    function SignUp() { 
        const [user, setUser] = useState({
        username: "",
        password: ""
        });

        const [errorMessageuser, setErrorMessageuser] = useState('');
        const [errorMessagepassword, setErrorMessagepassword] = useState('')
        const [usersList, setUsersList] = useState([]);
        
        const reSpaces = /^\S*$/;
        const re6 = /^\S{6,}$/;
        const rePassword = /(?=.*[A-Z])/;
        
        // Load users from localStorage on component mount
        useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        setUsersList(storedUsers);
        }, []);
    
        // Function to handle sign up
        const handleSignUp = () => {
        // Validate username and password
        if (!reSpaces.test(user.username)) {
            setErrorMessageuser('Tên người dùng không được chứa khoảng trắng.');
            setTimeout(() => {
                setErrorMessageuser('');
            },2500);
            return;
        }
        if (!re6.test(user.username)) {
            setErrorMessageuser('Tên người dùng phải có ít nhất 6 ký tự.');
            setTimeout(() => {
                setErrorMessageuser('');
            },2500);
            return;
        }
        if (!rePassword.test(user.password)) {
            setErrorMessagepassword('Mật khẩu phải chứa ít nhất 8 ký tự.(gồm chữ cái,số)');
            setTimeout(() => {
                setErrorMessagepassword('');
            },2500);
            return;
            
        }
        const isUserExists = usersList.some(u => u.username === user.username);
        if (isUserExists) {
            setErrorMessageuser('true');
            setTimeout(() => {
                setErrorMessageuser('');
            },2500);
            return;
        }
        const updatedUsers = [...usersList, { username: user.username, password: user.password }];
        localStorage.setItem('users', JSON.stringify(updatedUsers));
    
        setUsersList(updatedUsers);
    
        setUser({
            username: "",
            password: ""
        });
        alert("tạo tài khoản thành công")
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
                // value={username}
                // onChange={(e) => setUsername(e.target.value)}
                value={user.username}
                onChange={(e) => setUser({...user,username:e.target.value})}
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
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
                value={user.password}
                onChange={(e) => setUser({...user,password:e.target.value})}
            />
                <div>
                {errorMessagepassword && (
                <span className="valid_form text-red-500 am ">{errorMessagepassword}</span>
            )}
                </div>
            
            </div>

            <div className="mb-9">
            <button className="w-72 h-height_input_form border-2 text-white rounded-sm" onClick={handleSignUp}>
                Sign Up
            </button>
            </div>
        </div>
        </div>
    );
    }

    export default SignUp;
