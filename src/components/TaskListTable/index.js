import DeleteIcon from "@mui/icons-material/Delete";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";

import {
  Container,
  CreateTaskButton,
  TaskNameHeader,
  TaskActions,
  TaskStatusCheckbox,
  TaskNameWrapper,
  TaskDueDateWrapper,
  TaskRow,
} from "./styledComponents";
import { deleteTaskById } from "../../services/tasks.service";

const TaskListTable = ({ taskList, fetchTasks }) => {
  const navigate = useNavigate();

  const deleteTask = (taskId) => {
    deleteTaskById(taskId)
      .then((result) => {
        alert(result?.data?.message);
        fetchTasks();
      })
      .catch(({ response }) => {
        console.error(response?.data);
        alert(response?.data.error);
      });
  };

  return (
    <Container>
      <CreateTaskButton variant="outlined" onClick={()=>navigate('/tasks/create')}>+Create Task</CreateTaskButton>
      <Paper>
        <TaskRow>
          <TaskNameWrapper>
            <TaskNameHeader>Task Name</TaskNameHeader>
          </TaskNameWrapper>
          <TaskDueDateWrapper> Due Date</TaskDueDateWrapper>
          <TaskActions> Actions</TaskActions>
        </TaskRow>
      </Paper>
      {taskList.map((task, index) => {
        return (
          <Paper key={task.taskId} elevation={3}>
            <TaskRow
              completed={task.completed}
              onClick={() => navigate(`/tasks/${task.taskId}`)}
            >
              <TaskNameWrapper>
                <TaskStatusCheckbox checked={task.completed} disabled />
                {task.title}
              </TaskNameWrapper>
              <TaskDueDateWrapper>{task.dueDate}</TaskDueDateWrapper>
              <TaskActions>
                <DeleteIcon
                  height="16px"
                  width="16px"
                  alt="trash"
                  onClick={(e) => {
                     e.preventDefault()
                     e.stopPropagation()
                    deleteTask(task.taskId);
                  }}
                />
              </TaskActions>
            </TaskRow>
          </Paper>
        );
      })}
    </Container>
  );
};

export default TaskListTable;
