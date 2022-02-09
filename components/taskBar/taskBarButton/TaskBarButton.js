const TaskBarButton = ({ children, tooltip }) => {
  return (
    <button className="task-bar__button" data-tooltip={tooltip}>
      {children}
    </button>
  );
};

export default TaskBarButton;
