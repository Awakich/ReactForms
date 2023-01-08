import Logo from "../assets/Logo.svg";
import Button from "../components/Button";

const Nav = () => {
  return (
    <nav className="flex items-center justify-between mb-24">
      <div className="flex items-center gap-20">
        <img src={Logo} alt="" />
      </div>

      <Button>Get Started</Button>
    </nav>
  );
};

export default Nav;
