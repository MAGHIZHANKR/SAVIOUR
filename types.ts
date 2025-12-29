
export enum BloodGroup {
  APositive = 'A+',
  ANegative = 'A-',
  BPositive = 'B+',
  BNegative = 'B-',
  ABPositive = 'AB+',
  ABNegative = 'AB-',
  OPositive = 'O+',
  ONegative = 'O-',
}

export enum Gender {
  Male = 'Male',
  Female = 'Female',
  Other = 'Other',
}

export interface DonorProfile {
  name: string;
  age: number;
  dob: string;
  gender: Gender;
  bloodGroup: BloodGroup;
  email: string;
  mobile: string;
  whatsapp: string;
  country: string;
  state: string;
  permanentCity: string;
  residentCity: string;
}

export interface BloodRequest {
  id: string;
  patientName: string;
  age: number;
  gender: Gender;
  reason: string;
  bloodGroup: BloodGroup;
  anyGroupPreferred: boolean;
  unitsRequired: number;
  hospitalName: string;
  attenderName: string;
  attenderMobile: string;
  country: string;
  state: string;
  city: string;
  status: 'Accepted' | 'Completed' | 'Received' | 'Rejected';
}

export interface BloodCamp {
  organizationType: string;
  organizationName: string;
  organizerName: string;
  organizerMobile: string;
  organizerEmail: string;
  campName: string;
  campLocation: string;
  campState: string;
  campCity: string;
  campCountry: string;
  startTime: string;
  endTime: string;
}
