import './Header.css'

import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <nav className='navbar'>
            <div>
                <h1>KnowledgeCafe</h1>
            </div>
            <div className='nav-links'>
                <a href="/home">Home</a>
                <a href="/blog">Blog</a>
                <a href="/about">About</a>
                <a href='/profile'>
                    <img src={profile}/>
                </a>
            </div>
        </nav>
    );
};

export default Header;