// import React from 'react';
// import { ConfigProvider } from 'antd';
// import RoleSelection from './components/RoleSelection';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// function App() {
//   return (
//     <ConfigProvider>
//       <RoleSelection />
//     </ConfigProvider>
//   );
// }

// export default App;


import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/LaborWorkFlow/HomePage';
import EmployeePage from './components/LaborWorkFlow/EmployeePage';
import AdditionalInfoPage from './components/LaborWorkFlow/AdditionalInfoPage';
import MainPage from './components/LaborWorkFlow/MainPage';
import OngoingPage from './components/LaborWorkFlow/OngoingPage';
import AppliedPage from './components/LaborWorkFlow/AppliedPage';
import CompletedPage from './components/LaborWorkFlow/CompletedPage';
import WorkStatusPage from './components/LaborWorkFlow/WorkStatusPage';
import WorkSelectionPage from './components/LaborWorkFlow/WorkSelectionPage';
import WorkInformationPage from './components/LaborWorkFlow/WorkInformationPage';
import ContractPage from './components/LaborWorkFlow/ContractPage';



function LabourRoute() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Root path route */}
        <Route path="/employee" element={<EmployeePage contactNumber="1234567890" />} />
        <Route path="/additional-info" element={<AdditionalInfoPage />} />
        <Route path="/main-page" element={<MainPage />} />
        <Route path="/ongoing" element={<OngoingPage />} /> {/* Change from 'component' to 'element' */}
        <Route path="/applied" element={<AppliedPage />} /> {/* Change from 'component' to 'element' */}
        <Route path="/completed" element={<CompletedPage />} /> {/* Change from 'component' to 'element' */}
        <Route path="/status/:id" element={<WorkStatusPage />} />
        <Route path="/work-selection" element={<WorkSelectionPage />} />
        <Route path="/work-info/:id" element={<WorkInformationPage />} />
        <Route path="/contract" element={<ContractPage />} />
      </Routes>
    </Router>
  );
}

export default LabourRoute;
