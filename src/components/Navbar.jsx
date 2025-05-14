import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  
  // Helper function to check active route
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-gradient-to-r from-blue-700 to-blue-600 text-white px-6 py-3 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <Link 
          to="/" 
          className="text-2xl font-bold flex items-center gap-2 mb-3 md:mb-0"
        >
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          NIELIT Assistant
        </Link>
        
        <div className="flex space-x-1 bg-blue-800/30 p-1 rounded-xl">
          {[
            { path: "/", name: "Home" },
            { path: "/about", name: "About" },
            { path: "/contact", name: "Contact" },
            { path: "/chat", name: "Chat" }
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                isActive(item.path)
                  ? "bg-white text-blue-700 shadow-sm"
                  : "text-white/90 hover:text-white hover:bg-blue-800/20"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
