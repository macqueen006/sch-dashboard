import TableSearch from "@/components/TableSearch";
import React from "react";
import Image from "next/image";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import Link from "next/link";
import { lessonsData, role } from "@/lib/data";
import FormModal from "@/components/FormModal";

type Lesson = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
};

const columns = [
  {
    header: "Subject Name",
    accessor: "name",
  },
  {
    header: "Class",
    accessor: "class",
    className: "hidden md:table-cell",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

const LessonListPage = () => {
  const renderRow: React.FC<Lesson> = (item) => {
    return (
      <tr
        key={item.id}
        className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-schPurpleLight"
      >
        <td className="flex items-center gap-4 p-4">
          <div className="flex flex-col">
            <h3 className="font-semibold">{item.subject}</h3>
          </div>
        </td>
        <td className="hidden md:table-cell">{item.class}</td>
        <td className="hidden md:table-cell">{item.teacher}</td>
        <td>
          <div className="flex items-center gap-2">
            <Link href={`/list/teacher/${item.id}`} className="">
              <button className="w-7 h-7 rounded-full flex items-center justify-center bg-sky">
                <Image src="/edit.png" alt="" width={16} height={16} />
              </button>
            </Link>
            {role === "admin" && (
              <>
                <FormModal table="lesson" type="update" data={item} />
                <FormModal table="lesson" type="delete" id={item.id} />
              </>
            )}
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div className="p-4 bg-white rounded-md m-4 mt-0 flex-1">
      {/* Top */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold hidden md:block">All Classes</h1>
        <div className="flex flex-col sm:flex-row items-center gap-4 md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 rounded-full flex items-center justify-center bg-schYellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 rounded-full flex items-center justify-center bg-schYellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {role === "admin" && <FormModal table="lesson" type="create" />}
          </div>
        </div>
      </div>
      {/* List */}
      <Table columns={columns} renderRow={renderRow} data={lessonsData} />
      {/* Pagination */}
      <Pagination />
    </div>
  );
};

export default LessonListPage;
