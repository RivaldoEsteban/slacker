/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";
import Cookies from "universal-cookie";
import { useRouter } from "next/router";

const cookies = new Cookies();
const LoginStyled = styled.div`
  position: relative;
  block-size: 100vh;
  inline-size: 100vw;
  .form-container {
    padding: 5px;
    position: absolute;
    top: calc(50% - (535px / 2));
    left: calc(50% - (500px / 2));
    inline-size: 500px;
    background: linear-gradient(to right, #333399, #c121d6);
    border-radius: 0.5rem;
  }
  .form {
    background: #0d0136;
    padding: 2rem;
    overflow: hidden;

    > * {
      display: block;
      margin: 0.5rem 0;
    }

    .logo {
      margin: auto;
      height: 100px;
      width: 100px;
      object-fit: cover;
    }
    label {
      font: var(--headline3);
      margin: 1rem 0;
    }
    input {
      padding: 0.75rem 1rem;
      border-radius: 0.5rem;
      border: none;
      width: 100%;
    }
    .file {
      width: 100%;
      border-radius: 0.5rem;
      background: white;
      color: var(--black);
    }
    button {
      width: 100%;
      border-radius: 0.5rem;
      border: none;
      margin-top: 2.5rem;
      background: #7d70f3;
      color: var(--white);
      padding: 0.75rem 1rem;
    }
  }
`;

function Login() {
  const router = useRouter();
  console.log(router);
  async function handleForm(event) {
    event.preventDefault();
    localStorage.clear();
    const formData = new FormData(event.currentTarget);
    const file = formData.get("image");
    const userName = formData.get("userName");
    const image = URL.createObjectURL(file);
    localStorage.setItem("userImage", image);
    localStorage.setItem("userName", userName);
    cookies.set("isLogged", "true");
    router.replace("/");
  }
  function handleFile() {}

  return (
    <LoginStyled className="animate__animated animate__bounceInDown">
      <div className="form-container">
        <form className="form" onSubmit={handleForm}>
          <img className="logo" src="./icons/logo.svg" alt="logo" />
          <label>Ingresa tu nombre</label>
          <input type="text" name="userName" placeholder="rivaldo" required />
          <label htmlFor="">Ingresa tu correo</label>
          <input
            type="email"
            name="email"
            placeholder="tuemail@gmail.com"
            required
          />
          <label>Selecciona tu avatar</label>
          <div className="file">
            <input type="file" name="image" id="file" onChange={handleFile} />
          </div>
          <button>Login</button>
        </form>
      </div>
      <div></div>
    </LoginStyled>
  );
}

export default Login;
