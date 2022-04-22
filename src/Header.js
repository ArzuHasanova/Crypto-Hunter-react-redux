import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="App-header">
      <div className="header">
        <div className="logo">
          <Link to="/">Crypto Hunter</Link>
        </div>
        <nav>
          <Link to="/">Home</Link> | <Link to="/crypto">Crypto Currencies</Link>{" "}
          | <Link to="/trend">Trend</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
