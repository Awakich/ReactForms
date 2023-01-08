import InverLogo from "../assets/InverLogo.svg";

const Footer = () => {
  return (
    <div className="text-[#30519F] flex items-center justify-between px-12 my-12">
      <div className="gap-5">
        <img src={InverLogo} alt="" />
        <p className="font-bold text-xl">2022. All rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
