
import React, { useState } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight,
  Loader2,
  AlertTriangle,
  Heart,
  Activity,
  User,
  ShieldAlert,
  Clock,
  CheckCircle2,
  MapPin,
  Phone,
  AlertCircle,
  Download
} from 'lucide-react';

interface AdminRequest {
  id: string;
  patientName: string;
  bloodGroup: string;
  hospital: string;
  status: string;
  attenderName?: string;
  attenderMobile?: string;
  city?: string;
  country?: string;
  gender?: string;
  patientAge?: string;
  reason?: string;
  unitsNeeded?: string;
  unitsDonated?: string;
  verified?: string;
  emergencyLevel?: string;
  state?: string;
  creator?: {
    name: string;
    email: string;
    bloodGroup: string;
    gender: string;
  };
}

const SuperAdminRequests: React.FC = () => {
  const [requestFilter, setRequestFilter] = useState<'Current' | 'Ongoing' | 'Completed' | 'Rejected' | 'All'>('Current');
  const [selectedEmergencyLevel, setSelectedEmergencyLevel] = useState<string | null>(null);
  
  const [requests, setRequests] = useState<AdminRequest[]>([
    { 
      id: 'REQ-CUR01', patientName: 'J Murali', bloodGroup: 'B-', hospital: 'Erode Medical Centre, Erode', 
      status: 'Current', attenderName: 'Kamal', attenderMobile: '9523842352', city: 'Erode',
      country: 'India', gender: 'male', patientAge: '40', reason: 'Emergency Surgery', unitsNeeded: '2',
      verified: 'received'
    },
    { 
      id: 'REQ-CUR02', patientName: 'bibdi', bloodGroup: 'O+', hospital: 'DFDFD', 
      status: 'Current', attenderName: 'DFDFDG', attenderMobile: '9876543210', city: 'Dharmapuri',
      country: 'India', gender: 'female', patientAge: '18', reason: 'DHAHAA ADADASD', unitsNeeded: '10',
      verified: 'received'
    },
    { id: 'REQ-ONG01', patientName: 'Senthil Kumar P', bloodGroup: 'B+', hospital: 'KMCH', status: 'Ongoing', city: 'Coimbatore', attenderName: 'Vinith', attenderMobile: '8015633350', emergencyLevel: 'High' },
    { id: 'REQ-ONG02', patientName: 'Krishnaveni V', bloodGroup: 'A+', hospital: 'G Kuppuswamy Naidu Memorial Hospital', status: 'Ongoing', emergencyLevel: 'Medium' },
    { id: 'REQ-ONG03', patientName: 'Lakshmi', bloodGroup: 'O-', hospital: 'Kmch', status: 'Ongoing', emergencyLevel: 'High' },
    { id: 'REQ-C01', patientName: 'GANESAN', bloodGroup: 'A+', hospital: 'KMCH, Chitra, CBE.', status: 'Completed', attenderName: 'KAVITHA', attenderMobile: '9500488606', city: 'Coimbatore', patientAge: '50', gender: 'male', reason: 'Thrombocytopenia', unitsNeeded: '3', unitsDonated: '3', verified: 'completed', emergencyLevel: 'High' },
    { id: 'REQ-R01', patientName: 'Rishi', bloodGroup: 'A+', hospital: 'Govt hospital', status: 'Rejected', attenderName: 'Kamal', attenderMobile: '9523842352', city: 'Coimbatore', patientAge: '40', gender: 'male', reason: 'Road Accident on cbe', unitsNeeded: '2', verified: 'rejected', state: 'Tamil Nadu', creator: { name: 'Tharun', email: 'tharun.off06@gmail.com', bloodGroup: 'A+', gender: 'male' } },
  ]);

  const [showEmergencyModal, setShowEmergencyModal] = useState(false);
  const [showRequestDetailsModal, setShowRequestDetailsModal] = useState(false);
  const [showDonorInfoModal, setShowDonorInfoModal] = useState(false);
  const [showCreatorInfo, setShowCreatorInfo] = useState(false);
  const [selectedItem, setSelectedItem] = useState<AdminRequest | null>(null);
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const filteredRequests = requests.filter(req => 
    requestFilter === 'All' ? true : req.status === requestFilter
  );

  const handleExportCSV = () => {
    const headers = ['ID', 'Patient Name', 'Blood Group', 'Hospital', 'City', 'Status', 'Units Needed', 'Emergency Level', 'Attender Mobile'];
    const csvRows = [headers.join(',')];

    filteredRequests.forEach(req => {
      const row = [
        req.id,
        `"${req.patientName}"`,
        req.bloodGroup,
        `"${req.hospital}"`,
        `"${req.city || 'N/A'}"`,
        req.status,
        req.unitsNeeded || '0',
        req.emergencyLevel || 'None',
        req.attenderMobile || 'N/A'
      ];
      csvRows.push(row.join(','));
    });

    const csvString = csvRows.join('\n');
    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `Saviour_Blood_Requests_${requestFilter}_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const updateRequestStatus = (id: string, newStatus: string) => {
    setRequests(prev => prev.map(req => 
      req.id === id ? { ...req, status: newStatus } : req
    ));
  };

  const handleAction = (type: string, item: AdminRequest) => {
    setSelectedItem(item);
    if (type === 'donors') {
      setLoadingId(item.id);
      setTimeout(() => {
        const donors = item.status === 'Completed' ? [
          {
            name: 'Antro Ashik', bloodGroup: 'B+', age: '23', gender: 'Male', city: 'Tirunelveli',
            email: 'antroantro48@gmail.com', phone: '7339039663', donationDate: '31/07/2025, 11:38:49',
            status: 'Donation Complete'
          }
        ] : [
          {
            name: 'Yokessh', bloodGroup: 'O+', age: '21', gender: 'Male', city: 'Coimbatore',
            email: 'rtryokessh.raccbeunique@gmail.com', phone: '9994327463', donationDate: '12/12/2025, 20:55:31',
            status: 'Donation Pending'
          }
        ];
        setSelectedItem({ ...item, donors } as any);
        setShowDonorInfoModal(true);
        setLoadingId(null);
      }, 500);
    } else if (type === 'details') {
      setShowCreatorInfo(false);
      setShowRequestDetailsModal(true);
    } else if (type === 'emergency') {
      setSelectedEmergencyLevel(null);
      setShowEmergencyModal(true);
    }
  };

  const handleConfirmEmergency = () => {
    if (selectedItem && selectedEmergencyLevel) {
      setRequests(prev => prev.map(req => 
        req.id === selectedItem.id 
          ? { ...req, status: 'Ongoing', emergencyLevel: selectedEmergencyLevel } 
          : req
      ));
      setShowEmergencyModal(false);
    }
  };

  const emergencyOptions = [
    { level: 'High', desc: 'Critical condition, urgent attention needed', color: 'bg-red-600' },
    { level: 'Medium', desc: 'Requires prompt attention', color: 'bg-orange-500' },
    { level: 'Low', desc: 'Standard procedure, not time-critical', color: 'bg-yellow-500' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex flex-wrap gap-2">
          {['Current', 'Ongoing', 'Completed', 'Rejected', 'All'].map(filter => (
            <button 
              key={filter} 
              onClick={() => setRequestFilter(filter as any)}
              className={`px-6 py-2 rounded-lg font-black text-[10px] uppercase tracking-widest transition-all ${
                requestFilter === filter ? 'bg-red-800 text-white shadow-lg' : 'bg-zinc-200 text-zinc-500 hover:bg-zinc-300'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <button 
          onClick={handleExportCSV}
          className="flex items-center justify-center gap-3 bg-white border border-zinc-200 px-8 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-widest text-zinc-600 hover:bg-zinc-50 transition-all shadow-sm group"
        >
          <Download size={14} className="group-hover:translate-y-0.5 transition-transform" />
          Download CSV Report
        </button>
      </div>

      <div className="bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden min-h-[400px]">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-zinc-50/50 border-b border-zinc-200">
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
                <td className="px-8 py-6 text-zinc-500 text-[11px] font-bold uppercase max-w-[300px] truncate">{req.hospital}</td>
                <td className="px-8 py-6">
                  <div className="flex items-center justify-center gap-2">
                    {req.status === 'Current' && (
                      <>
                        <button onClick={() => handleAction('emergency', req)} className="bg-green-600 text-white px-5 py-2 rounded text-[10px] font-black uppercase shadow-sm hover:bg-green-700 transition-colors">Accept</button>
                        <button onClick={() => updateRequestStatus(req.id, 'Rejected')} className="bg-red-600 text-white px-5 py-2 rounded text-[10px] font-black uppercase shadow-sm hover:bg-red-700 transition-colors">Reject</button>
                        <button onClick={() => handleAction('details', req)} className="bg-blue-600 text-white px-5 py-2 rounded text-[10px] font-black uppercase shadow-sm hover:bg-blue-700 transition-colors">More</button>
                      </>
                    )}
                    {req.status === 'Ongoing' && (
                      <>
                        <button onClick={() => handleAction('details', req)} className="bg-blue-600 text-white px-4 py-2 rounded text-[10px] font-black uppercase shadow-sm hover:bg-blue-700">More</button>
                        <button onClick={() => handleAction('donors', req)} className="bg-purple-600 text-white px-4 py-2 rounded text-[10px] font-black uppercase shadow-sm flex items-center gap-2">
                          {loadingId === req.id ? <Loader2 size={12} className="animate-spin" /> : 'Donors'}
                        </button>
                        <button onClick={() => updateRequestStatus(req.id, 'Completed')} className="bg-green-600 text-white px-4 py-2 rounded text-[10px] font-black uppercase">Complete</button>
                      </>
                    )}
                    {(req.status === 'Completed' || req.status === 'Rejected') && (
                      <button onClick={() => handleAction('details', req)} className="bg-blue-600 text-white px-8 py-2 rounded text-[10px] font-black uppercase">More Details</button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredRequests.length === 0 && (
          <div className="py-32 text-center opacity-20 flex flex-col items-center">
            <AlertTriangle size={64} className="mb-4" />
            <p className="font-black uppercase tracking-[0.4em] text-[12px]">Deployment Queue Clear</p>
          </div>
        )}
      </div>

      {/* High-Fidelity Request Details Modal */}
      {showRequestDetailsModal && selectedItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-[2px] p-6 overflow-y-auto">
          <div className="bg-[#F8F9FA] rounded-2xl w-full max-w-2xl shadow-2xl relative animate-in zoom-in duration-200 my-10 border border-zinc-200 flex flex-col max-h-[90vh]">
             <div className="p-10 flex justify-between items-center border-b border-zinc-200 bg-white sticky top-0 z-10 rounded-t-2xl">
                <h3 className="text-xl font-black text-zinc-800 tracking-tight uppercase italic">Request Details</h3>
                <button onClick={() => setShowRequestDetailsModal(false)} className="text-zinc-400 hover:text-black transition-colors">
                  <X size={24} className="border-2 border-zinc-100 rounded" />
                </button>
             </div>
             
             <div className="p-12 space-y-12 overflow-y-auto flex-grow bg-white">
                <div className="grid grid-cols-2 gap-y-10 gap-x-12">
                   <DetailItem label="Attender Mobile" value={selectedItem.attenderMobile || 'N/A'} />
                   <DetailItem label="Attender Name" value={selectedItem.attenderName || 'N/A'} />
                   <DetailItem label="Blood Group" value={selectedItem.bloodGroup || 'N/A'} isBlood />
                   <DetailItem label="City" value={selectedItem.city || 'N/A'} />
                   <DetailItem label="Country" value={selectedItem.country || 'India'} />
                   <DetailItem label="Gender" value={selectedItem.gender || 'male'} />
                   <DetailItem label="Hospital" value={selectedItem.hospital} />
                   <DetailItem label="Patient Age" value={selectedItem.patientAge || 'N/A'} />
                   <DetailItem label="Patient Name" value={selectedItem.patientName} />
                   <DetailItem label="Reason" value={selectedItem.reason || 'N/A'} />
                   <DetailItem label="State" value={selectedItem.state || 'Tamil Nadu'} />
                   <DetailItem label="Units Needed" value={selectedItem.unitsNeeded || '0'} />
                   <DetailItem label="Units Donated" value={selectedItem.unitsDonated || '0'} />
                   <DetailItem label="Verified" value={selectedItem.verified || 'received'} />
                   <DetailItem label="Emergency Level" value={selectedItem.emergencyLevel || 'Not Set'} isEmergency />
                </div>

                <div className="pt-12 border-t border-zinc-100">
                   <button 
                     onClick={() => setShowCreatorInfo(!showCreatorInfo)}
                     className="bg-[#F8F9FA] border border-zinc-200 text-zinc-500 px-8 py-3.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-zinc-100 transition-all mb-10 shadow-sm"
                   >
                     {showCreatorInfo ? 'Hide Creator Info' : 'Created By'}
                   </button>

                   {showCreatorInfo && (selectedItem.creator ? (
                     <div className="grid grid-cols-2 gap-y-10 gap-x-12 animate-in fade-in slide-in-from-top-2">
                        <DetailItem label="Name" value={selectedItem.creator.name} />
                        <DetailItem label="Email" value={selectedItem.creator.email} />
                        <DetailItem label="Blood Group" value={selectedItem.creator.bloodGroup} isBlood />
                        <DetailItem label="Gender" value={selectedItem.creator.gender} />
                     </div>
                   ) : (
                     <p className="text-[10px] font-black text-zinc-300 uppercase italic px-4">System Record: Primary Node Origin</p>
                   ))}
                </div>
             </div>
             
             <div className="p-8 bg-zinc-50 rounded-b-2xl border-t border-zinc-100 flex justify-end">
               <button 
                 onClick={() => setShowRequestDetailsModal(false)}
                 className="bg-zinc-900 text-white px-10 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-zinc-800"
               >
                 Close Detail View
               </button>
             </div>
          </div>
        </div>
      )}

      {/* Improved Emergency Level Modal (Matching Image 5) */}
      {showEmergencyModal && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center bg-black/60 backdrop-blur-sm p-6">
          <div className="bg-[#F8F9FA] rounded-[32px] w-full max-w-lg p-12 relative animate-in zoom-in duration-200 shadow-2xl border border-zinc-200">
            <button onClick={() => setShowEmergencyModal(false)} className="absolute top-8 right-8 text-zinc-400 hover:text-black">
              <X size={20} />
            </button>
            
            <div className="mb-10">
              <h3 className="text-2xl font-black text-zinc-800 mb-2 tracking-tight uppercase italic">Select Emergency Level</h3>
              <p className="text-xs font-bold text-zinc-400 leading-relaxed uppercase tracking-wider">
                Please select the emergency level for this request before accepting:
              </p>
            </div>

            <div className="space-y-4 mb-12">
              {emergencyOptions.map(opt => (
                <button 
                  key={opt.level} 
                  onClick={() => setSelectedEmergencyLevel(opt.level)}
                  className={`w-full text-left p-6 rounded-2xl border-2 transition-all flex items-center gap-6 group relative overflow-hidden ${
                    selectedEmergencyLevel === opt.level 
                      ? 'bg-white border-red-600 shadow-[0_15px_30px_rgba(220,38,38,0.15)] scale-[1.02]' 
                      : 'bg-white border-zinc-100 hover:border-zinc-200'
                  }`}
                >
                  {selectedEmergencyLevel === opt.level && (
                    <div className="absolute top-0 right-0 p-2 text-red-600">
                      <CheckCircle2 size={16} />
                    </div>
                  )}
                  <div className={`w-3 h-3 rounded-full ${opt.color} flex-shrink-0 shadow-sm shadow-black/20 animate-pulse`}></div>
                  <div>
                    <span className="font-black text-[11px] uppercase tracking-[0.2em] text-zinc-900 block mb-1">{opt.level} Emergency</span>
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{opt.desc}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="flex gap-4">
              <button 
                onClick={() => setShowEmergencyModal(false)} 
                className="flex-1 border-2 border-zinc-200 text-zinc-400 py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-zinc-50 transition-all"
              >
                Cancel
              </button>
              <button 
                onClick={handleConfirmEmergency}
                disabled={!selectedEmergencyLevel}
                className={`flex-1 py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all shadow-xl ${
                  selectedEmergencyLevel 
                    ? 'bg-zinc-900 text-white hover:bg-black active:scale-95' 
                    : 'bg-zinc-200 text-zinc-400 cursor-not-allowed shadow-none'
                }`}
              >
                Accept Request
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Donor Information Modal */}
      {showDonorInfoModal && selectedItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-[2px] p-6">
          <div className="bg-white rounded-2xl w-full max-w-3xl shadow-2xl relative animate-in zoom-in duration-200 p-10 max-h-[85vh] overflow-hidden flex flex-col border border-zinc-200">
             <div className="flex justify-between items-center mb-10 pb-6 border-b border-zinc-100">
                <h3 className="text-xl font-black text-zinc-800 tracking-tight uppercase italic">Donor Network Activity</h3>
                <button onClick={() => setShowDonorInfoModal(false)} className="text-zinc-300 hover:text-black transition-colors"><X size={24} /></button>
             </div>
             <div className="overflow-y-auto space-y-6 flex-grow pr-4">
                {(selectedItem as any).donors?.length > 0 ? (selectedItem as any).donors.map((donor: any, idx: number) => (
                  <div key={idx} className="bg-zinc-50 border border-zinc-100 rounded-2xl p-8 relative overflow-hidden group hover:border-red-600 transition-colors">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white rounded-xl border border-zinc-100 flex items-center justify-center font-black text-red-600">
                           {donor.bloodGroup}
                        </div>
                        <div>
                          <h4 className="font-black text-zinc-800 uppercase italic">{donor.name}</h4>
                          <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">{donor.city}</p>
                        </div>
                      </div>
                      <span className="px-4 py-1.5 bg-[#FFF3CD] text-[#856404] rounded-lg text-[9px] font-black uppercase tracking-widest border border-[#FFEEBA]">
                        {donor.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-6">
                       <div><p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-1">Mobile</p><p className="text-xs font-bold text-zinc-700">{donor.phone}</p></div>
                       <div><p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-1">Email</p><p className="text-xs font-bold text-zinc-700 truncate">{donor.email}</p></div>
                       <div><p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-1">Age / Sex</p><p className="text-xs font-bold text-zinc-700">{donor.age} / {donor.gender}</p></div>
                    </div>
                  </div>
                )) : (
                  <div className="py-24 text-center">
                    <Users className="mx-auto text-zinc-200 mb-6" size={48} />
                    <p className="text-[11px] font-black text-zinc-300 uppercase tracking-[0.4em]">Awaiting Hero Response</p>
                  </div>
                )}
             </div>
             <button onClick={() => setShowDonorInfoModal(false)} className="w-full bg-zinc-950 text-white py-4 rounded-xl mt-10 font-black text-[10px] uppercase tracking-widest">Close Dashboard</button>
          </div>
        </div>
      )}
    </div>
  );
};

// Reusable Detail Item matching high-fidelity layout
const DetailItem = ({ label, value, isBlood = false, isEmergency = false }: { label: string, value: string, isBlood?: boolean, isEmergency?: boolean }) => (
  <div className="flex flex-col">
    <p className="text-[11px] font-bold text-[#A3A6AF] uppercase tracking-widest mb-2 leading-none">{label}</p>
    <p className={`text-[15px] font-black tracking-tight leading-tight break-words uppercase ${isBlood || isEmergency ? 'text-red-600' : 'text-[#212529]'}`}>
      {isEmergency && value !== 'Not Set' && <Activity size={12} className="inline mr-2 animate-pulse" />}
      {value}
    </p>
  </div>
);

const Users = ({ className, size }: any) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export default SuperAdminRequests;
