import React from "react";

const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <span className="text-xs text-gray-400">View more</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-skyLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit.</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-25
            </span>
          </div>
          <p className="text-xs mt-1 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut commodi vitae quod.</p>
        </div>
        <div className="bg-schPurpleLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit.</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-25
            </span>
          </div>
          <p className="text-xs mt-1 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut commodi vitae quod.</p>
        </div>
        <div className="bg-schYellowLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit.</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-25
            </span>
          </div>
          <p className="text-xs mt-1 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut commodi vitae quod.</p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
