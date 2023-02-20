import React, { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthProvider";

import axios from "../../api/axios";
const LOGIN_URL = "/auth";

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
            headers: {'Content-Type':'application/json'},
            withCredentials: true
        }
      );
      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({user,pwd,roles,accessToken});
      setUser("");
      setPwd("");
      setSuccess(true);
    } catch (err) {
        if(!err?.response){
            setErrMsg('No Server Response');
        }else if (err.response?.status === 400){
            setErrMsg('Missiong Username or password');
        }else if (err.response?.status===401){
            setErrMsg('Unauthorized');
        }else{
            setErrMsg('Login Failed');
        }
        errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>Benvenuto/a!</h1>
          <br />
          <p>
            <a href="#">Vai alla Home</a>
          </p>
        </section>
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Estiatech</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Nome utente:</label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <button>Accedi</button>
          </form>
          <p>
            Hai dimenticato la password?
            <br />
            <span className="line">
              {/*inserire link router qui*/}
              <a href="#">Recupera qui</a>
            </span>
          </p>
        </section>
      )}
    </>
  );
};

{
  /*
function LoginAll({Login, error}) {
    const [details, setDetails] = useState({name:"", email:"",password:""});

    const submitHandler = e =>{
        e.preventDefault();

        Login(details);
    }

  return (
    <form onSubmit={submitHandler}>
        <div className='form-inner'>
            <h2>Login</h2>
            {(error!= "") ? (<div className='error'>{error}</div>): ""}
            <div className='form-group'>
                <label htmlFor="nome">Nome:</label>
                <input type="text" name="nome" id="nome" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
            </div>
            <div className='form-group'>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
            </div>
            <div className='form-group'>
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
            </div>
            <input type="submit" value ="LOGIN"></input>
        </div>
    </form>
  )
}
*/
}
export default Login;
