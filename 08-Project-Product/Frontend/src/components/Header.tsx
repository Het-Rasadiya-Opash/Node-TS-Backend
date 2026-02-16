import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex space-x-4 p-4  text-white">
      <Link
        to="/login"
        className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 transition duration-150 ease-in-out"
      >
        Login
      </Link>
      <Link
        to="/register"
        className="px-4 py-2 rounded bg-green-600 hover:bg-green-700 transition duration-150 ease-in-out"
      >
        Register
      </Link>
    </div>
  );
};

export default Header;
