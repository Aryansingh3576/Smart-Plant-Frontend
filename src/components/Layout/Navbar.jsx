import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Leaf, LogOut, User } from "lucide-react";

export default function Navbar() {
  const { logout, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="w-full bg-gradient-to-r from-green-50 to-emerald-50 border-b-2 border-green-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Welcome Section */}
          <div className="flex items-center space-x-3">
            <div className="bg-green-600 p-2 rounded-lg shadow-md">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold text-green-800">Plant Monitor</h1>
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4 text-green-600" />
                <span className="text-sm text-green-700 font-medium">
                  Welcome, <span className="text-green-900">{user}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            <LogOut className="w-4 h-4" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>
    </nav>
  );
}