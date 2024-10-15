import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.scss";
import Logo from "./Logo";

export default function Home() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (password && identifier) {
      navigate("/archives");
    }
  };

  return (
    <div className="home">
      <Logo white width={400} />
      <div className="login-form">
        <input
          type="number"
          placeholder="Identifiant"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Connexion</button>
      </div>
    </div>
  );
}
