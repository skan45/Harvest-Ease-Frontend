import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import { Scheduler } from "@aldabil/react-scheduler";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import {
  Button,
  CardActionArea,
  CardActions,
  IconButton,
  Checkbox,
  Input,
} from "@mui/material";
import "./Farm.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"; // Import the arrow forward icon
import CloseIcon from "@mui/icons-material/Close"; // Import the close icon
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 650,
  height: 450,
  bgcolor: "#8cc4bd",
  boxShadow: 24,
  p: 4,
};
function FarmSchedulerPage() {
  function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${date}/${month}/${year}`;
  }
  const today = new Date();
  const EVENTS = [
    {
      event_id: 1,
      title: "Event 1",
      start: new Date(new Date(new Date().setHours(9)).setMinutes(0)),
      end: new Date(new Date(new Date().setHours(10)).setMinutes(0)),
      description: "description event1",
      disabled: true,
      admin_id: [1, 2, 3, 4],
      color: "#cce8e6",
    },
    {
      event_id: 2,
      title: "Event 2",
      start: new Date(new Date(new Date().setHours(10)).setMinutes(0)),
      end: new Date(new Date(new Date().setHours(12)).setMinutes(0)),
      description: "description event2",

      admin_id: 2,
      color: "#f3b4c3",
    },
    {
      event_id: 3,
      title: "Event 3",
      start: new Date(new Date(new Date().setHours(11)).setMinutes(0)),
      end: new Date(new Date(new Date().setHours(12)).setMinutes(0)),
      description: "description event3",

      admin_id: 1,
      editable: false,
      deletable: false,
      color: "#8cc4bd",
    },
    {
      event_id: 4,
      title: "Event 4",
      start: new Date(
        new Date(new Date(new Date().setHours(9)).setMinutes(30)).setDate(
          new Date().getDate() - 2
        )
      ),
      end: new Date(
        new Date(new Date(new Date().setHours(11)).setMinutes(0)).setDate(
          new Date().getDate() - 2
        )
      ),
      admin_id: 2,
      description: "description event4",

      color: "#b0cdb3",
    },
    {
      event_id: 5,
      title: "Event 5",
      start: new Date(
        new Date(new Date(new Date().setHours(10)).setMinutes(30)).setDate(
          new Date().getDate() - 2
        )
      ),
      end: new Date(
        new Date(new Date(new Date().setHours(14)).setMinutes(0)).setDate(
          new Date().getDate() - 2
        )
      ),
      description: "description event5",

      admin_id: 2,
      editable: true,
      color: "#f7fecb",
    },
    {
      event_id: 6,
      title: "Event 6",
      start: new Date(
        new Date(new Date(new Date().setHours(10)).setMinutes(30)).setDate(
          new Date().getDate() - 4
        )
      ),
      end: new Date(new Date(new Date().setHours(14)).setMinutes(0)),
      description: "description event6",
      color: "#fed6df",
      admin_id: 2,
    },
  ];
  //modal 1
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
//modal 2
const [selectedEventId, setSelectedEventId] = React.useState(null);

const handleOpenCard = (eventId) => setSelectedEventId(eventId);
const handleCloseCard = () => setSelectedEventId(null);

//date 
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
          flexDirection: "column",
        }}
      >
        <Stack
          sx={{ display: "flex", flexDirection: "column", width: "55%" }}
          className="py-2 px-10  gap-4 absolute  top-5"
        >
          <p className="font-bold px-10 ">Welcome back user </p>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
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
            <button
              style={{ height: "50%",backgroundColor:"#c6e6e3" }}
              className="text-black hover:bg-green-200 font-bold py-4 px-6 rounded-full  "
              onClick={handleOpen}
            >
              Add New Task
            </button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style} className="rounded-3xl">
              <IconButton
                  className="absolute close-button"
                  aria-label="close"
                  onClick={handleClose}
                >
                  <CloseIcon />
                </IconButton>
              
                <form className=" absolute mt-8 mb-2 w-80 max-w-screen-lg sm:w-96  gap-8 top-8"      style={{
          width: "92%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems:"center",
        
          
        }}>
                <div className="max-w-[16rem] mx-auto grid grid-cols-2 gap-4 " >
                  <div >
                    <label
                      for="start-time"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Start time:
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                        <svg
                          className="w-4 h-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                      <Input
                        type="time"
                        id="start-time"
                        className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        min="09:00"
                        max="18:00"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      for="end-time"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      End time:
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                        <svg
                          className="w-4 h-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                      <Input
                        type="time"
                        id="end-time"
                        className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        min="09:00"
                        max="18:00"
                        required
                      />
                    </div>
                  </div>
                  </div>

                  <div className="mb-1 flex flex-col gap-6 ">
                    <Input
                      size="lg"
                      placeholder="New Task Title"
                      className=" !border-t-blue-gray-200 focus:!border-t-white"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />

                    <Input
                      size="lg"
                      placeholder="Description"
                      className=" !border-t-blue-gray-200 focus:!border-t-white"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                  </div>
                  <div
                  className="absolute top-60 gap-6 "
                   style={{
                    display:"flex",
                    justifyContent:"space-between",
                    marginTop:"35px"
                   }}
                  >
                    <button
                     
                      className="bg-white hover:bg-gray-100 text-gray-600 font-semibold py-2 px-4 border border-gray-400 rounded shadow "
                    >
                      cancel{" "}
                    </button>
                    <button
                    
                      className="bg-white hover:bg-gray-100 text-gray-600 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                    >
                      add task{" "}
                    </button>
                  </div>
                </form>
              </Box>
            </Modal>
          </Stack>
          <Scheduler events={EVENTS} />
        </Stack>
      </Stack>
      <nav
        className="flex-col h-screen bg-neutral-200 w-1/4 px-5 "
        style={{ overflow: "auto" }}
      >
        <div className="date">
          <p className="font-normal text-center">{currentDate}</p>
        </div>

        <p className="font-bold text-center">today's schedule</p>

        {EVENTS.map((event) => {
  const eventDate = new Date(event.start);
  if (eventDate.toDateString() === today.toDateString()) {
    return (
      <Card key={event.event_id} className="rounded-3xl "
      sx={{
        maxWidth: 400,
        margin: "10px",
        backgroundColor: "white",
        overflow: "auto",
        maxHeight: "300px",
      }} >
          <CardActionArea
                  sx={{ backgroundColor: event.color }}
                  /* onClick={() => handleCardExpand(event)}*/
                >
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {event.start.toLocaleTimeString()} -{" "}
                      {event.end.toLocaleTimeString()}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {event.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
       <CardActions>
          <Button
            size="small"
            sx={{ color: "black", fontWeight: "bold" }}
            onClick={() => handleOpenCard(event.event_id)}
          >
            {event.title}
          </Button>
          <IconButton
                    size="small"
                    aria-label="go to event"
                    onClick={() => handleOpenCard(event.event_id)}
                    /* onClick={() => handleCardExpand(event)}*/
                  >
                    <ArrowForwardIcon />
                  </IconButton>
        </CardActions>
        <Modal
          open={selectedEventId === event.event_id}
          onClose={handleCloseCard}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: 650,
                      height: 450,
                      backgroundColor: event.color,
                      boxShadow: 24,
                      p: 4,
                    }}
                    className="rounded-3xl"
                  >
                    <IconButton
                      className="close-button"
                      aria-label="close"
                      onClick={handleCloseCard}
                    >
                      <CloseIcon />
                    </IconButton>
                    <Card
                      className="rounded-3xl "
                      sx={{
                        maxWidth: 600,
                        height:300,
                        margin: "10px",
                        backgroundColor: event.color,
                        overflow: "auto",
                        maxHeight: "300px",
                      }}
                    >
                      <CardActionArea
                        sx={{ backgroundColor: event.color }}
                        /* onClick={() => handleCardExpand(event)}*/
                      >
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {event.start.toLocaleTimeString()} -{" "}
                            {event.end.toLocaleTimeString()}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {event.description}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <button
                          style={{
                            position: "relative",
                            bottom: "0",
                            right: "10",
                            height: "50%",
                          }}
                          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                        >
                          cancel{" "}
                        </button>
                        <button
                          style={{
                            position: "relative",
                            bottom: "0",
                            right: "0",
                            height: "50%",
                          }}
                          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                        >
                          Done{" "}
                        </button>
                      </CardActions>
                    </Card>
                  </Box>
                </Modal>
              </Card>
            );
          } else {
            return null;
          }
        })}
      </nav>
    </Stack>
  );
}

export default FarmSchedulerPage;
