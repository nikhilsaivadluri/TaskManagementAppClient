import Paper from "@mui/material/Paper";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/login.service";
import {
    CardContent,
    CardTitle,
    FormTextField,
    LoginButton,
    LoginFormWrapper,
    PageContainer,
} from "./styledComponents";

const LoginPage = () => {
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    if (!userName?.length) {
      alert("Username is required!");
      return;
    }

    if (!password?.length) {
      alert("Password is required!");
      return;
    }

    loginUser({ userName, password }).then((response) => {
        localStorage.setItem("ACCESS_TOKEN", response.data.token);
        localStorage.setItem("CURRENT_USER", response.data.userName);
        navigate('/tasks')
      }).catch(({response}) => {
        alert(response?.data?.error);
      })
  };

  return (
    <PageContainer>
      <Paper elevation={3}>
        <CardContent>
          <CardTitle>Login</CardTitle>
          <LoginFormWrapper>
            <FormTextField
              type="text"
              variant="outlined"
              label="UserName"
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
              placeholder="UserName"
            />
            <FormTextField
              type="password"
              variant="outlined"
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Password"
            />
            <LoginButton
              onClick={handleLogin}
              color="primary"
              variant="contained"
            >
              Login
            </LoginButton>
          </LoginFormWrapper>
        </CardContent>
      </Paper>
    </PageContainer>
  );
};
export default LoginPage;
