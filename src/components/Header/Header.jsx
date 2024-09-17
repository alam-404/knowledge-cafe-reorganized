import "./Header.css";

import profile from "../../assets/images/profile.png";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar-info">
        <div>
          <h1 className="site-name">KnowledgeCafe</h1>
        </div>
        <div className="nav-links">
          <a href="/home">Home</a>
          <a href="/blog">Blog</a>
          <a href="/about">About</a>
        </div>
      </div>
      <div>
        <a href="/profile" className="profile-image">
          <img src={profile} />
        </a>
      </div>
    </nav>
  );
};

export default Header;
