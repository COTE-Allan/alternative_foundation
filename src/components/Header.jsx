import "../styles/header.scss";
import Logo from "./Logo";

export default function Header(params) {
  return (
    <header className="header">
      <Logo click />
      <div className="header-infos">
        <h1>Fondation Alternative</h1>
        <h2>ALT-OS v12.5.4 - Lang FR</h2>
      </div>
    </header>
  );
}
