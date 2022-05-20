import { Container } from "../assets/global_styles/Conponents.style";
import styled from "styled-components";
import { Button, TextField } from "@mui/material";
import api from "../services/api";
import { useState } from "react";

const ContainerLogin = styled(Container)`
    margin-inline: auto;
    width: 100%;
    flex-direction: column;
    gap: 15px;

    h1 {
        font-size: 52px;
        font-weight: bold;
        margin-bottom: 25px;
        color: #7d2ffa;
    }

    .btn {
        width: 100%;
        background: #8f4aff;
        &:hover {
            background: #7d2ffa;
        }
    }

    form {
        width: 80%;
        display: flex;
        flex-direction: column;

        gap: 15px;
    }

    .input {
        width: 100%;
    }
`;

const Login = () => {
    const [signIn, setSignIn] = useState({ email: "", password: "" });
    const login = () => {
        const promise = api.post("/sign-in", signIn);
        promise.then((response) => {
            console.log(response);
        });
    };

    const handleChange = (event) => {
        const target = event.target;
        signIn[target.name] = target.value;
        console.log(signIn);
        setSignIn(signIn);
    };

    return (
        <ContainerLogin>
            <h1>Escola.Online</h1>

            <form>
                <TextField
                    label="Email"
                    variant="filled"
                    className="input"
                    color="secondary"
                    type="email"
                    onChange={handleChange}
                    name="email"
                    required
                />
                <TextField
                    label="Password"
                    variant="filled"
                    className="input"
                    color="secondary"
                    type="password"
                    onChange={handleChange}
                    name="password"
                    required
                />
                <Button
                    className="btn"
                    variant="contained"
                    size="large"
                    type="submit"
                >
                    Login
                </Button>
            </form>
        </ContainerLogin>
    );
};

export default Login;
