
import React, { useState } from 'react';
import StepProgress from '../components/StepProgress';

const HostCampPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const steps = ["Organizer Details", "Camp Details", "Review & Confirm"];

  const [formData, setFormData] = useState({
    orgType: '',
    orgName: '',
    organizerName: '',
    mobile: '',
    email: '',
    campName: '',
    location: '',
    state: 'Tamil Nadu',
    city: '',
    country: 'India',
    start: '',
    end: ''
  });

  const nextStep = () => setStep(prev => Math.min(prev + 1, steps.length));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-red-900 mb-1">Organization Type</label>
              <select className="w-full px-4 py-2 border border-gray-200 rounded-lg">
                <option>Select organization type</option>
                <option>Rotary Club</option>
                <option>College / University</option>
                <option>Corporate Office</option>
                <option>NGO</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-red-900 mb-1">Organization Name</label>
              <input type="text" placeholder="Enter organization name" className="w-full px-4 py-2 border border-gray-200 rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-red-900 mb-1">Organizer Name</label>
              <input type="text" placeholder="Enter organizer name" className="w-full px-4 py-2 border border-gray-200 rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-red-900 mb-1">Organizer Mobile</label>
              <input type="tel" placeholder="Enter organizer mobile number" className="w-full px-4 py-2 border border-gray-200 rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-red-900 mb-1">Organizer Email</label>
              <input type="email" placeholder="Enter organizer email" className="w-full px-4 py-2 border border-gray-200 rounded-lg" />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-red-900 mb-1">Camp Name</label>
              <input type="text" placeholder="Enter camp name" className="w-full px-4 py-2 border border-gray-200 rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-red-900 mb-1">Camp Location</label>
              <input type="text" placeholder="Enter camp venue address" className="w-full px-4 py-2 border border-gray-200 rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-red-900 mb-1">Camp State</label>
              <select className="w-full px-4 py-2 border border-gray-200 rounded-lg">
                <option>Tamil Nadu</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-red-900 mb-1">Camp City</label>
              <input type="text" placeholder="Enter city" className="w-full px-4 py-2 border border-gray-200 rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-red-900 mb-1">Camp Start (Date & Time)</label>
              <input type="datetime-local" className="w-full px-4 py-2 border border-gray-200 rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-red-900 mb-1">Camp End (Date & Time)</label>
              <input type="datetime-local" className="w-full px-4 py-2 border border-gray-200 rounded-lg" />
            </div>
          </div>
        );
      default:
        return <div className="p-10 text-center">Confirm all details and submit.</div>;
    }
  };

  return (
    <div className="min-h-screen bg-red-50/10 py-12 px-4">
      <h1 className="text-4xl font-black text-red-800 text-center mb-12 uppercase tracking-tight">Host a Blood Camp</h1>
      
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-8 border border-red-100">
        <StepProgress steps={steps} currentStep={step} />
        <div className="mt-16">{renderStep()}</div>
        <div className="flex justify-between mt-12">
          <button onClick={prevStep} disabled={step === 1} className="px-8 py-2 border-2 border-red-600 text-red-600 rounded-lg font-bold disabled:opacity-30">Previous</button>
          <button onClick={step === 3 ? () => {} : nextStep} className="px-8 py-2 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700 transition-all">
            {step === 3 ? 'Register Camp' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HostCampPage;
