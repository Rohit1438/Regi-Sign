import React, { useContext, useState } from "react";

import styled from "styled-components";

import { useNavigate, Link, useLocation } from "react-router-dom";
import axios from "axios";
import { CircularProgress, useToast } from "@chakra-ui/react";
import { AuthContext } from "../Context/AuthContextProvider";
const BASE_URL="http://localhost:8080/api/v1"
const SignUp = () => {
  // const location = useLocation();

  const navigate = useNavigate();
  const [loader,setLoader]=useState(false)
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const url = "http://localhost:8080/api/v1";
  const toast = useToast();


  const handelSignin = async () => {

    try {
      console.log({
        email: email,
        password: password,
        phone:Number(phone)
      });
      
      setLoader(true)

      let res = await axios.post(`${BASE_URL}/user/signup`, {
        email: email,
        password: password,
        name: username,
        phone:Number(phone)
      });
      res = res.data;
      console.log(res,"signup");
      setLoader(false)
      if (res.message == "User created") {
        toast({
          title: "User created",
          description: "Registration succesfull🤩",
          status: "success",
          position: "top",
          duration: 2000,
          isClosable: true,
        });

        navigate("/login");
      } else {
        setLoader(false)
        console.log("coming in error");
        toast({
          title: "Something went wrong 😔",
          description: `${res.message}`,
          status: "error",
          position: "top",
          duration: 2000,
          isClosable: true,
        });
      }
    } catch (err) {
      console.log(err,"inerorr");
      setLoader(false)

      if(err.response.data=="User already registered"){
        toast({
          title: "Something went wrong 😔",
          description: `${err.response.data} try with another email`,
          status: "error",
          position: "top",
          duration: 2000,
          isClosable: true,
        });
      }else{
        toast({
          title: "Something went wrong 😔",
          description: `please check the details and try again`,
          status: "error",
          position: "top",
          duration: 2000,
          isClosable: true,
        });





      }




    }
  };
  return (
    <Div>
      <DIV>
        <h1>Sign In</h1>
        <h2>🤩Welcome to Reg-Sign 🤩</h2>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
                <input
          type="number"
          placeholder="Phone"
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handelSignin}>Sign up now</button>

        <br />
        <p className="p2" style={{fontSize:"15px"}}>
          Already have an account?{" "}
          <Link className="Link" to={"/login"}>
            Login  
          </Link>
          {loader? <CircularProgress isIndeterminate color="green.300" />:""}
        </p>
      </DIV>
    </Div>
  );
};

const Div = styled.div`
   height: 100vh;
  background-color: #7E22CE;
  display: flex;
  align-items: center;
`;
const DIV = styled.div`
  width: 400px;
  padding: 20px 0px 40px;
  border: 2px solid white;
  margin:  auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid gray;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.332) 1.95px 1.95px 2.6px;
  background-color: rgb(255, 255, 255);
  border-radius: 5px;
  max-height: 70%;
  h1 {
    font-size: 2rem;
    font-weight: 800;
    text-align: left;
  }
  .Link {
    color: #6b21ff;
    font-weight: 800;
    font-size: 15px;
  }
  h2 {
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 0px;
  }
  input {
    width: 80%;
    height: 30px;
    font-size: 16px;
    padding: 5px;
    border-radius: 5px;
    font-weight: 200;
    box-shadow: rgba(0, 0, 0, 0.10) 1.95px 1.95px 2.6px;
    border: none;
    outline: none;
  }

  button {
    width: 180px;

    background-color: #6b21ff;
    color: white;
    font-weight: 800;
    font-size: 1.2rem;
    padding: 10px 20px;
    border-radius: 5px;
  }
  button:hover {
    width: 180px;
    color: white;

    background-color: #6b21ffa1;
    font-weight: 800;
    border: 2px solid #6b21ffb7;
    font-size: 1.2rem;
    padding: 10px 20px;
    border-radius: 5px;
  }

  @media (max-width: 600px) {
    width: 80%;
  }
`;

export default SignUp;
