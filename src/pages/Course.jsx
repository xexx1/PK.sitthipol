import React from "react";
import Card from "../components/Card";
import Layout from "../components/Layout";

const Course = () => {
  const cardList = [
    {
      image: "11.png",
      name: "Basic React Native",
      time: "5",
      price: "7500 บาท",
    },
    {
      image: "3.png",
      name: "Power BI Dashboard",
      time: "4",
      price: "5500 บาท",
    },
    {
      image: "2.png",
      name: "UI Design with Figma",
      time: "3",
      price: "5000 บาท",
    },
    {
      image: "1.svg",
      name: "Cross Platform with Flutter",
      time: "5",
      price: "6500 บาท",
    },
  ];

  return (
    <Layout>
      <h1 className="text-left font-bold text-4xl text-blue-950 mb-10 mt-10">
        หลักสูตรที่เปิดทำการสอน
      </h1>
      <hr />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-4">
        {cardList.map((b) => (
          <Card key={b.name} {...b} />
        ))}
      </div>
    </Layout>
  );
};

export default Course;
