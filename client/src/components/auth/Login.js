import React from "react";
import { useAuth0 } from "@auth0/auth0-react"; // react hook for using auth0

export default function Login() {
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      <h2>Welcome to Can Of Books</h2>
      <h1>Please Login, As an Account is needed to view books</h1>
      <button onClick={() => loginWithRedirect()}>Login</button>
    </div>
  );
}
