import React from 'react';
import { useLocation, Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 py-3">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-orange-600 text-white px-4 py-2 rounded font-medium">
                Logo
              </div>
              <div className="h-3 w-px bg-gray-300"></div>
              <nav className="flex gap-2">
                <Link
                  to="/job-preview"
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all ${
                    isActive('/job-preview')
                      ? 'bg-orange-600 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <span>📋</span>
                  Jobs
                </Link>
                <Link
                  to="/messages"
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all ${
                    isActive('/messages')
                      ? 'bg-orange-600 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <span>✉️</span>
                  Messages
                </Link>
                <button className="flex items-center gap-2 px-4 py-2 rounded-full text-sm text-gray-600 hover:bg-gray-100 transition-all">
                  <span>💰</span>
                  Payments
                </button>
              </nav>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-lg cursor-pointer">🔔</span>
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-medium cursor-pointer">
                A
              </div>
              <span className="text-gray-600 cursor-pointer text-xs">▼</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-5 py-6">
        {/* Job Tabs */}
        <div className="flex gap-8 mb-6 border-b border-gray-200">
          <Link
            to="/job-preview"
            className={`pb-3 text-base relative transition-colors ${
              isActive('/job-preview')
                ? 'text-orange-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Job preview
            {isActive('/job-preview') && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-600"></div>
            )}
          </Link>
          <Link
            to="/applicants"
            className={`pb-3 text-base relative transition-colors ${
              isActive('/applicants')
                ? 'text-orange-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Applicants
            {isActive('/applicants') && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-600"></div>
            )}
          </Link>
          <Link
            to="/match"
            className={`pb-3 text-base relative transition-colors ${
              isActive('/match')
                ? 'text-orange-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Match
            {isActive('/match') && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-600"></div>
            )}
          </Link>
          <Link
            to="/messages"
            className={`pb-3 text-base relative transition-colors ${
              isActive('/messages')
                ? 'text-orange-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Messages
            {isActive('/messages') && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-600"></div>
            )}
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3 mb-4">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-sm text-red-600 hover:bg-red-50 transition-colors">
            🗑️ Delete job
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-md text-sm hover:bg-orange-700 transition-colors">
            ✏️ Edit job
          </button>
        </div>

        {/* Page Content */}
        {children}
      </main>
    </div>
  );
};

export default Layout;