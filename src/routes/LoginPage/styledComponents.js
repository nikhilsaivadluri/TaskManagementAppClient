import { Button,TextField } from '@mui/material';
import { styled } from 'styled-components';

export const PageContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    height: 85vh;
    justify-content: center;
`;

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
`;

export const CardTitle = styled.span`
    font-size: 20px;
    font-weight: 600;
`;

export const LoginFormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    
`;

export const FormTextField  = styled(TextField)`
    margin-top: 16px !important;
    margin-bottom: 16px !important;
`;

export const LoginButton = styled(Button)`
   margin:3px !important;
`;