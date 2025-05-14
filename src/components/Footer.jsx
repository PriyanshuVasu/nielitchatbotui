import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-700 to-blue-600 text-white py-6 shadow-lg mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left section */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              NIELIT Assistant
            </h3>
            <p className="text-sm text-white/80 mt-1">Your guide to NIELIT programs</p>
          </div>

          {/* Right section */}
          <div className="flex flex-col items-center md:items-end space-y-2">
            <div className="flex space-x-4">
              <a 
                href="https://nielit.gov.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-200 transition-colors text-sm font-medium"
              >
                Official Website
              </a>
              <Link to="/contact" className="hover:text-blue-200 transition-colors text-sm font-medium">
                Contact Team
              </Link>
            </div>
            <p className="text-xs text-white/60">
              © {new Date().getFullYear()} NIELIT Chatbot | Developed by Project Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}