import React from "react";
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout>
      <h1 className="text-left font-bold text-4xl text-blue-950 mb-10 mt-10">หลักสูตรที่เปิดทำการสอน </h1>
      <hr />
      

<section class="container flex flex-col items-center justify-center max-w-screen-xl mx-auto pb-20 mt-10">
  <div class="grid grid-cols-4 gap-9">
    <div class="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white transition-all duration-300 hover:scale-110">
      <img
        src="data:image/png;base64,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"
        alt=""
        class="w-full h-80 object-cover"
      />
      <div class="px-4 py-4 flex ">
        <h2 class="font-bold text-xl">Basic React Native</h2>
        </div>
      <div class="px-4 py-4 flex text-gray-300">
        <h2 class="font-bold">ระยะเวลา(วัน): 5</h2>
        </div>
        <div class="px-4 py-4 flex ">
        <h2 class="font-bold text-xl">ราคา 7,500 บาท</h2>
        </div>
    </div>
    <div class="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white transition-all duration-300 hover:scale-110">
      <img
        src="https://images.datacamp.com/image/upload/v1724169856/image_ff55d03003.png"
        alt=""
        class="w-full h-80 object-cover"
      />
       <div class="px-4 py-4 flex ">
        <h2 class="font-bold text-xl">Power BI Dashborad</h2>
        </div>
      <div class="px-4 py-4 flex text-gray-300">
        <h2 class="font-bold">ระยะเวลา(วัน): 4</h2>
        </div>
        <div class="px-4 py-4 flex ">
        <h2 class="font-bold text-xl">ราคา 5,500 บาท</h2>
        </div>
    </div>
    <div class="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white transition-all duration-300 hover:scale-110">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoUX5LMRa7atIsNfl0nP3DaUaV4URhV0PHfA&s"
        alt=""
        class="w-full h-80 object-cover"
      />
      <div class="px-4 py-4 flex ">
        <h2 class="font-bold text-xl">UI Design with Figma</h2>
        </div>
      <div class="px-4 py-4 flex text-gray-300">
        <h2 class="font-bold">ระยะเวลา(วัน): 3</h2>
        </div>
        <div class="px-4 py-4 flex ">
        <h2 class="font-bold text-xl">ราคา 5,000 บาท</h2>
        </div>
    </div>
    <div class="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white transition-all duration-300 hover:scale-110">
      <img
        src="https://cdn.prod.website-files.com/5f841209f4e71b2d70034471/60bb4a2e143f632da3e56aea_Flutter%20app%20development%20(2).png"
        alt=""
        class="w-full h-80 object-cover"
      />
      <div class="px-4 py-4 flex ">
        <h2 class="font-bold text-xl">Cross Platform with Flutter</h2>
        </div>
      <div class="px-4 py-4 flex text-gray-300">
        <h2 class="font-bold">ระยะเวลา(วัน): 5</h2>
        </div>
        <div class="px-4 py-4 flex ">
        <h2 class="font-bold text-xl">ราคา 6,500 บาท</h2>
        </div>
    </div>
   
   
  </div>
  
</section>
    </Layout>
  );
};

export default About;
