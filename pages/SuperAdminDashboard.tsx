
import React, { useState } from 'react';
import { 
  Users, 
  Calendar, 
  CheckCircle2, 
  MessageSquare,
  FileText,
  X,
  UserCircle,
  ShieldCheck,
  ShieldAlert,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const SuperAdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'requests' | 'camps' | 'donors' | 'users' | 'admins' | 'support'>('requests');
  const [requestFilter, setRequestFilter] = useState<'Current' | 'Ongoing' | 'Completed' | 'Rejected' | 'All'>('Current');
  
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showDonorModal, setShowDonorModal] = useState(false);
  const [showCreatorInfo, setShowCreatorInfo] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const mockRequests = [
    { 
      id: 'REQ-101', patientName: 'Senthil Kumar P', bloodGroup: 'B+', hospital: 'KMCH', 
      status: 'Ongoing', attenderName: 'Vinith', attenderMobile: '8015633350', city: 'Coimbatore',
      country: 'India', gender: 'male', patientAge: '45', reason: 'Accident', unitsNeeded: '3',
      verified: 'completed', emergencyLevel: 'High'
    },
    { 
      id: 'REQ-102', patientName: 'GANESAN', bloodGroup: 'O+', hospital: 'KMCH, Chitra, CBE.', 
      status: 'Completed', attenderName: 'KAVITHA', attenderMobile: '9500488606', city: 'Coimbatore',
      country: 'India', gender: 'male', patientAge: '50', reason: 'Thrombocytopenia', unitsNeeded: '3',
      verified: 'completed', emergencyLevel: 'High'
    },
    { 
      id: 'REQ-103', patientName: 'J Murali', bloodGroup: 'B-', hospital: 'Erode Medical Centre, Erode', 
      status: 'Current', attenderName: 'Kamal', attenderMobile: '9523842352', city: 'Erode',
      country: 'India', gender: 'male', patientAge: '40', reason: 'Emergency Surgery', unitsNeeded: '2',
      verified: 'received', emergencyLevel: null
    },
    { 
      id: 'REQ-104', patientName: 'bibidi', bloodGroup: '', hospital: 'DFDFD', 
      status: 'Current', attenderName: 'DFDFDG', attenderMobile: '9876543210', city: 'Dharmapuri',
      country: 'India', gender: 'female', patientAge: '18', reason: 'DHAHAA ADADASD', unitsNeeded: '10',
      verified: 'received', emergencyLevel: null
    }
  ];

  const filteredRequests = mockRequests.filter(req => 
    requestFilter === 'All' ? true : req.status === requestFilter
  );

  const handleAction = (type: 'emergency' | 'detail' | 'donor', item: any) => {
    setSelectedItem(item);
    if (type === 'emergency') setShowEmergencyModal(true);
    if (type === 'detail') {
      setShowCreatorInfo(false);
      setShowDetailModal(true);
    }
    if (type === 'donor') setShowDonorModal(true);
  };

  return (
    <div className="flex min-h-screen bg-[#F8F9FA]">
      {/* Sidebar - Matching Image 1/4 style */}
      <div className="w-64 bg-[#1A1C23] text-white p-0 flex flex-col border-r border-zinc-800 sticky top-0 h-screen">
        <div className="p-6 border-b border-zinc-800">
          <h1 className="text-xl font-black tracking-tighter uppercase italic">SuperAdmin Dashboard</h1>
          <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-1">Manage everything</p>
        </div>
        
        <nav className="flex-grow py-4">
          {[
            { id: 'requests', label: 'Blood Requests', icon: <FileText size={18} /> },
            { id: 'camps', label: 'Blood Camps', icon: <Calendar size={18} /> },
            { id: 'donors', label: 'Donors', icon: <Users size={18} /> },
            { id: 'users', label: 'Users', icon: <UserCircle size={18} /> },
            { id: 'admins', label: 'Manage Admins', icon: <ShieldCheck size={18} /> },
            { id: 'support', label: 'Support', icon: <MessageSquare size={18} /> },
          ].map(nav => (
            <button
              key={nav.id}
              onClick={() => setActiveTab(nav.id as any)}
              className={`w-full flex items-center gap-4 px-8 py-4 text-[11px] font-black uppercase tracking-widest transition-all ${
                activeTab === nav.id 
                  ? 'bg-red-700/80 text-white' 
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
              }`}
            >
              {nav.icon}
              {nav.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="flex-grow">
        <header className="bg-white h-20 border-b border-zinc-200 flex items-center justify-between px-10 sticky top-0 z-40">
           <h2 className="text-2xl font-black tracking-tighter uppercase italic">Blood Requests</h2>
           <button className="bg-zinc-100 text-zinc-600 px-6 py-2.5 rounded-lg font-black text-[10px] uppercase tracking-widest hover:bg-zinc-200 transition-all">
             Export
           </button>
        </header>

        <div className="p-10">
          <div className="space-y-8 animate-in fade-in duration-500">
            {/* Filter Tabs - Matching Image 1/4/6/13 */}
            <div className="flex gap-2">
              {['Current', 'Ongoing', 'Completed', 'Rejected', 'All'].map(filter => (
                <button 
                  key={filter} 
                  onClick={() => setRequestFilter(filter as any)}
                  className={`px-6 py-2 rounded-lg font-black text-[10px] uppercase tracking-widest transition-all ${
                    requestFilter === filter 
                      ? 'bg-red-800 text-white' 
                      : 'bg-zinc-200 text-zinc-500 hover:bg-zinc-300'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Table - Matching Image 1/4/6/13 actions */}
            <div className="bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-zinc-50 border-b border-zinc-200">
                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400">Patient Name</th>
                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400">Blood Group</th>
                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400">Hospital</th>
                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRequests.map(req => (
                    <tr key={req.id} className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                      <td className="px-8 py-6 font-bold text-sm text-zinc-700">{req.patientName}</td>
                      <td className="px-8 py-6 font-black text-sm text-red-600">{req.bloodGroup || '-'}</td>
                      <td className="px-8 py-6 text-zinc-500 text-[11px] font-bold uppercase">{req.hospital}</td>
                      <td className="px-8 py-6">
                        <div className="flex items-center justify-center gap-1">
                          {req.status === 'Current' ? (
                            <>
                              <button onClick={() => handleAction('emergency', req)} className="bg-[#28A745] text-white px-4 py-1.5 rounded text-[9px] font-black uppercase hover:opacity-90 transition-opacity">Accept</button>
                              <button className="bg-[#DC3545] text-white px-4 py-1.5 rounded text-[9px] font-black uppercase hover:opacity-90 transition-opacity">Reject</button>
                              <button onClick={() => handleAction('detail', req)} className="bg-[#007BFF] text-white px-4 py-1.5 rounded text-[9px] font-black uppercase hover:opacity-90 transition-opacity">More</button>
                            </>
                          ) : (
                            <>
                              <button onClick={() => handleAction('detail', req)} className="bg-[#007BFF] text-white px-3 py-1.5 rounded text-[9px] font-black uppercase">More</button>
                              <button onClick={() => handleAction('donor', req)} className="bg-[#6F42C1] text-white px-3 py-1.5 rounded text-[9px] font-black uppercase">View Donors</button>
                              <button className="bg-[#C82333] text-white px-3 py-1.5 rounded text-[9px] font-black uppercase">Cancelled Donors</button>
                              <button className="bg-[#28A745] text-white px-3 py-1.5 rounded text-[9px] font-black uppercase">Completed</button>
                              <button className="bg-[#E0A800] text-zinc-800 px-3 py-1.5 rounded text-[9px] font-black uppercase">Edit</button>
                              <button className="bg-[#C82333] text-white px-3 py-1.5 rounded text-[9px] font-black uppercase">Reject</button>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              {/* Pagination - Matching Image 6/13 bottom */}
              <div className="p-6 border-t border-zinc-100 flex items-center justify-center gap-6">
                 <button className="bg-zinc-100 px-6 py-2 rounded-lg font-black text-[10px] uppercase text-zinc-400 hover:text-zinc-600 transition-colors">Previous</button>
                 <button className="bg-zinc-100 px-6 py-2 rounded-lg font-black text-[10px] uppercase text-zinc-400 hover:text-zinc-600 transition-colors">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Request Details Modal - Matching Image 10/14/17 */}
      {showDetailModal && selectedItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-6 overflow-y-auto">
          <div className="bg-white rounded-lg w-full max-w-2xl shadow-2xl relative animate-in zoom-in duration-200 mt-20 mb-20">
             <div className="p-8 flex justify-between items-center border-b border-zinc-100">
                <h3 className="text-xl font-black uppercase tracking-tight">Request Details</h3>
                <button onClick={() => setShowDetailModal(false)} className="text-zinc-400 hover:text-black">
                  <X size={24} />
                </button>
             </div>
             
             <div className="p-10 grid grid-cols-2 gap-y-8 gap-x-12 bg-white">
                <div>
                  <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-1">Attender Mobile</p>
                  <p className="text-sm font-bold text-zinc-700">{selectedItem.attenderMobile}</p>
                </div>
                <div>
                  <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-1">Attender Name</p>
                  <p className="text-sm font-bold text-zinc-700">{selectedItem.attenderName}</p>
                </div>
                <div>
                  <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-1">Blood Group</p>
                  <p className="text-sm font-bold text-zinc-700">{selectedItem.bloodGroup}</p>
                </div>
                <div>
                  <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-1">City</p>
                  <p className="text-sm font-bold text-zinc-700">{selectedItem.city}</p>
                </div>
                <div>
                  <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-1">Country</p>
                  <p className="text-sm font-bold text-zinc-700">{selectedItem.country}</p>
                </div>
                <div>
                  <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-1">Gender</p>
                  <p className="text-sm font-bold text-zinc-700">{selectedItem.gender}</p>
                </div>
                <div>
                  <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-1">Hospital</p>
                  <p className="text-sm font-bold text-zinc-700">{selectedItem.hospital}</p>
                </div>
                <div>
                  <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-1">Patient Age</p>
                  <p className="text-sm font-bold text-zinc-700">{selectedItem.patientAge}</p>
                </div>
                <div>
                  <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-1">Patient Name</p>
                  <p className="text-sm font-bold text-zinc-700">{selectedItem.patientName}</p>
                </div>
                <div>
                  <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-1">Reason</p>
                  <p className="text-sm font-bold text-zinc-700">{selectedItem.reason}</p>
                </div>
                <div>
                  <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-1">State</p>
                  <p className="text-sm font-bold text-zinc-700">Tamil Nadu</p>
                </div>
                <div>
                  <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-1">Units Needed</p>
                  <p className="text-sm font-bold text-zinc-700">{selectedItem.unitsNeeded}</p>
                </div>
                <div>
                  <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-1">Units Donated</p>
                  <p className="text-sm font-bold text-zinc-700">0</p>
                </div>
                <div>
                  <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-1">Verified</p>
                  <p className="text-sm font-bold text-zinc-700">{selectedItem.verified}</p>
                </div>
                {selectedItem.emergencyLevel && (
                  <div className="col-span-2 pt-4 border-t border-zinc-50">
                    <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-1">Emergency Level</p>
                    <p className="text-sm font-bold text-zinc-700 uppercase">{selectedItem.emergencyLevel}</p>
                  </div>
                )}
             </div>
             
             <div className="p-8 pt-0 bg-white">
                <button 
                  onClick={() => setShowCreatorInfo(!showCreatorInfo)}
                  className="bg-[#F8F9FA] border border-zinc-200 px-6 py-2.5 rounded-lg font-black text-[10px] uppercase tracking-widest hover:bg-zinc-100 transition-all text-zinc-600 mb-6"
                >
                  {showCreatorInfo ? 'Hide Creator Info' : 'Created By'}
                </button>

                {/* Creator Details - Matching Image 17 style */}
                {showCreatorInfo && (
                  <div className="grid grid-cols-2 gap-y-8 gap-x-12 animate-in slide-in-from-top-4 duration-300">
                    <div>
                      <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-1">Name</p>
                      <p className="text-sm font-bold text-zinc-700">Yokessh</p>
                    </div>
                    <div>
                      <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-1">Email</p>
                      <p className="text-sm font-bold text-zinc-700">rtyokessh.raccbeunique@gmail.com</p>
                    </div>
                    <div>
                      <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-1">Blood Group</p>
                      <p className="text-sm font-bold text-red-600">O+</p>
                    </div>
                    <div>
                      <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-1">Gender</p>
                      <p className="text-sm font-bold text-zinc-700">male</p>
                    </div>
                  </div>
                )}
             </div>
          </div>
        </div>
      )}

      {/* Donor Information Modal - Matching Image 11/15/16/18/19 */}
      {showDonorModal && selectedItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-6 overflow-y-auto">
          <div className="bg-white rounded-lg w-full max-w-2xl shadow-2xl relative animate-in zoom-in duration-200 mt-20 mb-20">
             <div className="p-8 border-b border-zinc-100 flex justify-between items-center bg-zinc-50">
                <h3 className="text-xl font-black uppercase tracking-tight">Donor Information</h3>
                <button onClick={() => setShowDonorModal(false)} className="text-zinc-400 hover:text-black transition-colors">
                  <X size={24} />
                </button>
             </div>
             
             <div className="p-8 bg-[#D9EDF7] border-b border-[#BCE8F1] mx-10 mt-6 rounded-lg text-[#31708F] text-[11px] font-bold">
               Note: Showing 1 donation record(s).
             </div>

             <div className="p-10 space-y-16">
                {/* Donor Block 1 - Matching Image 11/15/18 */}
                <div className="space-y-10">
                   <div className="flex justify-between items-center">
                      <h4 className="text-lg font-black tracking-tighter uppercase italic">Donor #1: Yokessh</h4>
                      <span className="bg-[#FCF8E3] text-[#8A6D3B] px-4 py-1.5 rounded-lg text-[9px] font-black uppercase border border-[#FAEBC4]">Donation Pending</span>
                   </div>
                   
                   <div className="grid grid-cols-2 gap-y-8 gap-x-12">
                      <div>
                        <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-1">Blood Group</p>
                        <p className="text-sm font-bold text-red-600">O+</p>
                      </div>
                      <div>
                        <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-1">Age</p>
                        <p className="text-sm font-bold text-zinc-700">21</p>
                      </div>
                      <div>
                        <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-1">Gender</p>
                        <p className="text-sm font-bold text-zinc-700">Male</p>
                      </div>
                      <div>
                        <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-1">City</p>
                        <p className="text-sm font-bold text-zinc-700">Coimbatore</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-1">Email</p>
                        <p className="text-sm font-bold text-zinc-700">rtyokessh.raccbeunique@gmail.com</p>
                      </div>
                      <div>
                        <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-1">Phone</p>
                        <p className="text-sm font-bold text-zinc-700">9994327463</p>
                      </div>
                      <div>
                        <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-1">Donation Date</p>
                        <p className="text-sm font-bold text-zinc-700">12/12/2025, 20:55:31</p>
                      </div>
                   </div>

                   <div className="mt-10 pt-8 border-t border-zinc-100">
                      <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-6">OTP Status</p>
                      <div className="grid grid-cols-2 gap-12">
                         <div>
                            <p className="text-[9px] font-black text-zinc-400 uppercase mb-1">Requester Pending</p>
                            <p className="text-[9px] font-black text-zinc-400 uppercase mb-3">Requester OTP</p>
                            <p className="text-2xl font-black tracking-tight">634147</p>
                         </div>
                         <div>
                            <p className="text-[9px] font-black text-zinc-400 uppercase mb-1">Donor Pending</p>
                            <p className="text-[9px] font-black text-zinc-400 uppercase mb-3">Donor OTP</p>
                            <p className="text-2xl font-black tracking-tight">204148</p>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Additional Donors Section - Matching Image 18/19 */}
                <div className="pt-10 border-t border-zinc-100">
                   <h4 className="text-lg font-black tracking-tighter uppercase italic mb-8">Donor #2: AMIRTHA VARSHINI R K</h4>
                   <div className="grid grid-cols-2 gap-y-8 gap-x-12 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
                      <div>
                        <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-1">Blood Group</p>
                        <p className="text-sm font-bold text-red-600">A+</p>
                      </div>
                      <div>
                        <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-1">Age</p>
                        <p className="text-sm font-bold text-zinc-700">18</p>
                      </div>
                      <div>
                        <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-1">Email</p>
                        <p className="text-sm font-bold text-zinc-700 truncate">rtamirhavarshini@gmail.com</p>
                      </div>
                      <div className="flex justify-end items-center">
                         <span className="bg-[#FCF8E3] text-[#8A6D3B] px-4 py-1.5 rounded-lg text-[9px] font-black uppercase border border-[#FAEBC4]">Donation Pending</span>
                      </div>
                   </div>
                </div>
                
                <div className="pt-10 border-t border-zinc-100">
                  <h4 className="text-lg font-black tracking-tighter uppercase italic">Donor #3: Santhosh G</h4>
                </div>
             </div>
          </div>
        </div>
      )}

      {/* Emergency Level Modal - Matching Image 3/11/17 */}
      {showEmergencyModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-6">
          <div className="bg-[#F8F9FA] rounded-lg w-full max-w-lg p-12 relative overflow-hidden animate-in zoom-in duration-300 shadow-2xl">
            <button onClick={() => setShowEmergencyModal(false)} className="absolute top-8 right-8 text-zinc-300 hover:text-black transition-colors">
              <X size={24} />
            </button>
            
            <h3 className="text-2xl font-black tracking-tighter uppercase mb-4">Select Emergency Level</h3>
            <p className="text-zinc-500 text-[11px] font-medium mb-10 leading-relaxed">Please select the emergency level for this request before accepting:</p>
            
            <div className="space-y-4 mb-12">
              {[
                { id: 'high', label: 'High Emergency', desc: 'Critical condition, urgent attention needed', iconColor: 'bg-[#C82333]' },
                { id: 'med', label: 'Medium Emergency', desc: 'Requires prompt attention', iconColor: 'bg-[#E0A800]' },
                { id: 'low', label: 'Low Emergency', desc: 'Standard procedure, not time-critical', iconColor: 'bg-[#28A745]' },
              ].map(level => (
                <button 
                  key={level.id} 
                  className="w-full text-left p-6 rounded-lg border border-zinc-200 bg-white transition-all hover:border-red-600 group flex items-start gap-4"
                >
                  <div className={`w-3 h-3 mt-1.5 rounded-full ${level.iconColor} group-hover:scale-125 transition-transform`}></div>
                  <div>
                    <span className="font-black text-[12px] uppercase tracking-widest text-zinc-800">{level.label}</span>
                    <p className="text-[10px] font-bold text-zinc-400 uppercase mt-0.5">{level.desc}</p>
                  </div>
                </button>
              ))}
            </div>

            <div className="flex gap-4">
              <button 
                onClick={() => setShowEmergencyModal(false)} 
                className="flex-1 py-4 rounded-lg font-black text-[10px] uppercase tracking-widest bg-zinc-200 text-zinc-600 hover:bg-zinc-300 transition-colors"
              >
                Cancel
              </button>
              <button className="flex-[2] py-4 rounded-lg font-black text-[10px] uppercase tracking-widest bg-[#6C757D] text-white hover:bg-zinc-700 transition-colors shadow-xl">
                Accept Request
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SuperAdminDashboard;
