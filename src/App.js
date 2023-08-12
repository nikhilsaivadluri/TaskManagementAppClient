import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AppHeadingBar from './components/AppHeadingBar';
import TaskDescriptionPage from './routes/TaskDescriptionPage';
import TaskListPage from './routes/TaskListPage';
import LoginPage from "./routes/LoginPage";

const router = createBrowserRouter([
  {
    path:"*",
    element: <LoginPage />,
    redirect:"/login"
  },
  {
      path:"/login",
      element: <LoginPage />,
  },
  {
    path: "/tasks",
    element: <TaskListPage />,
  },
  {
    path: "/tasks/:taskId",
    element: <TaskDescriptionPage />,
  },
]);

function App() {
 
  return (
    <div className="App" style={{ backgroundColor:"#e5e5e5", minHeight:"100vh"}}>
      <AppHeadingBar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
