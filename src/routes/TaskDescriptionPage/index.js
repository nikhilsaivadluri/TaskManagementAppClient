import { useParams } from 'react-router-dom';
import TaskDetailsCard from '../../components/TaskDetailsCard';

import{
    PageContainer,
    PageTitle
 } from './styledComponents.js';


const TaskDescriptionPage = (props)=>{
   const { taskId } = useParams();

    return (<PageContainer>
        <PageTitle>{taskId==="create"?"Create New Task":"Task details"}</PageTitle>
        <TaskDetailsCard taskId={taskId} isCreateMode={taskId==="create"}/>
    </PageContainer>)
}

export default TaskDescriptionPage;