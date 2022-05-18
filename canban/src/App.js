import { useEffect, useState } from "react";
import "./App.css";
import DropdownWithAvatar from "./components/DropdownWithAvatar";
import Backlog from "./components/Backlog";
import DropdownBlog from "./components/DropDownBlog";
import Description from "./components/Desription";
import { Routes, Route } from "react-router-dom";

function App() {
  const [backlogData, setBacklogData] = useState(
    JSON.parse(localStorage.getItem("Backlog"))
      ? JSON.parse(localStorage.getItem("Backlog"))
      : {
          title: "Backlog",
          issues: [],
          currentTasks: [],
        }
  );

  const [readyData, setReadyData] = useState(
    JSON.parse(localStorage.getItem("Ready"))
      ? JSON.parse(localStorage.getItem("Ready"))
      : {
          title: "Ready",
          issues: [],
          currentTasks: [],
        }
  );

  const [inProgressData, setInProgressData] = useState(
    JSON.parse(localStorage.getItem("In Progress"))
      ? JSON.parse(localStorage.getItem("In Progress"))
      : {
          title: "In Progress",
          issues: [],
          currentTasks: [],
        }
  );

  const [finishedData, setFinishedData] = useState(
    JSON.parse(localStorage.getItem("Finished"))
      ? JSON.parse(localStorage.getItem("Finished"))
      : {
          title: "Finished",
          issues: [],
          currentTasks: [],
        }
  );

  const [clickedTask, setClickedTask] = useState([
    {
      name: "mock",
      description: "mock",
      id: 0,
    },
    "mockTitle",
  ]);

  const onClickLink = (task, title) => {
    setClickedTask([task, title]);
  };

  const confirmChangedTask = (task) => {
    const confirmedId = task.id;
    switch (clickedTask[1]) {
      case "Backlog":
        const findedBackLogTask = backlogData.currentTasks.find(
          (task) => task.id === confirmedId
        );
        const indexBacklogTask =
          backlogData.currentTasks.indexOf(findedBackLogTask);
        const copyBacklogCurrentTasks = [...backlogData.currentTasks];
        copyBacklogCurrentTasks.splice(indexBacklogTask, 1, task);
        setBacklogData((prevState) => ({
          ...prevState,
          issues: copyBacklogCurrentTasks,
          currentTasks: copyBacklogCurrentTasks,
        }));
        break;
      case "Ready":
        const findedReadyTask = readyData.currentTasks.find(
          (task) => task.id === confirmedId
        );
        const indexReadyTask = readyData.currentTasks.indexOf(findedReadyTask);
        const copyReadyCurrentTasks = [...readyData.currentTasks];
        copyReadyCurrentTasks.splice(indexReadyTask, 1, task);
        setReadyData((prevState) => ({
          ...prevState,
          currentTasks: copyReadyCurrentTasks,
        }));
        break;
      case "In Progress":
        const findedInProgressTask = inProgressData.currentTasks.find(
          (task) => task.id === confirmedId
        );
        const indexInProgressTask =
          inProgressData.currentTasks.indexOf(findedInProgressTask);
        const copyInProgressCurrentTasks = [...inProgressData.currentTasks];
        copyInProgressCurrentTasks.splice(indexInProgressTask, 1, task);
        setInProgressData((prevState) => ({
          ...prevState,
          currentTasks: copyInProgressCurrentTasks,
        }));
        break;
      case "Finished":
        const findedFinishedTask = finishedData.currentTasks.find(
          (task) => task.id === confirmedId
        );
        const indexFinishedTask =
          finishedData.currentTasks.indexOf(findedFinishedTask);
        const copyFinishedCurrentTasks = [...finishedData.currentTasks];
        copyFinishedCurrentTasks.splice(indexFinishedTask, 1, task);
        setFinishedData((prevState) => ({
          ...prevState,
          currentTasks: copyFinishedCurrentTasks,
        }));
        break;
      default:
    }
  };

  useEffect(() => {
    localStorage.setItem("Backlog", JSON.stringify(backlogData));
    localStorage.setItem("Ready", JSON.stringify(readyData));
    localStorage.setItem("In Progress", JSON.stringify(inProgressData));
    localStorage.setItem("Finished", JSON.stringify(finishedData));
  }, [backlogData, readyData, inProgressData, finishedData]);

  useEffect(() => {
    setReadyData((prevState) => ({
      ...prevState,
      issues: backlogData.currentTasks,
    }));
  }, [backlogData]);

  useEffect(() => {
    setBacklogData((prevState) => ({
      ...prevState,
      issues: readyData.issues,
      currentTasks: readyData.issues,
    }));
    setInProgressData((prevState) => ({
      ...prevState,
      issues: readyData.currentTasks,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [readyData.currentTasks]);

  useEffect(() => {
    setInProgressData((prevState) => ({
      ...prevState,
      currentTasks: finishedData.issues,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finishedData.currentTasks]);

  useEffect(() => {
    setFinishedData((prevState) => ({
      ...prevState,
      issues: inProgressData.currentTasks,
    }));
  }, [inProgressData.currentTasks]);
  return (
    <div className="app-container">
      <header className="header">
        <div className="logo">
          <span>Awesome Kanban Board</span>
        </div>
        <DropdownWithAvatar />
      </header>
      <main className="main">
        <Backlog
          data={backlogData}
          setBacklogData={setBacklogData}
          onClickLink={onClickLink}
        />
        <DropdownBlog
          data={readyData}
          setReadyData={setReadyData}
          setInProgressData={setInProgressData}
          onClickLink={onClickLink}
        />
        <DropdownBlog
          data={inProgressData}
          setReadyData={setReadyData}
          setInProgressData={setInProgressData}
          setFinishedData={setFinishedData}
          onClickLink={onClickLink}
        />
        <DropdownBlog
          data={finishedData}
          setReadyData={setReadyData}
          setInProgressData={setInProgressData}
          setFinishedData={setFinishedData}
          onClickLink={onClickLink}
        />
        <Routes>
          <Route path="/" element={""}></Route>
          <Route
            path={`/${clickedTask[0].id}`}
            element={
              <Description
                task={clickedTask ? clickedTask[0] : "no Descritpion"}
                confirmChangedTask={confirmChangedTask}
              />
            }
          ></Route>
        </Routes>
      </main>
      <footer className="footer">
        <div>
          <span>
            Active Tasks :{" "}
            {backlogData.issues.length ? backlogData.issues.length : 0}{" "}
          </span>{" "}
          <span>Finished Tasks : {finishedData.currentTasks.length}</span>
        </div>
        <div>
          <span>Kanban board by Dmitriy,2022</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
