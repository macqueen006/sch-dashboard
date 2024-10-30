import Announcements from '@/components/Announcements';
import BigCalendar from '@/components/BigCalendar';
import React from 'react';

export default function ParentPage() {
  return (
    <div className='flex-1 p-4 flex flex-col gap-4 xl:flex-row'>
      {/* left */}
      <div className="basis-full xl:basis-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Schedule (John Doe)</h1>
          <BigCalendar />
      </div>
      </div>
      {/* right */}
      <div className="basis-full xl:basis-1/3 flex flex-col gap-8">
        <Announcements />
      </div>
    </div>
  )
}
