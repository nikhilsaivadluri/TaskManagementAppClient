import { styled } from 'styled-components';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';

export const Container = styled.div`
    width: calc(50% - 100px);
    padding: 50px;
    flex-direction: column;
`;

export const TaskRow = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin: 14px 7px;
    padding: 12px 0px;
    font-size: 24px !important;
    letter-spacing: 0px;
    text-decoration: ${props=>props.completed?"line-through":"none"};
    cursor: pointer;
`;

export const TaskTitleContainer = styled.div`
    text-align: left;
    color: #537178;
    opacity: 1;
    padding-left: 0px !important;
    text-decoration: ${props=>props.completed?"line-through":"none"};
`;

export const TaskStatusCheckbox = styled(Checkbox)`
  color : ${props=>props.checked?"#537178 !important":"none"};
`;

export const TaskNameWrapper = styled.div`
   width: 65%;
   display: flex;
   align-items: center;
`;

export const TaskDueDateWrapper = styled.div`
   width :20%;
   display: flex;
   justify-content: center;
`;

export const TaskActions = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 14%;
`;

export const TaskNameHeader = styled.span`
    margin-left: 42px;
`;


export const CreateTaskButton = styled(Button)`
    position: relative;
    left: calc(100% - 140px);
`;