import React from "react";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <h1 className="text-left font-bold text-4xl text-blue-950 mb-10 mt-10">หน้าหลัก</h1>
      <hr />
    
     <div className="rounded-md">
     <img src="https://www.hu.ac.th/images/HUService/%E0%B8%AB%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%9B%E0%B8%8F%E0%B8%B4%E0%B8%9A%E0%B8%B1%E0%B8%95%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%84%E0%B8%AD%E0%B8%A1%E0%B8%9E%E0%B8%B4%E0%B8%A7%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C%2010-302%20(iMAC)/01.jpg" alt="" />
     </div>
     
    </Layout>
  );
};

export default Home;
