# Product Requirements Document (PRD)

## 1. Product Overview

### 1.1 Product Purpose
- **Goal**: Provide insights into airport audience demographics and behaviors for data-driven decisions in advertising.
- **Implication in React**: 
  - Need a dashboard that displays key metrics (which may be updated on a schedule or when the user requests).
  - Data can be fetched via standard REST APIs or batch files rather than requiring continuous streaming.

### 1.2 Target Users
1. Media Owners
2. Media Agencies
3. Airport Advertising Managers
4. Campaign Planners

- **Implication in React**: 
  - Different user roles may need different levels of access or customized views.
  - Implement role-based UI components and conditional rendering.

### 1.3 Key Features
1. **Audience Analytics Dashboard**  
2. **Custom Audience Segment Creation**  
3. **Campaign Management System**  
4. **Multi-Airport Data Integration**

- **Implication in React**: 
  - Multiple views or modules in the application (Dashboard, Segment Manager, Campaign Manager, etc.).
  - Likely a single-page application (SPA) with React Router for navigation.

## 2. Functional Requirements

### 2.1 Audience Analytics Dashboard

#### 2.1.1 Metrics Display
- **Unique Confirmed Travelers**  
  - Display total count, breakdown of arrivals/departures, historical comparisons (day/week/month).  
  - **React Considerations**:
    1. A metrics card or summary widget displaying counts.
    2. Trigger fetching or data refresh based on user interaction or a scheduled interval.
    3. Show data transformations for day-over-day, week-over-week comparisons.

#### 2.1.2 Demographic Analysis
- **Nationality Distribution**  
  - Tabular display of top nationalities, absolute count, scrollable list, "Show more" option.
  - **React Considerations**:
    1. A table component with pagination or infinite scrolling.
    2. State management to load more rows upon user request.
    3. Possibly integrate a library like `react-table` or a custom table for sorting/filters.

#### 2.1.3 Segment Analysis
- **Over-represented Segments**  
  - Display key audience segments, highlight dominant characteristics, passenger count per segment.
  - **React Considerations**:
    1. Cards or list items to display each segment and its metrics.
    2. Color-coding or highlighting to emphasize dominant characteristics.

#### 2.1.4 Trend Visualization
- **Time-based Trends**  
  - Interactive line chart, filter by time period, arrival vs. departure comparison.
  - **React Considerations**:
    1. Use a charting library (e.g., `Recharts`, `Chart.js`, or `Victory`).
    2. Chart filters that update the dataset displayed.
    3. Compare two data series on the same chart.

### 2.2 Audience Segment Creation

#### 2.2.1 Segment Definition
- **Configurable Parameters**:
  - Travel Class, Age Group, Nationality, Product Category Interest, Gender, Income Bracket, Travel Type, Price Sensitivity, HNAV (True/False)
- **React Considerations**:
  1. A form-based component where users can select multiple filters/criteria.
  2. Possibly multiple selection components or an advanced filter builder UI.
  3. Validation logic for missing fields or invalid combinations.

#### 2.2.2 Location Tracking
- **Terminal-level Monitoring**  
  - Passenger count per terminal, specific area tracking, passenger density visualization.
- **React Considerations**:
  1. A map/graphical layout for the airport or a grid-based representation.
  2. Updates to show passenger density when new data is available.
  3. Possibly a third-party library for floorplan or map visualization.

#### 2.2.3 Threshold Management
- **Activation Thresholds**  
  - Configurable minimum audience size, time-based threshold tracking, alert system.
- **React Considerations**:
  1. Input fields for threshold settings.
  2. Alerts could be toast notifications, banners, or other UI elements.
  3. Could integrate with push notifications or webhooks.

### 2.3 Campaign Management

#### 2.3.1 Campaign Creation
- **Basic Information**:  
  - Campaign name, brand assets upload, start/end dates, target airports.
- **React Considerations**:
  1. A multi-step form wizard to simplify data entry.
  2. File upload component for brand assets.
  3. Date range pickers for campaign duration.

#### 2.3.2 Campaign Categorization
- **Tagging System**:  
  - Custom tags, pre-defined categories (Seasonal, Campaign type, Duration).
- **React Considerations**:
  1. Tag or chip components for easy addition/removal of tags.
  2. Possibly an autocomplete field for existing tags.
  3. Storing pre-defined categories for quick selection.

#### 2.3.3 Segment Linking
- **Audience Targeting**:  
  - Multiple segment selection, cross-segment analysis, threshold-based activation.
- **React Considerations**:
  1. A dropdown or multi-select component listing available segments.
  2. Updates to show potential reach or overlap among segments.
  3. Validation or notifications when thresholds are met or exceeded.

## 3. Technical Requirements

### 3.1 Metrics
- **Data refresh**: Periodic or on-demand (no strict real-time requirement).
- **Data retention**: (Not fully detailed but implies some storage or archival strategy).
- **React Considerations**:
  1. `useEffect` for fetching data on component mount or at defined intervals if needed.
  2. State management (Redux or Context API) to store metrics globally.
  3. Decide on how older data is archived or if summary endpoints are provided.

### 3.2 Data Processing
- **Profile data structure (CSV)**:
  ```
  origin,destination,direction,nationality,travel_class,transit,income_bracket,high_interest_categories,gender,age_group,traveller_type,day,time,terminal,hnav,price_sensitivity
  ```
- **React Considerations**:
  1. The CSV format suggests either a back-end transformation or direct ingestion if needed.
  2. Potential for server-side transformations to create summary endpoints.
  3. Ensure consistent data shape in the front-end for easier consumption.

### 3.3 Security
- **Role-based access control**, **Audit logging**, **GDPR compliance**.
- **React Considerations**:
  1. Protect certain routes in React based on the user's role.
  2. Logging user actions is typically handled on the back end.
  3. GDPR compliance might require cookie consent management and data anonymization logic.

## 4. User Interface Requirements

### 4.1 Navigation
- **Primary Navigation**:
  1. Audience Analytics
  2. Segment Manager
  3. Campaign Manager
  4. Trends & Patterns (Future)
  5. Settings

- **React Considerations**:
  1. Likely a top-level or side navigation bar.
  2. Possibly dynamic show/hide of certain sections based on user role.

### 4.2 Dashboard Components
- **Layout**:
  1. Airport selector (dropdown or multi-select).
  2. Key metrics cards (Unique travelers, arrivals/departures, etc.).
  3. Data visualization panels (charts, tables).
  4. Segment overview cards.
- **React Considerations**:
  1. A responsive grid or layout system.
  2. Reusable card components for metrics or segment data.
  3. Ensure the layout adjusts for different screen sizes.

## Summary and Next Steps

1. **Application Structure**  
   - A single-page React application with multiple routes:
     - `/analytics` (Audience Analytics Dashboard)  
     - `/segments` (Segment Manager)  
     - `/campaigns` (Campaign Manager)  
     - `/trends` (Future)  
     - `/settings`

2. **State Management & Data Flow**  
   - Potential approaches:
     - **Redux** for global state (metrics, campaigns, segments).
     - **Context API** if the application remains moderate in complexity.
   - Data updates:
     - Fetch or refresh data periodically.
   - Ensure data transformations happen either on the front end or are provided by the back end.

3. **UI Components Breakdown**  
   - **Metrics Cards**: Display unique travelers, arrivals vs. departures, etc.
   - **Table / List Components**: Nationality distribution, segment analysis.
   - **Chart Components**: Time-based trends, arrival vs. departure comparisons.
   - **Forms**: Segment creation, campaign creation (with multi-step or wizard).
   - **Navigation**: A main menu that conditionally renders options based on user role.

4. **Security & Roles**  
   - Implement a protected route system in React.
   - Use tokens or sessions to manage user authentication.
   - Ensure front-end does not expose restricted data.

5. **Performance Considerations**  
   - Updating data on a schedule or on demand is less resource-intensive than continuous updates.
   - Large data sets considerations:
     - Consider pagination or server-side filtering to reduce load times.

6. **Future Work**  
   - Expand "Trends & Patterns" module once initial features are stable.
   - Possible machine learning / predictive analytics integration to forecast passenger volumes or segment expansions.

## Final Thoughts

This PRD focuses on static or scheduled data updates rather than continuous real-time refresh. While many of the same user interface and architecture considerations still apply, the data fetching logic and performance strategy is simplified by removing the need for constant updates. The end goal remains a data-driven, role-based application for analyzing and managing airport audiences, segments, and advertising campaigns—now with a more traditional data refresh workflow rather than near-instant streaming. 