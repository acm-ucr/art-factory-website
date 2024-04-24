import "./index.css";

const Header = ({ label }) => {
  return (
    <div className="pt-2 h-12 font-medium md:text-2xl bg-saf-red text-white ">
      {label}
    </div>
  );
};

export default Header;
