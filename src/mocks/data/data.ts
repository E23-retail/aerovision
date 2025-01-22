import { MetricCardProps, NationalityData, TimeSeriesData } from '../../features/analytics/types';
import { Segment } from '../../features/segments/types';
import { Campaign } from '../../features/campaigns/types';


export const mockMetrics: MetricCardProps[] = [
  {
    title: 'Unique Travelers',
    value: 125463,
    change: 12.5,
    period: 'vs last week',
    trend: 'up'
  },
  {
    title: 'Arrivals',
    value: 75234,
    change: -5.2,
    period: 'vs last week',
    trend: 'down'
  },
  {
    title: 'Departures',
    value: 50229,
    change: 8.7,
    period: 'vs last week',
    trend: 'up'
  }
];

export const mockNationalities: NationalityData[] = [
  { country: 'United States', count: 45678, percentage: 36.4 },
  { country: 'United Kingdom', count: 23456, percentage: 18.7 },
  { country: 'Germany', count: 15678, percentage: 12.5 },
  { country: 'France', count: 12345, percentage: 9.8 },
  { country: 'Japan', count: 10234, percentage: 8.2 },
  { country: 'Others', count: 18072, percentage: 14.4 }
];

export const mockSegments: Segment[] = [
  {
    id: 'seg1',
    name: 'Business Travelers',
    criteria: {
      travelClass: ['Business', 'First'],
      ageGroups: ['25-34', '35-44', '45-54'],
      interests: ['Technology', 'Finance'],
      incomeBracket: 'High'
    },
    count: 45678
  },
  {
    id: 'seg2',
    name: 'Luxury Shoppers',
    criteria: {
      interests: ['Luxury', 'Fashion'],
      incomeBracket: 'High',
      priceSensitivity: 'Low'
    },
    count: 23456
  }
];

export const mockCampaigns: Campaign[] = [
  {
    id: 'camp1',
    name: 'Summer Travel 2024',
    startDate: new Date('2024-06-01'),
    endDate: new Date('2024-08-31'),
    targetAirports: ['JFK', 'LAX', 'ORD'],
    tags: ['Seasonal', 'Summer', 'Travel'],
    status: 'draft'
  },
  {
    id: 'camp2',
    name: 'Luxury Brand Promotion',
    startDate: new Date('2024-03-01'),
    endDate: new Date('2024-05-31'),
    targetAirports: ['DXB', 'LHR', 'CDG'],
    tags: ['Luxury', 'Shopping'],
    status: 'active'
  }
];

export const mockParameters = {
  travelClass: ['Economy', 'Premium Economy', 'Business', 'First'],
  ageGroups: ['18-24', '25-34', '35-44', '45-54', '55-64', '65+'],
  interests: ['Technology', 'Fashion', 'Travel', 'Food', 'Sports', 'Luxury'],
  genders: ['Male', 'Female', 'Other', 'Prefer not to say'],
  incomeBrackets: ['Low', 'Medium', 'High', 'Very High'],
  travelTypes: ['Business', 'Leisure', 'Family', 'Solo'],
  priceSensitivity: ['Low', 'Medium', 'High']
} as const;

export const mockTimeSeriesData: TimeSeriesData[] = [
  { time: '06:00', value: 149 },
  { time: '06:20', value: 188 },
  { time: '06:40', value: 212 },
  { time: '07:00', value: 178 },
  { time: '07:20', value: 176 },
  { time: '07:40', value: 158 },
  { time: '08:00', value: 334 },
  { time: '08:20', value: 320 },
  { time: '08:40', value: 318 },
  { time: '09:00', value: 313 },
  { time: '09:20', value: 317 },
  { time: '09:40', value: 329 },
  { time: '10:00', value: 324 },
  { time: '10:20', value: 326 },
  { time: '10:40', value: 295 },
  { time: '11:00', value: 281 },
  { time: '11:20', value: 270 },
  { time: '11:40', value: 272 },
  { time: '12:00', value: 255 },
  { time: '12:20', value: 266 },
  { time: '12:40', value: 270 },
  { time: '13:00', value: 257 },
  { time: '13:20', value: 261 },
  { time: '13:40', value: 262 },
  { time: '14:00', value: 189 },
  { time: '14:20', value: 179 },
  { time: '14:40', value: 186 },
  { time: '15:00', value: 199 },
  { time: '15:20', value: 217 },
  { time: '15:40', value: 235 },
  { time: '16:00', value: 253 },
  { time: '16:20', value: 249 },
  { time: '16:40', value: 254 },
  { time: '17:00', value: 264 },
  { time: '17:20', value: 262 },
  { time: '17:40', value: 295 },
  { time: '18:00', value: 325 },
  { time: '18:20', value: 356 },
  { time: '18:40', value: 360 },
  { time: '19:00', value: 278 },
  { time: '19:20', value: 269 },
  { time: '19:40', value: 240 },
  { time: '20:00', value: 211 },
  { time: '20:20', value: 184 },
  { time: '20:40', value: 130 },
  { time: '21:00', value: 112 }
]; 