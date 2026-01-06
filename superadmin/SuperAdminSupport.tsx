
import React, { useState } from 'react';
import { 
  Eye, 
  Search, 
  X, 
  ChevronLeft, 
  ChevronRight,
  User,
  MessageSquare,
  CheckCircle2,
  Clock
} from 'lucide-react';

const SuperAdminSupport: React.FC = () => {
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<any>(null);

  const mockTickets = [
    { 
      id: 'TKT-001', 
      user: 'Sriram V', 
      subject: 'blood request', 
      priority: 'urgent', 
      status: 'Pending', 
      received: '26/10/2025, 12:39:02',
      message: 'I submitted a request for O+ blood at KMCH but it is still showing as pending verification. Please assist urgently as the patient is in critical condition.',
      email: 'sriram.v@gmail.com',
      mobile: '9876543210'
    },
    { 
      id: 'TKT-002', 
      user: 'Sriram V', 
      subject: 'blood request', 
      priority: 'urgent', 
      status: 'Pending', 
      received: '26/10/2025, 12:34:02',
      message: 'Duplicate ticket created by mistake. Please ignore this one.',
      email: 'sriram.v@gmail.com',
      mobile: '9876543210'
    },
    { 
      id: 'TKT-003', 
      user: 'Priyanka R', 
      subject: 'donor profile edit', 
      priority: 'normal', 
      status: 'Resolved', 
      received: '24/10/2025, 10:15:45',
      message: 'I want to change my resident city to Chennai.',
      email: 'priyanka.r@outlook.com',
      mobile: '9123456789'
    }
  ];

  const handleView = (ticket: any) => {
    setSelectedTicket(ticket);
    setShowDetailModal(true);
  };

  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-black italic uppercase tracking-tighter">Support Inbox</h3>
        <div className="relative group w-72">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-300 group-focus-within:text-red-600 transition-colors" size={16} />
          <input 
            type="text" 
            placeholder="Search tickets..." 
            className="w-full bg-white border border-zinc-200 pl-11 pr-4 py-2.5 rounded-xl font-bold text-[11px] uppercase tracking-widest focus:border-red-600 outline-none transition-all"
          />
        </div>
      </div>

      <div className="bg-white rounded-[32px] border border-zinc-200 shadow-sm overflow-hidden">
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
                  <span className={`px-4 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest border ${
                    ticket.priority === 'urgent' 
                      ? 'bg-pink-100 text-red-600 border-pink-200' 
                      : 'bg-blue-50 text-blue-600 border-blue-100'
                  }`}>
                    {ticket.priority}
                  </span>
                </td>
                <td className="px-8 py-6 text-center">
                  <span className={`px-4 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest border ${
                    ticket.status === 'Pending' 
                      ? 'bg-[#FFF3CD] text-[#856404] border-[#FFEEBA]' 
                      : 'bg-green-50 text-green-700 border-green-100'
                  }`}>
                    {ticket.status}
                  </span>
                </td>
                <td className="px-8 py-6 text-zinc-400 text-[11px] font-bold">{ticket.received}</td>
                <td className="px-8 py-6 text-center">
                  <button onClick={() => handleView(ticket)} className="text-zinc-300 hover:text-red-600 transition-colors">
                    <Eye size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center items-center gap-4 mt-8">
        <button className="px-8 py-3 bg-zinc-100 border border-zinc-200 rounded-xl text-zinc-400 font-black text-[10px] uppercase tracking-widest flex items-center gap-2 hover:bg-zinc-200 transition-all">
          <ChevronLeft size={14} /> Previous
        </button>
        <button className="px-8 py-3 bg-zinc-100 border border-zinc-200 rounded-xl text-zinc-400 font-black text-[10px] uppercase tracking-widest flex items-center gap-2 hover:bg-zinc-200 transition-all">
          Next <ChevronRight size={14} />
        </button>
      </div>

      {showDetailModal && selectedTicket && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-[2px] p-6">
          <div className="bg-white rounded-3xl w-full max-w-2xl shadow-2xl relative animate-in zoom-in duration-200 overflow-hidden">
             <div className="p-8 flex justify-between items-center border-b border-zinc-100 bg-zinc-50/30">
                <div className="flex items-center gap-3">
                  <div className="bg-red-600 p-2 rounded-lg"><MessageSquare size={16} className="text-white" /></div>
                  <h3 className="text-xl font-black text-zinc-800 tracking-tighter uppercase italic">Ticket #{selectedTicket.id}</h3>
                </div>
                <button onClick={() => setShowDetailModal(false)} className="text-zinc-300 hover:text-black transition-colors">
                  <X size={24} />
                </button>
             </div>
             
             <div className="p-10 space-y-10">
                <div className="grid grid-cols-2 gap-8">
                  <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
                    <p className="text-[9px] font-black text-zinc-400 uppercase tracking-[0.2em] mb-3">User Identity</p>
                    <p className="text-sm font-black text-zinc-800 uppercase italic mb-1">{selectedTicket.user}</p>
                    <p className="text-[11px] font-bold text-zinc-500 break-all">{selectedTicket.email}</p>
                    <p className="text-[11px] font-bold text-zinc-500 mt-1">{selectedTicket.mobile}</p>
                  </div>
                  <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
                    <p className="text-[9px] font-black text-zinc-400 uppercase tracking-[0.2em] mb-3">Issue Metadata</p>
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-[9px] font-black uppercase px-2 py-0.5 bg-red-100 text-red-600 rounded">{selectedTicket.priority}</span>
                      <span className="text-[9px] font-black uppercase px-2 py-0.5 bg-zinc-200 text-zinc-600 rounded">{selectedTicket.status}</span>
                    </div>
                    <p className="text-[10px] font-bold text-zinc-400">RCVD: {selectedTicket.received}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-[9px] font-black text-zinc-400 uppercase tracking-[0.2em]">Message Content</p>
                  <div className="bg-zinc-50/50 p-8 rounded-3xl border border-zinc-100 leading-relaxed text-zinc-700 font-medium">
                    "{selectedTicket.message}"
                  </div>
                </div>

                <div className="flex gap-4 pt-6 border-t border-zinc-100">
                  <button className="flex-grow bg-red-600 text-white py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-red-700 transition-all shadow-lg flex items-center justify-center gap-2">
                    <CheckCircle2 size={16} /> Mark as Resolved
                  </button>
                  <button className="flex-grow bg-zinc-950 text-white py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-zinc-800 transition-all flex items-center justify-center gap-2">
                    <Clock size={16} /> Escalate Ticket
                  </button>
                </div>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SuperAdminSupport;
