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
import LabourRoute from './LabourRoute';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LabourRoute />} /> {/* Root path route */}
        
      </Routes>
    </Router>
  );
}

export default App;
