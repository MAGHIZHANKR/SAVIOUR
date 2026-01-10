
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';

const LoginPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-[calc(100vh-96px)] bg-slate-100 flex flex-col items-center justify-center p-8 py-32">
      {/* Heavy Platform Title */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-black text-red-900 tracking-tighter leading-none uppercase italic text-impact">
          SAVIOUR<br />CENTRAL.
        </h1>
        <p className="text-slate-400 font-black text-[12px] uppercase tracking-[0.6em] mt-4">Operational Authentication Required</p>
      </div>

      {/* Robust Auth Card */}
      <div className="w-full max-w-xl bg-white rounded-[40px] shadow-[0_40px_100px_rgba(0,0,0,0.1)] border border-slate-100 p-12 md:p-20 animate-in fade-in zoom-in duration-500">
        <div className="text-center mb-12">
          <p className="text-slate-900 font-black text-lg tracking-tight uppercase italic text-impact">
            {isLogin ? 'Mission Access' : 'New Hero Registration'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {!isLogin && (
            <div className="space-y-3">
              <label className="block text-[12px] font-black text-slate-500 uppercase tracking-widest ml-2">Full Name</label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Enter operator name" 
                  className="w-full bg-slate-50 border-2 border-slate-100 px-8 py-5 rounded-2xl font-black text-[15px] focus:border-red-700 outline-none transition-all placeholder:text-slate-300"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
            </div>
          )}

          <div className="space-y-3">
            <label className="block text-[12px] font-black text-slate-500 uppercase tracking-widest ml-2">Email Address</label>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Enter email" 
                className="w-full bg-slate-50 border-2 border-slate-100 px-8 py-5 rounded-2xl font-black text-[15px] focus:border-red-700 outline-none transition-all placeholder:text-slate-300"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
          </div>

          <div className="space-y-3">
            <label className="block text-[12px] font-black text-slate-500 uppercase tracking-widest ml-2">Access Key</label>
            <div className="relative">
              <input 
                type="password" 
                placeholder="Enter password" 
                className="w-full bg-slate-50 border-2 border-slate-100 px-8 py-5 rounded-2xl font-black text-[15px] focus:border-red-700 outline-none transition-all placeholder:text-slate-300"
                value={formData.password}
                onChange={e => setFormData({...formData, password: e.target.value})}
                required
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-red-700 text-white py-6 rounded-2xl font-black text-[14px] uppercase tracking-[0.3em] shadow-2xl shadow-red-700/30 hover:bg-red-800 active:scale-95 transition-all flex items-center justify-center gap-4 mt-10 text-impact"
          >
            {isLogin ? 'Initialize Session' : 'Register Operator'}
            <ArrowRight size={20} />
          </button>
        </form>

        <div className="mt-10 text-center">
          <button className="text-[12px] font-black text-slate-400 hover:text-red-700 transition-colors uppercase tracking-widest italic underline-offset-8 hover:underline">
            {isLogin ? 'Forgot Credentials?' : ''}
          </button>
        </div>

        {/* Divider */}
        <div className="relative my-14">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t-2 border-slate-50"></div>
          </div>
          <div className="relative flex justify-center text-[12px] font-black uppercase tracking-widest">
            <span className="bg-white px-6 text-slate-300 italic">or external sync</span>
          </div>
        </div>

        <button className="w-full bg-white border-2 border-slate-100 text-slate-900 py-6 rounded-2xl font-black text-[12px] uppercase tracking-[0.1em] shadow-sm hover:bg-slate-50 transition-all flex items-center justify-center gap-4 active:scale-95">
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-6 h-6" alt="Google" />
          Continue with Google Hub
        </button>

        <div className="mt-16 text-center">
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="text-[14px] font-black text-red-800 hover:underline uppercase tracking-widest decoration-2 underline-offset-8"
          >
            {isLogin ? 'New Sector Operator - Register Here' : 'Already Cleared - Login Here'}
          </button>
        </div>
      </div>
      
      <p className="mt-32 text-[12px] font-black text-slate-400 uppercase tracking-[0.8em] opacity-30 select-none">
        ENCRYPTED OPERATIONAL COMMAND CENTER
      </p>
    </div>
  );
};

export default LoginPage;
