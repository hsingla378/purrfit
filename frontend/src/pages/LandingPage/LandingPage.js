import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Hero from "../../components/Hero/Hero";
import Features from "../../components/Features/Features";
import Team from "../../components/Team/Team";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Divider, useToast } from "@chakra-ui/react";
// import { redirect, useHistory } from "react-router-dom";

export default function LandingPage() {
  // https://purrfit-bot.vercel.app/?code=N1DskA8WmmQPiiYADStqI7hrqwqYFn
  const [isLoggedin, setIsLoggedin] = useState(false);
  const toast = useToast();
  // const history = useHistory();

  const login = (token) => {
    let data = {
      token: token,
    };

    toast({
      title: `Logging in...`,
      status: "info",
      isClosable: true,
    });

    axios
      .post("https://purrfit-back.onrender.com/api/v1/login", data)
      .then(function (response) {
        let accessToken = response.data.data.accessToken;
        let username = response.data.data.username;
        if (response.data.success) {
          persistLogin(accessToken, username);
          toast({
            title: `Login Successfull`,
            status: "success",
            isClosable: true,
          });
          setIsLoggedin(true);
        } else {
          toast({
            title: `There was an error. Please try login again`,
            status: "error",
            isClosable: true,
          });
        }
      })
      .catch(function (error) {
        toast({
          title: `There was an error. Please try login again`,
          status: "error",
          isClosable: true,
        });
      });
    // history.push("/");
  };

  const persistLogin = (accessToken, username) => {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("username", username);
  };

  useEffect(() => {
    const extractCodeParameter = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get("code");
      if (token) {
        login(token);
      }
    };

    extractCodeParameter();

    // handle if user is logged in
    localStorage.getItem("accessToken")
      ? setIsLoggedin(true)
      : setIsLoggedin(false);
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Divider maxW={"80%"} m={"auto"} />
      <Features />
      <Team />
      <Footer />
    </>
  );
}
