import './app.styles.scss';
import QRScanner from './components/QRScanner/QRScanner';
import Table from './components/Table/Table';
import S1 from './components/S1/S1';
import S2 from './components/S2/S2';
import S3 from './components/S3/S3';
import Compare from './components/Compare/Compare';
import React, { useMemo, useState } from "react";
import FetchPatientTask from './components/fetchPatientTask/FetchPateintTask';


function App() {
  // const [COIValue1, setCOIValue1] = useState();
  // const [COIValue2, setCOIValue2] = useState();

  return (
    <div className='flex flex-col w-screen h-screen p-10 '>
      {/* <div className='h-1/5 align-middle flex'><S1 /></div>
      <hr className=' border-black' />
      <div className='flex flex-row h-4/5 bg-gray-100'>
        <div className=' w-1/3 items-center h-full flex justify-center bg-gray-100'>
          <div id="scanner"></div>
        </div>
        <div className='w-2/3  items-center h-full'>
          <div className=' h-2/5'><S2 /></div>
          <hr className=' border-black' />
          <div className='h-2/5'><S3 /></div>
          <hr className=' border-black' />
          <div className=' h-1/5'><Compare /></div>
        </div>
      </div>
      <br></br> */}
      <FetchPatientTask/>
    </div>
  )
}

export default App;
