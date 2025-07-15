import BottomNav from "../components/shared/BottomNav";
import BackButton from "../components/shared/BackButton";
import TableCard from "../components/tables/TableCard";
import { useState } from "react";
import { tables } from "../constants";

const Tables = () => {
  const [status, setStatus] = useState("all");

  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden">
      <div className="flex items-center justify-between px-10 py-4 mt-2">
        <div className="flex items-center gap-4">
          <BackButton />
          <h1 className="text-[#f5f5f5] text-2xl font-bold tracking-wide">
            Tables
          </h1>
        </div>
        <div className="flex items-center justify-around gap-4">
          <button
            onClick={() => setStatus("all")}
            className={`text-[#ababab] text-lg cursor-pointer ${
              status === "all" && "bg-[#383838] rounded-lg px-5 py-2"
            } rounded-lg px-5 py-2 font-semibold`}
          >
            All
          </button>
          <button
            onClick={() => setStatus("booked")}
            className={`text-[#ababab] text-lg cursor-pointer ${
              status === "booked" && "bg-[#383838] rounded-lg px-5 py-2"
            } rounded-lg px-5 py-2 font-semibold`}
          >
            Booked
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-5 p-10 justify-center overflow-y-scroll no-scrollbar h-[calc(100vh-5rem-5rem)]">
        {tables.map((table) => {
          return (
            <TableCard
              key={table.id}
              name={table.name}
              status={table.status}
              initials={table.initial}
            />
          );
        })}
      </div>
      <BottomNav />
    </section>
  );
};

export default Tables;
