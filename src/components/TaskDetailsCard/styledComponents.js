import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Button, Chip, TextField } from "@mui/material";
import { styled } from 'styled-components';


export const CardActions = styled.div`
     display: flex;
     justify-content: flex-end;
`;

export const CardHeader = styled.div`
      display: flex;
     justify-content: space-between;
`;

export const GoBackIcon = styled(KeyboardBackspaceIcon)`
   color: #746e6e;
   margin: 5px;
`;

export const EditIcon = styled(EditNoteOutlinedIcon)`
   color: #746e6e;
   margin: 5px;
`;

export const DeleteIcon = styled(DeleteOutlinedIcon)`
   color: #746e6e;
   margin: 5px;
`;

export const CardContainer = styled.div`
   width: 700px;
`;

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 28px;
    font-size: 18px;
`;

export const TitleLabel = styled.span`
    font-size: 22px;
    color: #746e6e;
    margin-top: 12px;
    margin-bottom: 12px;
`;

export const DescriptionLabel = styled.span`
    font-size: 22px;
    color: #746e6e;
    margin-top: 12px;
    margin-bottom: -9px;
`;

export const CompletionStatusLabel = styled.span`
    font-size: 22px;
    color: #746e6e;
    margin-top: 12px;
    margin-bottom: 12px;
`;

export const DueDateWrapper = styled.div`
    width: 180px;
    margin-top: 16px !important;
    margin-bottom: 16px !important;
`;

export const FormTextField  = styled(TextField)`
    margin-top: 16px !important;
    margin-bottom: 16px !important;
`;

export const CompletionStatusChip = styled(Chip)`
    width: fit-content;
    margin-right: 5px !important;
`;

export const SelectStatusChip = styled(CompletionStatusChip)`
    cursor: pointer !important;
`;


export const CardFooter = styled.div`
   display: flex;
   justify-content: flex-end;
`;

export const FormSubmitButtons = styled(Button)`
   margin:3px !important;
   background-color : ${props=>props.type==="submit"?"#1976d2":"#dfd8d8"} !important;
`;