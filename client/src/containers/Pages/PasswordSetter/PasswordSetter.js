import { useRef, useState } from "react";
import MyButton from "../../../components/MyButton/MyButton";
import TemporaryPasswordService from "../../../service/TemporaryPasswordService";
import { Link, useNavigate } from "react-router-dom";


const PasswordSetter = () => {

    let emailRef = useRef();
    let pwRef = useRef();
    let navigate = useNavigate();

    const [showWarning, setShowWarning] = useState("");

    const handleOnPasswordSet = async (e) => {
        e.preventDefault();

        if (emailRef.current.value.length <= 0 || pwRef.current.value.length <= 0) {
            setShowWarning("fill form");
            return;
        }

        let user = {
            email: emailRef.current.value,
            pw: pwRef.current.value
        };

        let {update} = await TemporaryPasswordService.setPassword(user);

        if (update && !update) {
            setShowWarning("failed to set password");
            return;
        }

        navigate("/login")
     
    }

    return <>
        <div className="passwordsetter__main">
            <form onSubmit={handleOnPasswordSet}>
                <h1>Reset Password</h1>
                {showWarning.length > 0 && <div className="warningbox">{showWarning}</div>}
                <div className="wrapper">
                    <label htmlFor="email"> Email</label>
                    <input type="text" id="email" ref={emailRef} />
                </div>
                <div className="wrapper">
                    <label htmlFor="password"> Password</label>
                    <input type="password" id="password" ref={pwRef} />
                </div>
                <Link to={"/login"}>login into your Account</Link>
                <MyButton customClass={"primary"} valueFor={"reset"} />
            </form>
        </div>
    </>
}

export default PasswordSetter;