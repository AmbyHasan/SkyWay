import React, { useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useTheme } from '../contexts/ThemeContext';
import { Plane, LayoutDashboard, Ticket, User, LogOut, Sun, Moon, Menu, X, ArrowLeft } from 'lucide-react';

export const DashboardLayout = () => {
  const { user, logout } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const menuItems = [
    { label: 'Overview', path: '/dashboard', icon: LayoutDashboard },
    { label: 'My Bookings', path: '/dashboard/bookings', icon: Ticket },
    { label: 'Profile Settings', path: '/dashboard/profile', icon: User },
  ];

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300">
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-white dark:bg-slate-900 border-r border-slate-100 dark:border-slate-800">
        <div className="p-6 border-b border-slate-100 dark:border-slate-800">
          <Link to="/" className="flex items-center gap-2">
            <div className="p-2 bg-primary-600 rounded-lg text-white">
              <Plane className="h-6 w-6 animate-float" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-cyan-500 bg-clip-text text-transparent">
              SKYWAY
            </span>
          </Link>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  active
                    ? 'bg-primary-50 text-primary-600 dark:bg-primary-950/30 dark:text-primary-400'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                <Icon className="h-5 w-5" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
          <button
            onClick={toggleTheme}
            className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"
          >
            <span className="flex items-center gap-3">
              {isDark ? <Sun className="h-5 w-5 text-amber-500" /> : <Moon className="h-5 w-5" />}
              Theme
            </span>
            <span className="text-xs text-slate-400">{isDark ? 'Dark' : 'Light'}</span>
          </button>

          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20"
          >
            <LogOut className="h-5 w-5" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Wrapper */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between px-6 z-10">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden p-2 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg"
            >
              <Menu className="h-6 w-6" />
            </button>
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </button>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-semibold">{user?.firstName} {user?.lastName}</p>
              <p className="text-xs text-slate-400 capitalize">{user?.role} Account</p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-primary-100 dark:bg-primary-950 flex items-center justify-center text-primary-700 dark:text-primary-300 font-bold border border-primary-200/50 dark:border-primary-800/30">
              {user?.firstName?.[0]}
            </div>
          </div>
        </header>

        {/* Content Body */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          <div className="max-w-5xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>

      {/* Mobile Drawer Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
          <aside className="absolute inset-y-0 left-0 w-64 bg-white dark:bg-slate-900 flex flex-col z-10 animate-slide-in">
            <div className="p-6 flex items-center justify-between border-b border-slate-100 dark:border-slate-800">
              <Link to="/" className="flex items-center gap-2">
                <Plane className="h-6 w-6 text-primary-600" />
                <span className="text-xl font-bold text-slate-800 dark:text-white">SKYWAY</span>
              </Link>
              <button onClick={() => setSidebarOpen(false)}>
                <X className="h-6 w-6 text-slate-400" />
              </button>
            </div>

            <nav className="flex-1 px-4 py-6 space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium ${
                      isActive(item.path)
                        ? 'bg-primary-50 text-primary-600 dark:bg-primary-950/30 dark:text-primary-400'
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="p-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
              <button
                onClick={toggleTheme}
                className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                <span className="flex items-center gap-3">
                  {isDark ? <Sun className="h-5 w-5 text-amber-500" /> : <Moon className="h-5 w-5" />}
                  Theme
                </span>
              </button>
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50"
              >
                <LogOut className="h-5 w-5" />
                Logout
              </button>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
};
