import LogoWhite from "../assets/logo_w.svg";
import LogoBlack from "../assets/logo_b.svg";
import { useNavigate } from "react-router-dom";

export default function Logo({ white, width, click }) {
  const navigate = useNavigate();
  return (
    <img
      onClick={() => {
        if (click) navigate("./archives");
      }}
      style={{ maxWidth: width ? width : 250 }}
      src={white ? LogoWhite : LogoBlack}
      alt="Le logo de notre fondation."
    />
  );
}
