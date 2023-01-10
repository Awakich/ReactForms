import Logo from "../assets/Logo.svg";
import Button from "../components/Button";
import { toast } from "react-toastify";

const InfoNotifications = () => {
   toast.info("Registration", {
     position: "top-right",
     autoClose: 1000,
     hideProgressBar: true,
     closeOnClick: true,
     pauseOnHover: true,
     draggable: false,
     progress: undefined,
     theme: "colored",
   });
  };

const Nav = () => {
  return (
    <nav className="flex items-center justify-between mb-24">
      <div className="flex items-center gap-20">
        <img src={Logo} alt="" />
      </div>

      <Button InfoFunction={InfoNotifications}>Get Started</Button>
    </nav>
  );
};

export default Nav;
