export interface Campaign {
  id: string;
  name: string;
  startDate: Date;
  endDate: Date;
  targetAirports: string[];
  tags: string[];
  status: 'active' | 'draft' | 'completed';
} 