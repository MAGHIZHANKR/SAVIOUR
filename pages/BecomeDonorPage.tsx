
import React, { useState } from 'react';
import StepProgress from '../components/StepProgress';
import { BloodGroup, Gender } from '../types';

const BecomeDonorPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const steps = ["Personal Details", "Contact Info", "City Info", "Confirmation"];

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    dob: '',
    gender: '',
    bloodGroup: '',
    email: '',
    mobile: '',
    whatsapp: '',
    country: 'India',
    state: 'Tamil Nadu',
    permanentCity: '',
    residentCity: '',
    terms: false
  });

  const nextStep = () => setStep(prev => Math.min(prev + 1, steps.length));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-red-900 mb-1">Name</label>
              <input 
                type="text" 
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-red-900 mb-1">Age</label>
              <input 
                type="number" 
                placeholder="Enter your age"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                value={formData.age}
                onChange={e => setFormData({...formData, age: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-red-900 mb-1">Date of Birth</label>
              <input 
                type="date" 
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                value={formData.dob}
                onChange={e => setFormData({...formData, dob: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-red-900 mb-1">Gender</label>
              <select 
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                value={formData.gender}
                onChange={e => setFormData({...formData, gender: e.target.value})}
              >
                <option value="">Select gender</option>
                {Object.values(Gender).map(g => <option key={g} value={g}>{g}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-red-900 mb-1">Blood Group</label>
              <select 
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                value={formData.bloodGroup}
                onChange={e => setFormData({...formData, bloodGroup: e.target.value})}
              >
                <option value="">Select blood group</option>
                {Object.values(BloodGroup).map(bg => <option key={bg} value={bg}>{bg}</option>)}
              </select>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-red-900 mb-1">Email</label>
              <input 
                type="email" 
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-red-900 mb-1">Mobile</label>
              <input 
                type="tel" 
                placeholder="Enter your mobile"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                value={formData.mobile}
                onChange={e => setFormData({...formData, mobile: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-red-900 mb-1">Whatsapp</label>
              <input 
                type="tel" 
                placeholder="Enter your whatsapp"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                value={formData.whatsapp}
                onChange={e => setFormData({...formData, whatsapp: e.target.value})}
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-red-900 mb-1">Country</label>
              <select 
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                value={formData.country}
                onChange={e => setFormData({...formData, country: e.target.value})}
              >
                <option value="India">India</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-red-900 mb-1">State</label>
              <input 
                type="text" 
                className="w-full px-4 py-2 border border-gray-200 bg-gray-50 rounded-lg"
                value={formData.state}
                disabled
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-red-900 mb-1">Permanent City</label>
              <select 
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                value={formData.permanentCity}
                onChange={e => setFormData({...formData, permanentCity: e.target.value})}
              >
                <option value="">Select your permanent city</option>
                <option value="Chennai">Chennai</option>
                <option value="Coimbatore">Coimbatore</option>
                <option value="Madurai">Madurai</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-red-900 mb-1">Resident City</label>
              <select 
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                value={formData.residentCity}
                onChange={e => setFormData({...formData, residentCity: e.target.value})}
              >
                <option value="">Select your resident city</option>
                <option value="Chennai">Chennai</option>
                <option value="Coimbatore">Coimbatore</option>
                <option value="Madurai">Madurai</option>
              </select>
            </div>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500" />
              <span className="text-sm text-gray-700">Same as permanent city</span>
            </label>
          </div>
        );
      case 4:
        return (
          <div className="flex flex-col items-center">
            <div className="bg-red-50 p-8 rounded-2xl w-full mb-6">
              <h4 className="font-bold text-red-800 mb-4 text-center">Review your details</h4>
              <div className="grid grid-cols-2 gap-y-2 text-sm">
                <span className="text-gray-500">Name:</span> <span className="font-medium text-gray-900">{formData.name || 'Not provided'}</span>
                <span className="text-gray-500">Blood Group:</span> <span className="font-bold text-red-600">{formData.bloodGroup || 'Not selected'}</span>
                <span className="text-gray-500">Age:</span> <span className="font-medium text-gray-900">{formData.age}</span>
                <span className="text-gray-500">Mobile:</span> <span className="font-medium text-gray-900">{formData.mobile}</span>
              </div>
            </div>
            <label className="flex items-center space-x-2 cursor-pointer mb-8">
              <input 
                type="checkbox" 
                checked={formData.terms}
                onChange={e => setFormData({...formData, terms: e.target.checked})}
                className="w-5 h-5 text-red-600 border-gray-300 rounded focus:ring-red-500" 
              />
              <span className="text-sm text-gray-700">I accept the terms and conditions</span>
            </label>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-red-50/30 py-12 px-4">
      <h1 className="text-4xl font-black text-red-800 text-center mb-12 uppercase tracking-tight">Become a Blood Donor</h1>
      
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-red-100">
        <StepProgress steps={steps} currentStep={step} />
        
        <div className="mt-16">
          {renderStep()}
        </div>

        <div className="flex justify-between mt-12">
          <button 
            onClick={prevStep}
            disabled={step === 1}
            className={`px-8 py-2 rounded-lg font-bold border-2 transition-all ${
              step === 1 ? 'border-gray-100 text-gray-300 cursor-not-allowed' : 'border-red-600 text-red-600 hover:bg-red-50'
            }`}
          >
            Previous
          </button>
          
          {step < steps.length ? (
            <button 
              onClick={nextStep}
              className="px-8 py-2 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700 transition-all shadow-lg"
            >
              Next
            </button>
          ) : (
            <button 
              disabled={!formData.terms}
              className={`px-10 py-2 rounded-lg font-bold transition-all shadow-lg ${
                formData.terms ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-red-200 text-white cursor-not-allowed'
              }`}
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BecomeDonorPage;
