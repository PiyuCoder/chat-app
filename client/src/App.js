import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AuthProvider from "./components/context/AccountAuth";

const clientId =
  "1032333181665-ci7ebs0097cenmsfcs9vmrsnfp80fehu.apps.googleusercontent.com";
function App() {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AuthProvider>
        <Login />
      </AuthProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
