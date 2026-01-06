
import React, { useState } from 'react';
import { 
  Search, 
  RotateCcw, 
  ChevronLeft, 
  ChevronRight, 
  ChevronDown,
  Eye,
  Edit2,
  Trash2,
  X
} from 'lucide-react';

const AdminDonors: React.FC = () => {
  // Filter States
  const [donorSearch, setDonorSearch] = useState('');
  const [genderFilter, setGenderFilter] = useState<'All' | 'Male' | 'Female'>('All');
  const [bloodFilter, setBloodFilter] = useState<string>('All');
  const [cityFilter, setCityFilter] = useState('All Cities');

  // Modal States
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedDonor, setSelectedDonor] = useState<any>(null);

  const bloodGroups = ['All', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  const cities = ['All Cities', 'Chennai', 'Coimbatore', 'Madurai', 'Erode', 'Salem', 'Trichy', 'Tirunelveli'];

  const stats = [
    { label: 'Total Donors', value: '146', color: 'border-red-600', active: true },
    { label: 'Available Donors', value: '146', desc: 'Eligible to donate now', color: 'border-green-600' },
    { label: 'Unavailable Donors', value: '0', desc: 'Recently donated (within 90 days)', color: 'border-yellow-500' },
  ];

  const mockDonors = [
    { 
      name: 'Krishna prakash s', 
      group: 'AB+', 
      mobile: '8838725828',
      email: 'krishna.s@gmail.com',
      gender: 'Male',
      age: '24',
      dob: '12/05/2001',
      residentCity: 'Coimbatore',
      permanentCity: 'Coimbatore',
      lastDonated: 'N/A'
    },
    { 
      name: 'Kalpana R', 
      group: 'O-', 
      mobile: '7639307312',
      email: 'kalpana.r@outlook.com',
      gender: 'Female',
      age: '28',
      dob: '05/09/1997',
      residentCity: 'Chennai',
      permanentCity: 'Erode',
      lastDonated: '15/08/2025'
    },
    { name: 'Ananthan P S', group: 'B+', mobile: '8124882153', email: 'ananthan.ps@gmail.com', gender: 'Male', age: '30', residentCity: 'Madurai' },
    { name: 'Namashivayam S', group: 'B+', mobile: '9600619980', email: 'nama.s@gmail.com', gender: 'Male', age: '45', residentCity: 'Coimbatore' },
    { name: 'Vidhya', group: 'AB+', mobile: '9363752907', email: 'vidhya.v@gmail.com', gender: 'Female', age: '22', residentCity: 'Salem' },
  ];

  // COMPUTED FILTERED LIST
  const filteredDonors = mockDonors.filter(donor => {
    const matchesSearch = donor.name.toLowerCase().includes(donorSearch.toLowerCase()) || donor.mobile.includes(donorSearch);
    const matchesBlood = bloodFilter === 'All' || donor.group === bloodFilter;
    const matchesGender = genderFilter === 'All' || donor.gender === genderFilter;
    const matchesCity = cityFilter === 'All Cities' || donor.residentCity === cityFilter;
    return matchesSearch && matchesBlood && matchesGender && matchesCity;
  });

  const handleView = (donor: any) => {
    setSelectedDonor(donor);
    setShowViewModal(true);
  };

  const handleEdit = (donor: any) => {
    setSelectedDonor(donor);
    setShowEditModal(true);
  };

  const resetFilters = () => {
    setDonorSearch('');
    setGenderFilter('All');
    setBloodFilter('All');
    setCityFilter('All Cities');
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20">
      {/* Donor Statistics */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className={`bg-white border-2 border-zinc-50 p-8 rounded-2xl shadow-sm border-l-4 ${stat.color}`}>
            <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-4">{stat.label}</p>
            <div className="text-4xl font-black text-zinc-800 tracking-tighter mb-1">{stat.value}</div>
            {stat.desc && <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">{stat.desc}</p>}
          </div>
        ))}
      </section>

      {/* Filter Module */}
      <section className="bg-white border border-zinc-200 rounded-[32px] p-10 shadow-sm space-y-10">
        <div className="flex items-center justify-between border-b border-zinc-100 pb-6">
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-zinc-800">Donor Filters</h3>
          <button onClick={resetFilters} className="flex items-center gap-2 text-[10px] font-black uppercase text-zinc-400 hover:text-red-600 transition-all">
            <RotateCcw size={14} /> Reset Filters
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10">
          <div className="space-y-8">
            <div>
              <label className="block text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-4">Search Name/Mobile</label>
              <div className="relative group">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-300 group-focus-within:text-red-600 transition-colors" size={18} />
                <input 
                  type="text" 
                  placeholder="Search..." 
                  value={donorSearch}
                  onChange={(e) => setDonorSearch(e.target.value)}
                  className="w-full bg-zinc-50 border border-zinc-100 pl-14 pr-6 py-4 rounded-xl font-bold text-sm focus:border-red-600 outline-none transition-all shadow-inner"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-4">Blood Group</label>
              <div className="flex flex-wrap gap-2">
                {bloodGroups.map(bg => (
                  <button 
                    key={bg}
                    onClick={() => setBloodFilter(bg)}
                    className={`min-w-[48px] h-12 rounded-lg font-black text-[10px] uppercase tracking-widest transition-all border ${
                      bloodFilter === bg ? 'bg-red-800 text-white border-red-800 shadow-md' : 'bg-zinc-50 text-zinc-400 border-zinc-100'
                    }`}
                  >
                    {bg}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <label className="block text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-4">Gender</label>
              <div className="flex gap-2">
                {['All', 'Male', 'Female'].map(gender => (
                  <button 
                    key={gender}
                    onClick={() => setGenderFilter(gender as any)}
                    className={`flex-1 py-4 rounded-lg font-black text-[10px] uppercase tracking-widest transition-all border ${
                      genderFilter === gender ? 'bg-red-800 text-white border-red-800 shadow-md' : 'bg-zinc-50 text-zinc-400 border-zinc-100'
                    }`}
                  >
                    {gender}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-4">City</label>
              <div className="relative">
                <select 
                  value={cityFilter}
                  onChange={(e) => setCityFilter(e.target.value)}
                  className="w-full bg-zinc-50 border border-zinc-200 px-6 py-4 rounded-xl font-bold text-sm focus:border-red-600 outline-none appearance-none cursor-pointer"
                >
                  {cities.map(city => <option key={city} value={city}>{city}</option>)}
                </select>
                <ChevronDown size={18} className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Table */}
      <section className="bg-white rounded-[32px] border border-zinc-200 shadow-sm overflow-hidden min-h-[400px]">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-zinc-50/50 border-b border-zinc-200">
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400">Profile</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400">Name</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400">Blood Group</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400">Resident City</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredDonors.map((donor, idx) => (
              <tr key={idx} className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                <td className="px-8 py-6">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-800 font-black text-[10px]">
                    {donor.name[0].toUpperCase()}
                  </div>
                </td>
                <td className="px-8 py-6 font-bold text-sm text-zinc-700 capitalize">{donor.name}</td>
                <td className="px-8 py-6 font-black text-sm text-red-800">{donor.group}</td>
                <td className="px-8 py-6 text-zinc-500 text-sm font-medium">{donor.residentCity}</td>
                <td className="px-8 py-6">
                  <div className="flex items-center justify-center gap-2">
                    <button onClick={() => handleView(donor)} className="bg-blue-600 text-white px-5 py-2 rounded text-[10px] font-black uppercase">View</button>
                    <button onClick={() => handleEdit(donor)} className="bg-yellow-500 text-zinc-900 px-5 py-2 rounded text-[10px] font-black uppercase">Edit</button>
                    <button className="bg-red-600 text-white px-5 py-2 rounded text-[10px] font-black uppercase">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredDonors.length === 0 && (
          <div className="py-24 text-center opacity-30 italic font-black uppercase tracking-widest text-[10px]">No Donors Match Filters</div>
        )}
      </section>

      {/* View Modal */}
      {showViewModal && selectedDonor && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-6 overflow-y-auto">
          <div className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl relative animate-in zoom-in duration-200 p-12">
             <div className="flex justify-between items-center mb-10">
                <h3 className="text-xl font-black text-zinc-800 uppercase italic">DONOR PROFILE</h3>
                <button onClick={() => setShowViewModal(false)} className="text-zinc-400 hover:text-black transition-colors"><X size={24} /></button>
             </div>
             <div className="grid grid-cols-2 gap-y-8 gap-x-12">
                <DetailItem label="Full Name" value={selectedDonor.name} />
                <DetailItem label="Blood Group" value={selectedDonor.group} isRed />
                <DetailItem label="Email" value={selectedDonor.email} />
                <DetailItem label="Mobile" value={selectedDonor.mobile} />
                <DetailItem label="City" value={selectedDonor.residentCity} />
                <DetailItem label="Age" value={selectedDonor.age} />
             </div>
             <button onClick={() => setShowViewModal(false)} className="w-full bg-zinc-900 text-white py-5 rounded-2xl mt-12 font-black text-[10px] uppercase tracking-widest">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

const DetailItem = ({ label, value, isRed = false }: any) => (
  <div>
    <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1.5">{label}</p>
    <p className={`text-sm font-bold ${isRed ? 'text-red-600' : 'text-zinc-800'}`}>{value}</p>
  </div>
);

export default AdminDonors;
