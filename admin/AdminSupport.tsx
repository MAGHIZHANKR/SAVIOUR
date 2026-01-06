
import React, { useState } from 'react';
import { 
  Eye, 
  Search, 
  X, 
  ChevronLeft, 
  ChevronRight,
  User,
  MessageSquare
} from 'lucide-react';

const AdminSupport: React.FC = () => {
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<any>(null);

  const mockTickets = [
    { 
      id: 'TKT-L01', 
      user: 'Sriram V', 
      subject: 'blood request', 
      priority: 'urgent', 
      status: 'Pending', 
      received: '26/10/2025, 12:39:02',
      message: 'Critical need at KMCH Coimbatore. Verified but donor hasn\'t reached.',
      email: 'sriram.v@gmail.com',
      mobile: '9876543210'
    }
  ];

  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-black italic uppercase tracking-tighter">Support Inbox</h3>
        <div className="relative group w-72">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-300 group-focus-within:text-red-600 transition-colors" size={16} />
          <input 
            type="text" 
            placeholder="Search local tickets..." 
            className="w-full bg-white border border-zinc-200 pl-11 pr-4 py-2.5 rounded-xl font-bold text-[11px] uppercase tracking-widest focus:border-red-600 outline-none transition-all"
          />
        </div>
      </div>

      <div className="bg-white rounded-[32px] border border-zinc-200 shadow-sm overflow-hidden min-h-[400px]">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-zinc-50/50 border-b border-zinc-200">
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">User</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Subject</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 text-center">Priority</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 text-center">Status</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Received</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockTickets.map((ticket) => (
              <tr key={ticket.id} className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors group">
                <td className="px-8 py-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-400 border border-zinc-200">
                      <User size={14} />
                    </div>
                    <span className="font-bold text-sm text-zinc-700">{ticket.user}</span>
                  </div>
                </td>
                <td className="px-8 py-6 font-bold text-xs text-zinc-500 uppercase italic tracking-tight">{ticket.subject}</td>
                <td className="px-8 py-6 text-center">
                  <span className="px-4 py-1.5 bg-pink-100 text-red-600 border border-pink-200 rounded-lg text-[9px] font-black uppercase tracking-widest">
                    {ticket.priority}
                  </span>
                </td>
                <td className="px-8 py-6 text-center">
                  <span className="px-4 py-1.5 bg-[#FFF3CD] text-[#856404] border border-[#FFEEBA] rounded-lg text-[9px] font-black uppercase tracking-widest">
                    {ticket.status}
                  </span>
                </td>
                <td className="px-8 py-6 text-zinc-400 text-[11px] font-bold">{ticket.received}</td>
                <td className="px-8 py-6 text-center">
                  <button onClick={() => { setSelectedTicket(ticket); setShowDetailModal(true); }} className="text-zinc-300 hover:text-red-600 transition-colors">
                    <Eye size={20} />
                  </button>
                </td>
              </tr>
            ))}
            {mockTickets.length === 0 && (
              <tr>
                <td colSpan={6} className="px-8 py-20 text-center text-zinc-300 font-black uppercase italic tracking-widest">No local tickets found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center items-center gap-4 mt-8 pb-10">
        <button className="px-8 py-3 bg-zinc-100 border border-zinc-200 rounded-xl text-zinc-400 font-black text-[10px] uppercase tracking-widest flex items-center gap-2">
          <ChevronLeft size={14} /> Previous
        </button>
        <button className="px-8 py-3 bg-zinc-100 border border-zinc-200 rounded-xl text-zinc-400 font-black text-[10px] uppercase tracking-widest flex items-center gap-2">
          Next <ChevronRight size={14} />
        </button>
      </div>

      {showDetailModal && selectedTicket && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-[2px] p-6">
          <div className="bg-white rounded-3xl w-full max-w-2xl shadow-2xl relative animate-in zoom-in duration-200 overflow-hidden">
             <div className="p-8 flex justify-between items-center border-b border-zinc-100 bg-zinc-50/30">
                <div className="flex items-center gap-3">
                  <div className="bg-red-600 p-2 rounded-lg"><MessageSquare size={16} className="text-white" /></div>
                  <h3 className="text-xl font-black text-zinc-800 tracking-tighter uppercase italic">Local Ticket #{selectedTicket.id}</h3>
                </div>
                <button onClick={() => setShowDetailModal(false)} className="text-zinc-300 hover:text-black transition-colors">
                  <X size={24} />
                </button>
             </div>
             <div className="p-10">
                <p className="text-zinc-500 font-medium mb-10 leading-relaxed text-center px-10 italic">"{selectedTicket.message}"</p>
                <button onClick={() => setShowDetailModal(false)} className="w-full bg-red-600 text-white py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-lg">Close Detail</button>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminSupport;
