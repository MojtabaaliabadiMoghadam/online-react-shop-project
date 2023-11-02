import "./login.css";
import Logo from "./image/login.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuthDispatch, useAuthState } from "../../Context/auth-context";
import { actionTypes } from "../../Context/reducer";
import { useLayoutEffect } from "react";



const fetchCurrentUser = (token) => {
  return axios
    .get("http://localhost:3001/users/me", {
      headers: {
        authorization: token,
      },
    })
    .then((response) => response.data);
};

const fetchData = async (username, password) => {
  return axios
    .post("http://localhost:3001/login", {
      username,
      password,
    })
    .then((response) => response.data);
};
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);


  const dispatch = useAuthDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(username, password).then(({ data, success }) => {
      if (success) {
        setToken(data);
      }
    });
  };
  useEffect(() => {
    if (token) {
      fetchCurrentUser(token).then(({ success, data }) => {
        if(success){
          localStorage.setItem('token' , token)
          dispatch({
            type:actionTypes.LOGIN_SUCCESS,
            payload :{
              user : data , 
              token
            }
          })
        }
      });
    }
  }, [token , dispatch]);
  useLayoutEffect(()=>{
    const token = localStorage.getItem('token')
    if(token){
      setToken(token) 
    }
  })
  return (
    <>
      <main>
        <div className="login-container">
          <div className="row">
            <div className="col-lg-8">
              <div className="login-box">
                <form action="">
                  <div className="input-group">
                    <label htmlFor="">نام کاربری:</label>
                    <input
                      value={username}
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                      type="text"
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="">رمز عبور :</label>
                    <input
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      type="text"
                    />
                  </div>
                  <p className="question">
                    حساب کاربری ندارید
                    <a href="">ایجاد حساب کاربری</a>
                    کمتر از یک دقیقه زمان شمارا خواهد گرفت
                  </p>
                  <div className="login-submit-countainer">
                    <input onClick={handleSubmit} value="ورود" type="submit" />
                  </div>
                </form>
                <div className="social-login">
                  <a href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="">
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                  <a href="">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="login-image">
                <img src={Logo} alt="" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
