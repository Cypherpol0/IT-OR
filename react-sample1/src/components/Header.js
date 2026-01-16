import logo from '../images/Logo.png';

const Header = () => {
  return (
    <header>
      <h1>Job Board</h1>
      <img src={logo} alt="Logo" />
    </header>
  );
};

export default Header;