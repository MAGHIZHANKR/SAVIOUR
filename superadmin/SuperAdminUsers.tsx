
import React, { useState } from 'react';
import { Search, X, UserCircle, Info } from 'lucide-react';

const SuperAdminUsers: React.FC = () => {
  const [userSearch, setUserSearch] = useState('');
  const [showUserDetailsModal, setShowUserDetailsModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);

  const mockUsers = [
    { email: 'rtuashwanth.s@gmail.com', role: 'user', createdOn: 'N/A', isDonor: true, uid: 'CVitxiAWOOdhrxMdlKmWWqVqo1' },
    { email: 'rtir.samjoel18@gmail.com', role: 'user', createdOn: 'N/A', isDonor: true, uid: 'A1B2C3D4E5F6G7H8I9J0K1L2M3' },
    { email: 'susiphts@gmail.com', role: 'user', createdOn: 'N/A', isDonor: false, uid: 'P1O2I3U4Y5T6R7E8W9Q0A1S2D3' },
  ];

  const filteredUsers = mockUsers.filter(user => 
    user.email.toLowerCase().includes(userSearch.toLowerCase())
  );

  const handleViewDetails = (user: any) => {
    setSelectedUser(user);
    setShowUserDetailsModal(true);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="relative group max-w-full">
        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-300 group-focus-within:text-red-600 transition-colors" size={18} />
        <input 
          type="text" 
          placeholder="Search by email..." 
          value={userSearch}
          onChange={(e) => setUserSearch(e.target.value)}
          className="w-full bg-white border border-zinc-200 pl-14 pr-6 py-4 rounded-xl font-bold text-sm focus:border-red-600 outline-none transition-all shadow-sm"
        />
      </div>

      <div className="bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-zinc-50/50 border-b border-zinc-200">
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400">Email</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400">Role</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400 text-center">Is Donor</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, idx) => (
              <tr key={idx} className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                <td className="px-8 py-6 font-bold text-sm text-zinc-600">{user.email}</td>
                <td className="px-8 py-6 text-zinc-400 text-[11px] font-black uppercase tracking-widest">{user.role}</td>
                <td className="px-8 py-6 text-center">
                  <span className={`text-[10px] font-black uppercase tracking-widest ${user.isDonor ? 'text-green-600' : 'text-red-600'}`}>
                    {user.isDonor ? 'Yes' : 'No'}
                  </span>
                </td>
                <td className="px-8 py-6">
                  <div className="flex items-center justify-center gap-2">
                     <button onClick={() => handleViewDetails(user)} className="bg-[#007BFF] text-white px-5 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest">Details</button>
                     <button className="bg-[#DC3545] text-white px-5 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showUserDetailsModal && selectedUser && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-[2px] p-6">
          <div className="bg-white rounded-xl w-full max-w-2xl shadow-2xl relative animate-in zoom-in duration-200 overflow-hidden">
             <div className="p-8 flex justify-between items-center border-b border-zinc-100 bg-zinc-50/30">
                <h3 className="text-xl font-black text-zinc-800">User Details</h3>
                <button onClick={() => setShowUserDetailsModal(false)} className="text-zinc-300 hover:text-black transition-colors"><X size={24} /></button>
             </div>
             <div className="p-10 space-y-10">
                <div className="bg-zinc-50/80 rounded-2xl p-8 border border-zinc-100">
                   <h4 className="text-[10px] font-black text-[#31708F] uppercase tracking-[0.2em] mb-8 flex items-center gap-2"><UserCircle size={14} /> Account Information</h4>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div><p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-1">Email</p><p className="text-sm font-bold text-zinc-700">{selectedUser.email}</p></div>
                      <div><p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-1">Uid</p><p className="text-sm font-bold text-zinc-700 break-all">{selectedUser.uid}</p></div>
                   </div>
                </div>
                {!selectedUser.isDonor && (
                  <div className="py-12 border-t border-zinc-100 text-center">
                    <div className="space-y-4">
                        <div className="w-16 h-16 bg-zinc-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-zinc-100">
                          <Info className="text-zinc-300" size={32} />
                        </div>
                        <p className="text-sm font-black uppercase tracking-tight text-zinc-400">
                          This user is not registered as a donor.
                        </p>
                    </div>
                  </div>
                )}
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SuperAdminUsers;
