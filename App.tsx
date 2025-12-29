
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Heart, 
  UserCircle,
  LogOut,
  User,
  Menu,
  X,
  ShieldCheck,
  ShieldAlert
} from 'lucide-react';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import AboutPage from './pages/AboutPage';
import BecomeDonorPage from './pages/BecomeDonorPage';
import RequireDonorPage from './pages/RequireDonorPage';
import HostCampPage from './pages/HostCampPage';
import MyRequestsPage from './pages/MyRequestsPage';
import AdminDashboard from './pages/AdminDashboard';
import SuperAdminDashboard from './pages/SuperAdminDashboard';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/require-donor', label: 'Require help' },
    { path: '/host-camp', label: 'Host Drive' },
    { path: '/my-requests', label: 'My Requests' },
    { path: '/admin', label: 'Admin', icon: <ShieldCheck size={14} className="text-red-600" /> },
    { path: '/super-admin', label: 'SuperAdmin', icon: <ShieldAlert size={14} className="text-red-600" /> },
  ];

  return (
    <nav className="bg-black text-white sticky top-0 z-50 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-red-600 p-2 rounded-lg shadow-[0_0_20px_rgba(220,38,38,0.5)] group-hover:scale-110 transition-transform">
              <Heart className="text-white fill-white" size={24} />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-black tracking-tighter uppercase italic">SAVIOUR</span>
              <span className="text-[9px] font-bold text-red-500 uppercase tracking-[0.2em]">Redefining Heroism</span>
            </div>
          </Link>
          
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 text-[10px] font-black uppercase tracking-widest transition-all hover:text-red-500 flex items-center gap-2 ${
                  location.pathname === item.path ? 'text-red-600' : 'text-zinc-500'
                }`}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <button 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center p-1 rounded-full border-2 border-zinc-800 hover:border-red-600 transition-colors"
              >
                <UserCircle size={28} className="text-zinc-400" />
              </button>
              
              {isProfileOpen && (
                <div className="absolute right-0 mt-3 w-48 bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl py-2 z-50 overflow-hidden">
                  <Link to="/profile" className="flex items-center px-4 py-3 text-sm text-zinc-300 hover:bg-zinc-800 font-bold gap-2">
                    <User size={16} className="text-red-500" />
                    Profile
                  </Link>
                  <Link to="/admin" className="flex items-center px-4 py-3 text-sm text-zinc-300 hover:bg-zinc-800 font-bold gap-2">
                    <ShieldCheck size={16} className="text-red-500" />
                    Admin Access
                  </Link>
                  <Link to="/super-admin" className="flex items-center px-4 py-3 text-sm text-zinc-300 hover:bg-zinc-800 font-bold gap-2">
                    <ShieldAlert size={16} className="text-red-500" />
                    SuperAdmin
                  </Link>
                  <button className="w-full flex items-center px-4 py-3 text-sm text-red-500 hover:bg-zinc-800 font-bold gap-2 text-left border-t border-zinc-800 mt-2">
                    <LogOut size={16} />
                    Logout
                  </button>
                </div>
              )}
            </div>
            
            <button 
              className="lg:hidden p-2 text-zinc-400 hover:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-zinc-950 border-b border-zinc-800 py-6 px-6 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block text-xs font-black uppercase tracking-widest ${
                location.pathname === item.path ? 'text-red-600' : 'text-zinc-500'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white text-zinc-900 selection:bg-red-600 selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/become-donor" element={<BecomeDonorPage />} />
            <Route path="/require-donor" element={<RequireDonorPage />} />
            <Route path="/host-camp" element={<HostCampPage />} />
            <Route path="/my-requests" element={<MyRequestsPage />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/super-admin" element={<SuperAdminDashboard />} />
          </Routes>
        </main>
        
        <footer className="bg-black text-white py-24 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
              <div className="col-span-1 md:col-span-1">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="bg-red-600 p-2 rounded-lg">
                    <Heart className="text-white fill-white" size={20} />
                  </div>
                  <span className="text-2xl font-black tracking-tighter italic uppercase">SAVIOUR</span>
                </div>
                <p className="text-zinc-500 font-medium leading-relaxed text-sm">
                  Connecting blood donors with those in need using cutting-edge technology and radical empathy.
                </p>
              </div>
              
              <div>
                <h4 className="text-[10px] font-black mb-8 text-white uppercase tracking-[0.4em]">Navigation</h4>
                <ul className="space-y-4 text-[10px] font-black uppercase tracking-widest text-zinc-500">
                  <li><Link to="/become-donor" className="hover:text-red-600 transition-colors">Become Donor</Link></li>
                  <li><Link to="/require-donor" className="hover:text-red-600 transition-colors">Request Help</Link></li>
                  <li><Link to="/host-camp" className="hover:text-red-600 transition-colors">Host Drive</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-[10px] font-black mb-8 text-white uppercase tracking-[0.4em]">Info</h4>
                <ul className="space-y-4 text-[10px] font-black uppercase tracking-widest text-zinc-500">
                  <li><a href="#" className="hover:text-red-600 transition-colors">Safety Protocols</a></li>
                  <li><a href="#" className="hover:text-red-600 transition-colors">Emergency List</a></li>
                  <li><a href="#" className="hover:text-red-600 transition-colors">Medical FAQ</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-[10px] font-black mb-8 text-white uppercase tracking-[0.4em]">Network</h4>
                <div className="flex space-x-3">
                  {['IG', 'TW', 'LI'].map(social => (
                    <div key={social} className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center hover:bg-red-600 transition-all cursor-pointer border border-zinc-800">
                      <span className="text-[10px] font-black">{social}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="border-t border-zinc-900 pt-10 flex flex-col md:flex-row justify-between items-center text-zinc-600 text-[9px] font-black uppercase tracking-[0.3em]">
              <p>&copy; {new Date().getFullYear()} SAVIOUR OPERATIONAL COMMAND.</p>
              <div className="mt-4 md:mt-0 space-x-8">
                <a href="#" className="hover:text-white">Confidentiality</a>
                <a href="#" className="hover:text-white">User Terms</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
