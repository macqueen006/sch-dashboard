import Announcements from "@/components/Announcements";
import AttendantChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import EventCalendar from "@/components/EventCalendar";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";
import React from "react";

export default function Admin() {
  return (
    <div className="p-4 flex flex-col gap-4 md:flex-row">
      {/* left */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* user card */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        {/* Middle charts */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* count chart */}
          <div className="basis-full lg:basis-1/3 h-[450px]">
            <CountChart />
          </div>
          {/* attendants Chart */}
          <div className="basis-full lg:basis-2/3 h-[450px]">
            <AttendantChart />
          </div>
        </div>
        {/* Bottom charts */}
        <div className="basis-full h-[500px]">
          <FinanceChart />
        </div>
      </div>
      {/* right */}
      <div className="basis-full lg:basis-1/3 flex flex-col gap-8">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
}
