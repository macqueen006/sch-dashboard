"use client";
import Image from "next/image";
import React from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    Total: "",
    count: 100,
    fill: "white",
  },
  {
    name: "Boys",
    count: 40,
    fill: "#C3EBFA",
  },
  {
    name: "Girls",
    count: 60,
    fill: "#FAE27C",
  }
];

const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};

const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* title */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Students</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      {/* chart */}
      <div className="w-full h-[75%] relative">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar
              background
              dataKey="count"
            />
          </RadialBarChart>
              </ResponsiveContainer>
              <Image src="/maleFemale.png" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" alt="" width={50} height={50} />
      </div>
      {/* bottom */}
          <div className="flex justify-center gap-16">
              <div className="flex flex-col gap-1">
                  <div className="w-5 h-5 rounded-full bg-sky"></div>
                  <h1 className="font-bold">1,565</h1>
                  <span className="text-xs text-gray-300">Boys (50%)</span>
              </div>
              <div className="flex flex-col gap-1">
                  <div className="w-5 h-5 rounded-full bg-schYellow"></div>
                  <h1 className="font-bold">1,565</h1>
                  <span className="text-xs text-gray-300">Girls (50%)</span>
              </div>
      </div>
    </div>
  );
};

export default CountChart;
