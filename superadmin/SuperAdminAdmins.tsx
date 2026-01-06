
import React, { useState } from 'react';
import { Search, X, UserCircle, ChevronDown, ShieldAlert, CheckCircle2 } from 'lucide-react';

interface AdminUser {
  email: string;
  role: string;
  city: string;
  isDonor: boolean;
  uid: string;
}

const SuperAdminAdmins: React.FC = () => {
  const [adminSearch, setAdminSearch] = useState('');
  
  // State for managing users dynamically
  const [users, setUsers] = useState<AdminUser[]>([
    { email: 'rtu_ashwanth@gmail.com', role: 'user', city: '-', isDonor: true, uid: 'CVitxiAWOOdhrxMdlKmWWqVqo1' },
    { email: 'samjoel_sarath@gmail.com', role: 'user', city: '-', isDonor: true, uid: 'A1B2C3D4E5F6G7H8I9J0K1L2M3' },
    { email: 'jaikrishna.raccbeunique@gmail.com', role: 'user', city: '-', isDonor: false, uid: 'J1K2R3A4C5C6B7E8U9N0I1Q2U3' },
    { email: 'rtu.yokkessh.raccbeunique@gmail.com', role: 'user', city: '-', isDonor: true, uid: 'Y1O2K3K4E5S6S7H8R9A0C1C2B3' },
  ]);

  // Local Modal States
  const [showRoleModal, setShowRoleModal] = useState(false);
  const [showUserDetailsModal, setShowUserDetailsModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<AdminUser | null>(null);
  const [pendingRole, setPendingRole] = useState<string>('');
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [cityError, setCityError] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const cities = ['Chennai', 'Coimbatore', 'Madurai', 'Erode', 'Salem', 'Trichy', 'Dharmapuri', 'Dindigul', 'Hosur'];

  // Filter out those who are already SuperAdmins, and apply search
  const filteredAdmins = users.filter(user => 
    user.role !== 'superadmin' && 
    user.email.toLowerCase().includes(adminSearch.toLowerCase())
  );

  const handleRoleChange = (user: AdminUser, role: string) => {
    setSelectedUser(user);
    setPendingRole(role);
    setSelectedCity('');
    setCityError(false);
    setShowRoleModal(true);
  };

  const handleViewDetails = (user: AdminUser) => {
    setSelectedUser(user);
    setShowUserDetailsModal(true);
  };

  const confirmChange = () => {
    if (!selectedCity) {
      setCityError(true);
      return;
    }
    
    if (selectedUser) {
      // Update state: if role becomes superadmin, they will naturally be filtered out of the table
      setUsers(prev => prev.map(u => 
        u.uid === selectedUser.uid 
          ? { ...u, role: pendingRole, city: selectedCity } 
          : u
      ));
      
      setSuccessMsg(`User ${selectedUser.email} promoted to ${pendingRole}.`);
      setTimeout(() => setSuccessMsg(null), 3000);
    }
    
    setShowRoleModal(false);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Search Input */}
      <div className="relative group max-w-full">
        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-300 group-focus-within:text-red-600 transition-colors" size={18} />
        <input 
          type="text" 
          placeholder="Search users to manage roles..." 
          value={adminSearch}
          onChange={(e) => setAdminSearch(e.target.value)}
          className="w-full bg-white border border-zinc-200 pl-14 pr-6 py-4 rounded-xl font-bold text-sm focus:border-red-600 outline-none transition-all shadow-sm"
        />
      </div>

      {successMsg && (
        <div className="bg-green-50 border border-green-100 p-4 rounded-xl flex items-center gap-3 animate-in slide-in-from-top-2">
          <CheckCircle2 size={18} className="text-green-600" />
          <p className="text-[10px] font-black uppercase tracking-widest text-green-700">{successMsg}</p>
        </div>
      )}

      {/* Table */}
      <div className="bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden min-h-[400px]">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-zinc-50/50 border-b border-zinc-200">
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400">Email</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400">Current Role</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400 text-center">Details</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredAdmins.map((user, idx) => (
              <tr key={user.uid} className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                <td className="px-8 py-6 font-bold text-sm text-zinc-600 truncate max-w-[250px]">{user.email}</td>
                <td className="px-8 py-6">
                  <span className={`text-[10px] font-black uppercase tracking-widest ${user.role === 'admin' ? 'text-red-600' : 'text-zinc-400'}`}>
                    {user.role}
                  </span>
                </td>
                <td className="px-8 py-6 text-center">
                  <button 
                    onClick={() => handleViewDetails(user)}
                    className="bg-[#6F42C1] text-white px-5 py-2.5 rounded text-[9px] font-black uppercase tracking-widest hover:bg-purple-800 shadow-sm transition-all"
                  >
                    View Details
                  </button>
                </td>
                <td className="px-8 py-6">
                  <div className="flex items-center justify-center gap-2">
                     {user.role !== 'admin' && (
                       <button 
                         onClick={() => handleRoleChange(user, 'admin')}
                         className="bg-[#1A1C23] text-white px-5 py-2.5 rounded text-[9px] font-black uppercase tracking-widest hover:bg-zinc-800 shadow-sm transition-all"
                       >
                         Make Admin
                       </button>
                     )}
                     <button 
                       onClick={() => handleRoleChange(user, 'superadmin')}
                       className="bg-red-700 text-white px-5 py-2.5 rounded text-[9px] font-black uppercase tracking-widest hover:bg-red-800 shadow-sm transition-all"
                     >
                       Make Superadmin
                     </button>
                  </div>
                </td>
              </tr>
            ))}
            {filteredAdmins.length === 0 && (
              <tr>
                <td colSpan={4} className="py-24 text-center">
                   <div className="flex flex-col items-center gap-4 opacity-20">
                     <ShieldAlert size={48} />
                     <p className="text-[11px] font-black uppercase tracking-[0.4em]">No eligible users found</p>
                   </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Confirm Role Change Modal */}
      {showRoleModal && selectedUser && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-[2px] p-6">
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl relative animate-in zoom-in duration-200 overflow-hidden border border-zinc-200">
             <div className="p-12">
                <div className="flex justify-between items-start mb-8">
                  <h3 className="text-2xl font-black text-zinc-800 tracking-tight uppercase italic">Confirm Escalation</h3>
                  <button onClick={() => setShowRoleModal(false)} className="text-zinc-300 hover:text-black transition-colors">
                    <X size={20} />
                  </button>
                </div>
                
                <p className="text-sm font-bold text-zinc-500 mb-10 leading-relaxed uppercase tracking-wide">
                  Confirming the elevation of <br />
                  <span className="text-red-600 font-black">{selectedUser.email}</span> <br />
                  to <span className="text-zinc-900 font-black">{pendingRole}</span> status.
                </p>
                
                <div className="space-y-3">
                  <label className="block text-[11px] font-black text-zinc-400 uppercase tracking-widest mb-2">Assign Operational HQ (City)</label>
                  <div className="relative">
                    <select 
                      value={selectedCity}
                      onChange={(e) => { setSelectedCity(e.target.value); setCityError(false); }}
                      className={`w-full bg-zinc-50 border-2 ${cityError ? 'border-red-500' : 'border-zinc-100'} px-6 py-4 rounded-xl font-bold text-sm outline-none appearance-none cursor-pointer text-zinc-700 focus:border-red-600 transition-colors`}
                    >
                      <option value="">Select HQ City</option>
                      {cities.map(city => <option key={city} value={city}>{city}</option>)}
                    </select>
                    <ChevronDown size={18} className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" />
                  </div>
                  {cityError && (
                    <p className="text-[10px] font-black text-red-500 uppercase tracking-widest mt-2 animate-in fade-in slide-in-from-top-1">
                      Target sector assignment required.
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-end gap-6 mt-12">
                   <button 
                     onClick={() => setShowRoleModal(false)} 
                     className="text-zinc-400 font-black text-[10px] uppercase tracking-widest hover:text-zinc-600 transition-colors"
                   >
                     Abort
                   </button>
                   <button 
                     onClick={confirmChange}
                     className="px-12 py-5 bg-zinc-900 text-white rounded-xl font-black text-[10px] uppercase tracking-widest shadow-xl hover:bg-black transition-all active:scale-95"
                   >
                     Confirm Promotion
                   </button>
                </div>
             </div>
          </div>
        </div>
      )}

      {/* User Details Modal */}
      {showUserDetailsModal && selectedUser && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-[2px] p-6">
          <div className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl relative animate-in zoom-in duration-200 overflow-hidden border border-zinc-200">
             <div className="p-8 flex justify-between items-center border-b border-zinc-100 bg-zinc-50/30">
                <h3 className="text-lg font-black text-zinc-800 uppercase italic">OPERATIONAL FILE: {selectedUser.email.split('@')[0]}</h3>
                <button onClick={() => setShowUserDetailsModal(false)} className="text-zinc-300 hover:text-black transition-colors">
                  <X size={24} />
                </button>
             </div>
             <div className="p-12 space-y-12">
                <div className="bg-zinc-50 p-10 rounded-3xl border border-zinc-100">
                   <h4 className="text-[10px] font-black text-[#31708F] uppercase tracking-[0.4em] mb-10 flex items-center gap-3">
                     <UserCircle size={18} /> IDENTITY CLEARANCE
                   </h4>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div>
                        <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-2">EMAIL ADDRESS</p>
                        <p className="text-sm font-bold text-zinc-900">{selectedUser.email}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-2">UID HASH</p>
                        <p className="text-xs font-bold text-zinc-500 break-all leading-relaxed">{selectedUser.uid}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-2">ROLE LEVEL</p>
                        <p className="text-sm font-black text-red-600 uppercase italic">{selectedUser.role}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-2">ASSIGNED HQ</p>
                        <p className="text-sm font-bold text-zinc-900">{selectedUser.city}</p>
                      </div>
                   </div>
                </div>
                <button 
                  onClick={() => setShowUserDetailsModal(false)} 
                  className="w-full bg-zinc-950 text-white py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest"
                >
                  Close Document
                </button>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SuperAdminAdmins;
