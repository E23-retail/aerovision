export interface SegmentCriteria {
  travelClass?: string[];
  ageGroups?: string[];
  interests?: string[];
  incomeBracket?: string;
  priceSensitivity?: string;
  nationality?: string;
  gender?: string;
}

export interface Segment {
  id: string;
  name: string;
  criteria: SegmentCriteria;
  count: number;
} 