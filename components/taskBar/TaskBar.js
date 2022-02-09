import React from "react";
import Start from "../icons/Start";
import TaskBarButton from "./taskBarButton/TaskBarButton";

const TaskBar = () => {
  return (
    <div className="task-bar bottom">
      <TaskBarButton tooltip='Start'>
        <Start />
      </TaskBarButton>
    </div>
  );
};

export default TaskBar;
