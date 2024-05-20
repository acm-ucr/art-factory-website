import "./index.css";

const Header = ({ label }) => {
  return (
    <div className="pt-2 h-12 font-medium font-nunito md:text-3xl text-art-purple-200 ">
      {label}
    </div>
  );
};

export default Header;
