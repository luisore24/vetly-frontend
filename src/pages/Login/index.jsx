import { use, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../../store/useAppStore";
import LoginForm from "../../components/Login/LoginForm";


const Login = () => {
    const navigate = useNavigate()

    const { login, user } = useAppStore()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        await login(username, password)
    }

    useEffect(() => {
        if (user) {
            navigate("/")
        }
    }, [user])


    return (

        <LoginForm handleSubmit={handleSubmit} username={username} setUsername={setUsername} password={password} setPassword={setPassword} />

    )

}

export default Login