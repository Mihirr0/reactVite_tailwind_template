// ThreeColumnLayout.jsx

import React from 'react';
import ThirdColumn from './ThirdColumn';
import SecondColumn from './SecondColumn';
import PieChart from './PieChart';

const ThreeColumnLayout = () => {
  return (
    <div className="flex">
      <div className="w-1/3 p-4 ">
       <PieChart/>
      </div>
      <div className="w-1/3 p-4 ">
        <SecondColumn/>
      </div>
      <div className="w-1/3 p-4 ">
       <ThirdColumn/>
      </div>
    </div>
  );
};

export default ThreeColumnLayout;
