import LogoutButton from "./GuestGreeting";
import LoginButton from "./UserGreeting";
import { useState } from "react";

const Greeting = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (loginState) => {
    setIsLoggedIn(loginState);
  };

  return (
    <>
      <h1 className="h1">{isLoggedIn ? "Welcome back" : "Please sign up."}</h1>
      {isLoggedIn ? (
        <LogoutButton handleLogin={() => handleLogin(false)} />
      ) : (
        <LoginButton handleLogin={() => handleLogin(true)} />
      )}
    </>
  );
};

export default Greeting;
