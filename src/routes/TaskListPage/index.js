
import { useCallback, useEffect, useState } from 'react';
import TaskListTable from '../../components/TaskListTable/index.js';
import{
   PageContainer,
   PageTitle
} from './styledComponents.js';
import { getTaskList } from '../../services/tasks.service.js';

const TaskListPage =()=>{

    const [taskList,setTaskList] = useState([]);

    useEffect(()=>{
        fetchTasks()
    },[])

    const fetchTasks = useCallback(()=>{
        getTaskList().then((result)=>{
            setTaskList(result.data)
           })
    },[])

    return (<PageContainer>
        <PageTitle>Task List Page</PageTitle>
        <TaskListTable taskList={taskList} fetchTasks={fetchTasks} />
    </PageContainer>)
}

export default TaskListPage;