import React, { useState } from "react";
import Stack from "@mui/material/Stack";

function FarmSchedulerPage() {
  function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${date}/${month}/${year}`;
  }
  const [currentDate, setCurrentDate] = useState(getDate());
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Stack
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection:"column"
        }}
      >
        <Stack 
        sx={{display:"flex",flexDirection:"column" , width:"55%" }}
        className="py-2 px-10  gap-4 absolute  top-5"
        >
        <p className="font-bold px-10 " >Welcome back user </p>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              width:"100%",
              alignItems:"center",
              justifyContent: "space-between",
            }}
            className="flex justify-between"
          >
            <a
              href="#"
              className="block max-w-sm p-6 bg-slate-300 border border-gray-200 rounded-2xl shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 "
            >
              <p className="font-normal text-blackdark:text-gray-400">
                "The greatest glory in living lies not in never falling, but in
                rising every time we fall" - Nelson Mandela
              </p>
            </a>
            <button style={{height:"50%"}} className="bg-green-200 text-black hover:bg-green-200 font-bold py-4 px-6 rounded-full  ">
              Add New Task
            </button>
          </Stack>
        </Stack>
      </Stack>
      <nav
        className="flex-col h-screen bg-neutral-200 w-1/4 px-7 "
      >
        <div className="date">
          <p className="font-normal text-center">{currentDate}</p>
        </div>

        <p className="font-bold text-center">today's schedule</p>
      </nav>
    </Stack>
  );
}

export default FarmSchedulerPage;
