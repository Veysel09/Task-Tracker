import AddTask from "../components/addTask/AddTask"
import Button from "react-bootstrap/Button";


const Home = () => {
  return (
    <div className="mt-4 d-flex justify-content-center flex-column">
      <Button className="bg-dark">
    TEXT
      </Button>
     <AddTask/>
      {/* <TaskList task={task} getTask={getTask} /> */}
    </div>
  );
}

export default Home