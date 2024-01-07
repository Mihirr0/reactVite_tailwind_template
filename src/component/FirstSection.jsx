// ThreeColumnLayout.jsx

import React from 'react';
import ThirdColumn from './ThirdColumn';
import SecondColumn from './SecondColumn';
import DashboardCard from './DoubleChart';
import BarChart from './BarChart';

const SecondColumnLayout = () => {
  return (
    <div className="flex">
      <div className="w-2/3 p-4 ">
      <DashboardCard/>
      </div>
      {/* <div className="w-1/3 p-4 ">
        <SecondColumn/>
      </div> */}
      <div className="w-1/3 p-4 ">
       <BarChart/>
      </div>
    </div>
  );
};

export default SecondColumnLayout;
