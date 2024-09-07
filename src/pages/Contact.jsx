import React from "react";
import Layout from "../components/Layout";
import { useParams } from 'react-router-dom';

const Contact = () => {
  const params = useParams();
  return (
    <Layout>
   <h1 className="text-left font-bold text-4xl text-blue-950 mb-10 mt-10">หน้าหลัก</h1>
      <hr />

    
      

      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 md:pr-4 mb-6 md:mb-0 ">
        <h1 className="text-left font-bold text-4xl text-blue-950 mb-20 mt-10">NVC Training Center</h1>
     
          <ul className="space-y-20">
            <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-headset"><path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"/><path d="M21 16v2a4 4 0 0 1-4 4h-5"/></svg>
              <span className="ml-5">Tel : (123) 456-7890</span>
            </li>
            <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              <span className="ml-5">E-mail : info@computerstore.com</span>
            </li>
            <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-house"><path d="M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z"/><path d="M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2"/><path d="M18 22v-3"/><circle cx="10" cy="10" r="3"/></svg> 
              <span className="ml-5">Address : 90 Tesa Rd, Mueang,Nakhon Phathom, 73000</span>
            </li>
          </ul>

          {/* <div>Details NAME: {params.name}</div> */}

        </div>
      </div>
        
    </Layout>
  );
};

export default Contact;
