
import React, { useState } from 'react';
import StepProgress from '../components/StepProgress';
import { BloodGroup, Gender } from '../types';

const RequireDonorPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const steps = ["Patient Details", "Medical Info", "Contact Details", "Review & Confirm"];

  const [formData, setFormData] = useState({
    patientName: '',
    age: '',
    gender: 'Female',
    reason: '',
    bloodGroup: '',
    anyGroup: false,
    units: '',
    hospital: '',
    attenderName: '',
    attenderMobile: '',
    city: ''
  });

  const nextStep = () => setStep(prev => Math.min(prev + 1, steps.length));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div>
              <label className="block text-[10px] font-black text-red-600 uppercase tracking-[0.3em] mb-2">Patient Name</label>
              <input 
                type="text" 
                placeholder="Enter full name" 
                className="w-full bg-zinc-50 border border-zinc-100 px-6 py-4 rounded-xl font-bold text-sm focus:border-red-600 outline-none transition-all"
                value={formData.patientName}
                onChange={e => setFormData({...formData, patientName: e.target.value})}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em] mb-2">Age</label>
                <input 
                  type="number" 
                  placeholder="30"
                  className="w-full bg-zinc-50 border border-zinc-100 px-6 py-4 rounded-xl font-bold text-sm focus:border-red-600 outline-none transition-all"
                  value={formData.age}
                  onChange={e => setFormData({...formData, age: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em] mb-2">Gender</label>
                <select 
                  className="w-full bg-zinc-50 border border-zinc-100 px-6 py-4 rounded-xl font-bold text-sm focus:border-red-600 outline-none transition-all appearance-none"
                  value={formData.gender}
                  onChange={e => setFormData({...formData, gender: e.target.value})}
                >
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div>
              <label className="block text-[10px] font-black text-red-600 uppercase tracking-[0.3em] mb-2">Reason for Requirement</label>
              <textarea 
                className="w-full bg-zinc-50 border border-zinc-100 px-6 py-4 rounded-xl font-bold text-sm focus:border-red-600 outline-none transition-all h-32 resize-none"
                placeholder="e.g. Surgery, Dialysis, Emergency..."
                value={formData.reason}
                onChange={e => setFormData({...formData, reason: e.target.value})}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em] mb-2">Blood Group</label>
                <select 
                  className="w-full bg-zinc-50 border border-zinc-100 px-6 py-4 rounded-xl font-bold text-sm focus:border-red-600 outline-none transition-all"
                  value={formData.bloodGroup}
                  onChange={e => setFormData({...formData, bloodGroup: e.target.value})}
                >
                  <option value="">Select</option>
                  {Object.values(BloodGroup).map(bg => <option key={bg} value={bg}>{bg}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em] mb-2">Units Required</label>
                <input 
                  type="number" 
                  placeholder="Quantity"
                  className="w-full bg-zinc-50 border border-zinc-100 px-6 py-4 rounded-xl font-bold text-sm focus:border-red-600 outline-none transition-all"
                  value={formData.units}
                  onChange={e => setFormData({...formData, units: e.target.value})}
                />
              </div>
            </div>
            <label className="flex items-center space-x-3 cursor-pointer p-4 bg-zinc-50 rounded-xl border border-dashed border-zinc-200 hover:bg-zinc-100 transition-colors">
              <input 
                type="checkbox" 
                className="w-5 h-5 text-red-600 rounded border-zinc-300 focus:ring-red-600"
                checked={formData.anyGroup}
                onChange={e => setFormData({...formData, anyGroup: e.target.checked})}
              />
              <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">Accept any compatible blood group</span>
            </label>
            <div>
              <label className="block text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em] mb-2">Hospital Name</label>
              <input 
                type="text" 
                placeholder="Enter full hospital address"
                className="w-full bg-zinc-50 border border-zinc-100 px-6 py-4 rounded-xl font-bold text-sm focus:border-red-600 outline-none transition-all"
                value={formData.hospital}
                onChange={e => setFormData({...formData, hospital: e.target.value})}
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div>
              <label className="block text-[10px] font-black text-red-600 uppercase tracking-[0.3em] mb-2">Attender Name</label>
              <input 
                type="text" 
                placeholder="Who will be available at hospital?"
                className="w-full bg-zinc-50 border border-zinc-100 px-6 py-4 rounded-xl font-bold text-sm focus:border-red-600 outline-none transition-all"
                value={formData.attenderName}
                onChange={e => setFormData({...formData, attenderName: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em] mb-2">Attender Mobile</label>
              <input 
                type="tel" 
                placeholder="Primary contact number"
                className="w-full bg-zinc-50 border border-zinc-100 px-6 py-4 rounded-xl font-bold text-sm focus:border-red-600 outline-none transition-all"
                value={formData.attenderMobile}
                onChange={e => setFormData({...formData, attenderMobile: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em] mb-2">City</label>
              <select 
                className="w-full bg-zinc-50 border border-zinc-100 px-6 py-4 rounded-xl font-bold text-sm focus:border-red-600 outline-none transition-all"
                value={formData.city}
                onChange={e => setFormData({...formData, city: e.target.value})}
              >
                <option value="">Select City</option>
                <option value="Chennai">Chennai</option>
                <option value="Coimbatore">Coimbatore</option>
                <option value="Madurai">Madurai</option>
                <option value="Trichy">Trichy</option>
                <option value="Salem">Salem</option>
              </select>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="bg-zinc-950 text-white rounded-3xl p-8 border border-zinc-800 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-3xl"></div>
              <h3 className="text-xs font-black uppercase tracking-[0.4em] mb-8 text-red-600">Request Summary</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                <div className="space-y-1">
                  <p className="text-[9px] font-black text-zinc-500 uppercase tracking-widest">Patient</p>
                  <p className="text-xl font-black italic uppercase tracking-tighter">{formData.patientName}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[9px] font-black text-zinc-500 uppercase tracking-widest">Requirement</p>
                  <p className="text-xl font-black italic uppercase tracking-tighter text-red-600">{formData.bloodGroup} • {formData.units} Units</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[9px] font-black text-zinc-500 uppercase tracking-widest">Attender</p>
                  <p className="text-sm font-bold">{formData.attenderName} ({formData.attenderMobile})</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[9px] font-black text-zinc-500 uppercase tracking-widest">Location</p>
                  <p className="text-sm font-bold">{formData.hospital}, {formData.city}</p>
                </div>
              </div>
            </div>
            <p className="text-[10px] text-zinc-400 font-bold text-center px-10 italic">
              By submitting, you verify that this request is genuine and for emergency medical purposes only.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-red-600 font-black text-[10px] uppercase tracking-[0.5em] mb-4 block">Deployment Protocol</span>
          <h1 className="text-6xl font-black text-black tracking-tighter leading-none uppercase italic mb-12">Request<br />Reinforcements.</h1>
        </div>
        
        <div className="bg-white rounded-[48px] shadow-2xl p-10 md:p-16 border border-zinc-200">
          <StepProgress steps={steps} currentStep={step} />
          <div className="mt-20">{renderStep()}</div>
          
          <div className="flex justify-between mt-16 gap-4">
            <button 
              onClick={prevStep} 
              disabled={step === 1} 
              className="px-10 py-5 border-2 border-black text-black rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-black hover:text-white transition-all disabled:opacity-10"
            >
              Back
            </button>
            <button 
              onClick={step === 4 ? () => {} : nextStep} 
              className="px-12 py-5 bg-red-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-red-700 transition-all shadow-xl flex-grow md:flex-grow-0"
            >
              {step === 4 ? 'Submit Dispatch' : 'Continue'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequireDonorPage;
