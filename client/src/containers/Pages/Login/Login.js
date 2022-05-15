import { useRef, useState } from "react";
import MyButton from "../../../components/MyButton/MyButton";
import UserService from "../../../service/UserService";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from '../../../redux/reducers/AuthReducer';


const Login = () => {

    let emailRef = useRef();
    let pwRef = useRef();
    let navigate = useNavigate();

    const [showWarning, setShowWarning] = useState("");
    const dispatch = useDispatch();

    const handleOnLogin = async (e) => {
        e.preventDefault();

        if (emailRef.current.value.length <= 0 || pwRef.current.value.length <= 0) {
            setShowWarning("fill form");
            return;
        }

        let user = {
            email: emailRef.current.value,
            pw: pwRef.current.value
        };

        let { data } = await UserService.getUser(user);

        if (!data.login) {
            setShowWarning("Login failed");
            return;
        }

        dispatch(authActions.login(data))
        navigate("/dashboard")

        //Shared.setLogin(data.login);
        //Shared.setUser(data);
        /*
        let tempValue = response.data.login ? false : response.data;
        Shared.setLogin(tempValue)
        */
    }

    return <>
        <div className="login__main">
            <form onSubmit={handleOnLogin}>
                <h1>Login</h1>
                {showWarning.length > 0 && <div className="warningbox">{showWarning}</div>}
                <div className="wrapper">
                    <label htmlFor="email"> Email</label>
                    <input type="text" id="email" ref={emailRef} />
                </div>
                <div className="wrapper">
                    <label htmlFor="password"> Password</label>
                    <input type="password" id="password" ref={pwRef} />
                </div>
                <Link to={"/passwordsetter"}>forgot Password</Link>
                <MyButton customClass={"primary"} valueFor={"login"} />
            </form>
        </div>
    </>
}

export default Login;