import { logoutUser } from "../services/userAPIService";
import { useUser } from "../context/UserContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { user, setUser } = useUser();


  const handleLogout = async () => {
    try {
      await logoutUser();
      setUser(null);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <div className="flex justify-between items-center p-4">
      {user ? (
        <>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold text-lg">
              {user.name?.charAt(0).toUpperCase()}
            </div>
            <span className="text-gray-700">{user.name}</span>
          </div>
          
          <div className="flex items-center space-x-3">
            {user.role === 'Admin' && (
              <Link
                to="/create"
                className="px-4 py-2 rounded bg-green-600 hover:bg-green-700 text-white transition duration-150 ease-in-out"
              >
                Create
              </Link>
            )}
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded bg-red-600 hover:bg-red-700 text-white transition duration-150 ease-in-out"
            >
              Logout
            </button>
          </div>
        </>
      ) : (
        <div className="flex space-x-4 text-white">
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
      )}
    </div>
  );
};

export default Header;
