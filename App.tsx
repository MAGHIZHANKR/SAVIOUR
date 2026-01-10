
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Heart, 
  UserCircle,
  LogOut,
  User,
  Menu,
  X,
  ShieldCheck,
  ShieldAlert,
  AlertTriangle,
  PhoneCall,
  Navigation,
  Droplet
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
import LoginPage from './pages/LoginPage';
import EmergencyPage from './pages/EmergencyPage';
import BloodBanksPage from './pages/BloodBanksPage';

const SOSButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  if (location.pathname === '/emergency') return null;

  return (
    <div className="fixed bottom-10 right-10 z-[100]">
      {isOpen && (
        <div className="absolute bottom-24 right-0 w-72 bg-white rounded-3xl shadow-2xl border border-red-100 p-6 animate-in slide-in-from-bottom-4 duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-red-600 p-2 rounded-lg">
              <AlertTriangle size={18} className="text-white" />
            </div>
            <h4 className="text-sm font-black uppercase tracking-widest text-red-700">Quick Emergency</h4>
          </div>
          <div className="space-y-3">
            <a href="tel:108" className="flex items-center justify-between w-full bg-red-600 text-white px-5 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-red-700 transition-all">
              <div className="flex items-center gap-3"><PhoneCall size={14} /> Ambulance</div>
              <span>108</span>
            </a>
            <Link 
              to="/blood-banks" 
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between w-full bg-slate-100 text-slate-950 px-5 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-200 transition-all"
            >
              <div className="flex items-center gap-3"><Droplet size={14} className="text-red-600" /> Blood Banks</div>
            </Link>
            <Link 
              to="/emergency" 
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between w-full bg-slate-900 text-white px-5 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-black transition-all"
            >
              <div className="flex items-center gap-3"><Navigation size={14} /> Full Hub</div>
            </Link>
          </div>
        </div>
      )}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-20 h-20 bg-red-600 text-white rounded-full shadow-[0_0_40px_rgba(220,38,38,0.5)] flex flex-col items-center justify-center group relative overflow-hidden active:scale-95 transition-all"
      >
        <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></div>
        <div className="animate-heartbeat flex flex-col items-center">
          <AlertTriangle size={24} className="mb-0.5" />
          <span className="text-[12px] font-black uppercase tracking-tighter italic">SOS</span>
        </div>
      </button>
    </div>
  );
};

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const isAuthPage = location.pathname === '/login';

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/blood-banks', label: 'Blood Banks' },
    { path: '/emergency', label: 'Emergency', highlight: true },
    { path: '/require-donor', label: 'Request Blood' },
    { path: '/become-donor', label: 'Be a Hero' },
  ];

  return (
    <nav className="bg-[#991B1B] text-white sticky top-0 z-50 shadow-xl border-b border-red-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-24">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="flex flex-col leading-none">
              <span className="text-3xl font-black tracking-tighter uppercase italic text-impact">SAVIOUR</span>
              <span className="text-[10px] font-black text-red-200 uppercase tracking-[0.3em]">Operational HQ</span>
            </div>
          </Link>
          
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-[11px] font-black uppercase tracking-[0.15em] transition-all hover:text-white relative pb-1 ${
                  item.highlight ? 'text-white bg-red-800 px-5 py-2.5 rounded-xl border border-red-700 shadow-lg animate-pulse' : 
                  location.pathname === item.path ? 'text-white border-b-2 border-white' : 'text-white/70'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-5">
            {!isAuthPage && (
              <Link 
                to="/login"
                className="hidden lg:block bg-white text-red-900 px-8 py-3 rounded-xl font-black text-[11px] uppercase tracking-widest hover:bg-red-50 transition-all shadow-md active:scale-95"
              >
                Access Hub
              </Link>
            )}
            
            <div className="relative">
              <button 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center p-0.5 rounded-full border-2 border-white/30 hover:border-white transition-all hover:scale-105"
              >
                <UserCircle size={32} className="text-white" />
              </button>
              
              {isProfileOpen && (
                <div className="absolute right-0 mt-4 w-56 bg-white border border-slate-100 rounded-2xl shadow-2xl py-3 z-50 overflow-hidden text-slate-900 animate-in fade-in slide-in-from-top-2">
                  <Link to="/dashboard" className="flex items-center px-5 py-3.5 text-xs text-slate-700 hover:bg-slate-50 font-black uppercase tracking-widest gap-3">
                    <User size={16} className="text-red-600" />
                    Dashboard
                  </Link>
                  <Link to="/admin" className="flex items-center px-5 py-3.5 text-xs text-slate-700 hover:bg-slate-50 font-black uppercase tracking-widest gap-3">
                    <ShieldCheck size={16} className="text-red-600" />
                    Admin
                  </Link>
                  <button className="w-full flex items-center px-5 py-3.5 text-xs text-red-600 hover:bg-red-50 font-black uppercase tracking-widest gap-3 text-left border-t border-slate-100 mt-2">
                    <LogOut size={16} />
                    Logout
                  </button>
                </div>
              )}
            </div>
            
            <button 
              className="lg:hidden p-2 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#991B1B] border-t border-red-900/50 p-6 space-y-4 animate-in slide-in-from-top-4 duration-300">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-4 border-b border-red-900/30 text-lg font-black uppercase italic tracking-tighter"
            >
              {item.label}
            </Link>
          ))}
          <Link 
            to="/login"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full bg-white text-red-900 py-4 rounded-xl text-center font-black uppercase tracking-widest"
          >
            Access Hub
          </Link>
        </div>
      )}
    </nav>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-red-600 selection:text-white">
        <Navbar />
        <SOSButton />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/emergency" element={<EmergencyPage />} />
            <Route path="/blood-banks" element={<BloodBanksPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/become-donor" element={<BecomeDonorPage />} />
            <Route path="/require-donor" element={<RequireDonorPage />} />
            <Route path="/host-camp" element={<HostCampPage />} />
            <Route path="/my-requests" element={<MyRequestsPage />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/super-admin" element={<SuperAdminDashboard />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </main>
        
        <footer className="bg-slate-950 text-white py-24 border-t border-slate-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
              <div className="col-span-1 md:col-span-1">
                <div className="flex items-center space-x-3 mb-8">
                  <span className="text-3xl font-black tracking-tighter italic uppercase text-impact text-white">SAVIOUR</span>
                </div>
                <p className="text-slate-500 font-bold leading-relaxed text-sm italic">
                  Critical medical infrastructure for decentralized recovery. Bridging the gap between emergency and action.
                </p>
              </div>
              
              <div>
                <h4 className="text-[10px] font-black mb-8 text-red-600 uppercase tracking-[0.5em]">Direct Access</h4>
                <ul className="space-y-4 text-[11px] font-black uppercase tracking-widest text-slate-400">
                  <li><Link to="/blood-banks" className="hover:text-white transition-colors">Blood Bank Directory</Link></li>
                  <li><Link to="/emergency" className="hover:text-white transition-colors">Emergency Protocol</Link></li>
                  <li><Link to="/require-donor" className="hover:text-white transition-colors">Request Dispatch</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-[10px] font-black mb-8 text-red-600 uppercase tracking-[0.5em]">Resources</h4>
                <ul className="space-y-4 text-[11px] font-black uppercase tracking-widest text-slate-400">
                  <li><a href="#" className="hover:text-white transition-colors">Safety Standard</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Sector FAQ</a></li>
                  <li><Link to="/about" className="hover:text-white transition-colors">Pillar Methodology</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-[10px] font-black mb-8 text-red-600 uppercase tracking-[0.5em]">Command Hub</h4>
                <div className="flex space-x-4">
                  {['IG', 'TW', 'LI'].map(social => (
                    <div key={social} className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center hover:bg-red-600 transition-all cursor-pointer border border-slate-800">
                      <span className="text-[10px] font-black">{social}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="border-t border-slate-900 pt-10 flex flex-col md:flex-row justify-between items-center text-slate-600 text-[9px] font-black uppercase tracking-[0.4em]">
              <p>&copy; {new Date().getFullYear()} SAVIOUR COMMAND. ALL RIGHTS RESERVED.</p>
              <div className="mt-4 md:mt-0 space-x-8">
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-white transition-colors">Compliance</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
