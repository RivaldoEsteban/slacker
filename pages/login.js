/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Cookies from "universal-cookie";
import { useRouter } from "next/router";
import User from "../components/user/user";

const cookies = new Cookies();
const LoginStyled = styled.div`
  position: relative;
  block-size: 100vh;
  inline-size: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  .form-container {
    padding: 5px;
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

  .variants {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .active {
    border: 5px solid white;
  }

  .avatar-preview {
    margin-top: 1rem;
  }
  .color-select {
    height: 3.5rem;
    width: 3.5rem;
    border-radius: 50%;
    cursor: pointer;
  }
  @media (max-width: 500px) {
    .form-container {
      width: 100vw;
      height: 100vh;
    }
  }
`;
const background = [
  {
    color: " linear-gradient(to bottom, #4ac29a, #bdfff3)",
  },
  {
    color: " linear-gradient(to bottom, #eecda3, #ef629f)",
  },
  {
    color: "pink",
  },
  {
    color: "violet",
  },
  {
    color: "linear-gradient(to bottom, #9cecfb, #65c7f7, #0052d4)",
  },
  {
    color: "linear-gradient(to top, #8be98f, #73767c)",
  },
  {
    color: "linear-gradient(to bottom, #898297, #c17df8)",
  },
  {
    color: "#7c437e",
  },
  {
    color: "linear-gradient(to bottom, #c6ffdd, #fbd786, #f7797d)",
  },
  {
    color: "linear-gradient(to bottom,#aa4b6b,#6b6b83,#3b8d99)",
  },
  {
    color: "linear-gradient(to bottom, #1e9600, #fff200, #ff0000)",
  },
  {
    color: " linear-gradient(to bottom, #007991, #78ffd6)",
  },
];

function Login() {
  const router = useRouter();
  const username = useRef(null);
  const [currentBackgroundColor, setCurrentBackgroundColor] = useState(
    "linear-gradient(to bottom, #eecda3, #ef629f"
  );
  const [currentName, setCurrentName] = useState("rivaldo");

  function handleChangeName() {
    setCurrentName(username.current.value);
  }
  async function handleForm(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const userName = formData.get("userName");
    localStorage.setItem("userName", userName);
    localStorage.setItem("background", currentBackgroundColor);
    cookies.set("isLogged", "true");
    router.replace("/");
  }
  function handleSelectedBackground(color) {
    setCurrentBackgroundColor(color);
    return color;
  }
  console.log(currentName);
  return (
    <LoginStyled className="animate__animated animate__bounceInDown">
      <div className="form-container">
        <form className="form" onSubmit={handleForm}>
          <img className="logo" src="./icons/logo.svg" alt="logo" />
          <label>Ingresa tu nombre</label>
          <input
            type="text"
            name="userName"
            placeholder="rivaldo"
            required
            ref={username}
            onChange={handleChangeName}
          />
          <label>Selecciona el color de tu avatar</label>
          <div className="variants">
            {background.map((color) => {
              return (
                <div
                  key={color.color}
                  className={
                    currentBackgroundColor === color.color
                      ? "color-select active"
                      : "color-select"
                  }
                  style={{ background: color.color }}
                  onClick={() => {
                    handleSelectedBackground(color.color);
                  }}
                ></div>
              );
            })}
          </div>
          <div className="avatar-preview">
            <label htmlFor="">Avatar preview</label>
            <User
              currentName={currentName}
              backgroundColor={currentBackgroundColor}
            />
          </div>
          <button>Login</button>
        </form>
      </div>
    </LoginStyled>
  );
}

export default Login;
