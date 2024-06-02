import React, { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import { Scheduler } from "@aldabil/react-scheduler";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  IconButton,
  Input,
  TextField,
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

  // Function to get card color based on status
  const getCardColor = (event) => {
    const now = new Date();
    if (event.start > now) {
      return "#cce8e6"; // To do
    } else if (event.start <= now && event.end >= now) {
      return "#f3b4c3"; // In progress
    } else {
      return "#8cc4bd"; // Done
    }
  };
  const getEventStatus = (event) => {
    const now = new Date();
    if (event.start > now) {
      return "To do";
    } else if (event.start <= now && event.end >= now) {
      return "In progress";
    } else {
      return "Done";
    }
  };



  // Add these events to your EVENTS array
  const EVENTS = [
    {
      event_id: 1,
      title: "Event 1",
      start: new Date(new Date(new Date().setHours(9)).setMinutes(0)),
      end: new Date(new Date(new Date().setHours(10)).setMinutes(0)),
      description: "description event1",
      admin_id: [1, 2, 3, 4],
    },
    {
      event_id: 2,
      title: "Event 2",
      start: new Date(new Date(new Date().setHours(10)).setMinutes(0)),
      end: new Date(new Date(new Date().setHours(12)).setMinutes(0)),
      description: "description event2",
      admin_id: 2,
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
      admin_id: 2,
    },
    {
      event_id: 7,
      title: "Past Event",
      start: new Date(new Date().setDate(new Date().getDate() - 2)), // 2 days ago
      end: new Date(new Date().setDate(new Date().getDate() - 2)), // 2 days ago
      description: "description past event",
      admin_id: [1, 2, 3, 4],
    },
    {
      event_id: 8,
      title: "Current Event",
      start: new Date(new Date().setHours(new Date().getHours() - 7)), // 1 hour ago
      end: new Date(new Date().setHours(new Date().getHours() + 2)), // 1 hour later
      description: "description current event",
      admin_id: 2,
    },
    {
      event_id: 9,
      title: "Future Event",
      start: new Date(new Date().setDate(new Date().getDate() + 2)), // 2 days later
      end: new Date(new Date().setDate(new Date().getDate() + 2)), // 2 days later
      description: "description future event",
      admin_id: 1,
      editable: false,
      deletable: false,
    },
  

  ];
  
  const updatedEvents = EVENTS.map(event => ({
    ...event,
    color: getCardColor(event)
  }));
  
  // Use useEffect to log the status of each event
  useEffect(() => {
    updatedEvents.forEach(event => {
      console.log(`Event: ${event.title}, Start: ${event.start}, End: ${event.end}, Status: ${getEventStatus(event)}`);
    });
  }, [updatedEvents]);

  
  // Modal 1
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Modal 2
  const [selectedEventId, setSelectedEventId] = React.useState(null);
  const handleOpenCard = (eventId) => setSelectedEventId(eventId);
  const handleCloseCard = () => setSelectedEventId(null);

  // Date
  const [currentDate, setCurrentDate] = useState(getDate());

  // Form state and validation
  const [startDateTime, setStartDateTime] = useState('');
  const [endDateTime, setEndDateTime] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const extractDateTime = (dateTimeStr) => {
    const [date, time] = dateTimeStr.split('T');
    return { date, time };
  };

  const handleStartDateTimeChange = (e) => {
    const newStartDateTime = e.target.value;
    setStartDateTime(newStartDateTime);

    const { date: startDate, time: startTime } = extractDateTime(newStartDateTime);
    const { date: endDate, time: endTime } = extractDateTime(endDateTime);

    if (endDateTime) {
      if (new Date(newStartDateTime) > new Date(endDateTime)) {
        setError('End date must be equal or after the start date.');
      } else if (startDate === endDate && startTime >= endTime) {
        setError('If the dates are the same, the end time must be after the start time.');
      } else {
        setError('');
      }
    }
  };

  const handleEndDateTimeChange = (e) => {
    const newEndDateTime = e.target.value;
    setEndDateTime(newEndDateTime);

    const { date: startDate, time: startTime } = extractDateTime(startDateTime);
    const { date: endDate, time: endTime } = extractDateTime(newEndDateTime);

    if (startDateTime) {
      if (new Date(newEndDateTime) < new Date(startDateTime)) {
        setError('End date must be equal or after the start date.');
      } else if (startDate === endDate && startTime >= endTime) {
        setError('If the dates are the same, the end time must be after the start time.');
      } else {
        setError('');
      }
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!error && startDateTime && endDateTime && title && description) {
      // Submit form data
      console.log('Form submitted:', {
        startDateTime,
        endDateTime,
        title,
        description
      });
      handleClose(); // Close the modal after submitting
    } else {
      setError('Please fill in all fields and fix the errors before submitting.');
    }
  };

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
          className="py-2 px-10 gap-4 absolute top-5"
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
              <p className="font-normal text-black dark:text-gray-400">
                "The greatest glory in living lies not in never falling, but in
                rising every time we fall" - Nelson Mandela
              </p>
            </a>
            <button
              style={{ height: "50%", backgroundColor: "#c6e6e3" }}
              className="text-black hover:bg-green-200 font-bold py-4 px-6 rounded-full"
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
                <form className="absolute mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 gap-8 top-8" style={{
                  width: "92%",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }} onSubmit={handleSubmit}>
                  <div className="max-w-[16rem] mx-auto grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="start-datetime" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Start Date & Time:
                      </label>
                      <div className="relative">
                        <Input
                          type="datetime-local"
                          id="start-datetime"
                          value={startDateTime}
                          onChange={handleStartDateTimeChange}
                          className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="end-datetime" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        End Date & Time:
                      </label>
                      <div className="relative">
                        <Input
                          type="datetime-local"
                          id="end-datetime"
                          value={endDateTime}
                          onChange={handleEndDateTimeChange}
                          className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-1 flex flex-col gap-6">
                    <TextField
                      size="lg"
                      label="New Task Title"
                      value={title}
                      onChange={handleTitleChange}
                      variant="outlined"
                      className="!border-t-blue-gray-200 focus:!border-t-white"
                    />
                    <TextField
                      size="lg"
                      label="Description"
                      value={description}
                      onChange={handleDescriptionChange}
                      variant="outlined"
                      className="!border-t-blue-gray-200 focus:!border-t-white"
                    />
                  </div>
                  {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
                  <div className="absolute top-60 gap-6" style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "35px"
                  }}>
                    <button className="bg-white hover:bg-gray-100 text-gray-600 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                      cancel{" "}
                    </button>
                    <button type="submit" className="bg-white hover:bg-gray-100 text-gray-600 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                      add task{" "}
                    </button>
                  </div>
                </form>
              </Box>
            </Modal>
          </Stack>
          <Scheduler events={updatedEvents} />
        </Stack>
      </Stack>
      <nav
        className="flex-col h-screen bg-neutral-200 w-1/4 px-5"
        style={{ overflow: "auto" }}
      >
        <div className="date">
          <p className="font-normal text-center">{currentDate}</p>
        </div>
        <p className="font-bold text-center">today's schedule</p>
        {updatedEvents.map((event) => {
          const eventDate = new Date(event.start);
          const cardColor = event.color;
          if (eventDate.toDateString() === today.toDateString()) {
            return (
              <Card key={event.event_id} className="rounded-3xl"
                sx={{
                  maxWidth: 400,
                  margin: "10px",
                  backgroundColor: cardColor,
                  overflow: "auto",
                  maxHeight: "300px",
                }}>
                <CardActionArea
                  sx={{ backgroundColor: cardColor }}
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
                      backgroundColor: cardColor,
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
                      className="rounded-3xl"
                      sx={{
                        maxWidth: 600,
                        height: 300,
                        margin: "10px",
                        backgroundColor: cardColor,
                        overflow: "auto",
                        maxHeight: "300px",
                      }}
                    >
                      <CardActionArea
                        sx={{ backgroundColor: cardColor }}
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