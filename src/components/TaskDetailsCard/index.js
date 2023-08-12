import { useCallback, useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import {
  deleteTaskById,
  getTaskDetailsById,
  updateTaskDetailsById,
  createNewTask
} from "../../services/tasks.service";
import DatePickerValue from "../DatePicker";
import dayjs from "dayjs";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";

import {
  FormTextField,
  EditIcon,
  DeleteIcon,
  GoBackIcon,
  CardActions,
  CardContainer,
  CardContent,
  CardHeader,
  CardFooter,
  CompletionStatusChip,
  SelectStatusChip,
  CompletionStatusLabel,
  DueDateWrapper,
  TitleLabel,
  DescriptionLabel,
  FormSubmitButtons,
} from "./styledComponents";

const intitialTaskDetailState = {
    taskId: null,
    title:null,
    description: null,
    dueDate:null,
    completed: false
}

const TaskDetailsCard = ({ taskId,isCreateMode }) => {
  const [taskDetails, setTaskDetails] = useState(null);
  const [editTaskDetails, setEditTaskDetails] = useState(intitialTaskDetailState);
  const [isEditMode, setIsEditMode] = useState(isCreateMode);
  const navigate = useNavigate();

  useEffect(() => {
    if(!isCreateMode)
    fetchTaskDetails(taskId);
  }, []);

  const fetchTaskDetails = useCallback((taskId) => {
    getTaskDetailsById(taskId)
      .then((result) => {
        setTaskDetails(result?.data);
      })
      .catch(({ response }) => {
        alert(response?.data.error);
      });
  }, []);

  const deleteTask = () => {
    deleteTaskById(taskId)
      .then((result) => {
        alert(result?.data?.message);
        navigate("/tasks");
      })
      .catch(({ response }) => {
        console.error(response?.data);
        alert(response?.data.error);
      });
  };

  const onDueDateChange = (dueDate) => {
    setEditTaskDetails({
      ...editTaskDetails,
      dueDate: dueDate.format("DD-MM-YYYY"),
    });
  };

  const onEditClick = () => {
    setIsEditMode(true);
    setEditTaskDetails(taskDetails);
  };

  const onCancel = ()=>{
    setIsEditMode(false);
    setEditTaskDetails(intitialTaskDetailState);
    if(isCreateMode)
    navigate('/tasks')
  }

  const onSaveTask = ()=>{
    if(!editTaskDetails.title?.length){
      alert('Title of task is required!')
      return;
    }

    if(!editTaskDetails.dueDate){
      alert('Due date of task is required!')
      return;
    }


    if(isCreateMode){
      createNewTask({...editTaskDetails,test:"w2"})
      .then((result) => {
          alert("Task created successfully!");
          setIsEditMode(false);
          setTaskDetails(result?.data);
          setEditTaskDetails(intitialTaskDetailState);
        })
        .catch(({ response }) => {
          console.error(response?.data);
          alert(response?.data.error);
        });
    }
    else{
    updateTaskDetailsById(taskId,editTaskDetails)
    .then((result) => {
        alert("Updated successfully!");
        setIsEditMode(false);
        setTaskDetails(result?.data);
        setEditTaskDetails(intitialTaskDetailState);
      })
      .catch(({ response }) => {
        console.error(response?.data);
        alert(response?.data.error);
      });
    }
  }

  const onInputChange = (event)=>{
     const { name, value } = event.target;
     setEditTaskDetails({
        ...editTaskDetails,
        [name]: value
     })
  }
  
  const taskStatusChange = (status)=>{
    setEditTaskDetails({
        ...editTaskDetails,
        completed: status==="Completed"
     })
  }
  
  

  if (!taskDetails && !isCreateMode) return null;

  return (
    <CardContainer>
      <Paper elevation={3}>
        <CardContent>
          <CardHeader>
            <IconButton style={{ marginLeft: "-12px" }}>
              <GoBackIcon onClick={() => navigate("/tasks")} />
            </IconButton>
            {!isCreateMode &&
            <CardActions>
              <IconButton>
                <EditIcon onClick={onEditClick} />
              </IconButton>
              <IconButton>
                <DeleteIcon onClick={deleteTask} />
              </IconButton>
            </CardActions>}
          </CardHeader>
          {!isEditMode ? (
            <>
              <TitleLabel>Title:</TitleLabel>
              <span>{taskDetails.title}</span>
            </>
          ) : (
            <FormTextField
              id="outlined-basic"
              label="Title"
              value={editTaskDetails.title}
              variant="outlined"
              name="title"
              onChange={onInputChange}
            />
          )}
          {!isEditMode ? (
            <>
              <DescriptionLabel>Description</DescriptionLabel>
              <p>{taskDetails.description}</p>
            </>
          ) : (
            <FormTextField
              id="outlined-multiline-flexible"
              label="Description"
              value={editTaskDetails.description}
              multiline
              placeholder="Description"
              rows={4}
              name="description"
              onChange={onInputChange}
            />
          )}
          <DueDateWrapper>
            <DatePickerValue
              label="Due date"
              disablePast ={isCreateMode}
              dateValue={dayjs(isEditMode?editTaskDetails.dueDate:taskDetails.dueDate,"DD-MM-YYYY")}
              onDateChange={onDueDateChange}
              disabled={!isEditMode}
              format={"DD-MM-YYYY"}
            />
          </DueDateWrapper>
          {!isEditMode ? (
            <>
              <CompletionStatusLabel>Completion status</CompletionStatusLabel>
              <CompletionStatusChip
                label={taskDetails.completed ? "Completed" : "Not Completed"}
              />
            </>
          ) : (
            <div>
              <SelectStatusChip
                label="Not completed"
                variant={!editTaskDetails.completed ? "filled" : "outlined"}
                color={!editTaskDetails.completed ? "primary" : "success"}
                onClick={()=>taskStatusChange("Not completed")}
              />
              <SelectStatusChip
                label="Completed"
                variant={editTaskDetails.completed ? "filled" : "outlined"}
                color={editTaskDetails.completed ? "primary" : "success"}
                onClick={()=>taskStatusChange("Completed")}
              />
            </div>
          )}
          {isEditMode &&
          <CardFooter>
            <FormSubmitButtons
              variant="contained"
              disableElevation
              type="cancel"
              onClick={onCancel}
            >
              Cancel
            </FormSubmitButtons>
            <FormSubmitButtons
              variant="contained"
              disableElevation
              type="submit"
              onClick={onSaveTask}
            >
              Save
            </FormSubmitButtons>
          </CardFooter>}
        </CardContent>
      </Paper>
    </CardContainer>
  );
};

export default TaskDetailsCard;
