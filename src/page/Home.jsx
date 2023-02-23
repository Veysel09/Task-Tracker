import AddTask from "../components/addTask/AddTask";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import TaskList from "../components/taskList/TaskList";
import axios from "axios";

const Home = () => {
  const [isOpen, setIsopen] = useState(false);
  const [text, setText] = useState("Show Task Bar");
  const [task, setTask] = useState([]);
  const url = "https://6351820edfe45bbd55c21b4d.mockapi.io/api/tasks";

  const toogle = () => {
    setIsopen(!isOpen);
    const buttonText = isOpen ? "Show Task Bar" : "Hide Text Bar";
    setText(buttonText);
  };

  const getTask = async () => {
    const {data} = await axios(url);
    setTask(data);
    console.log(data);
  };
  useEffect(() => {
    getTask();
  }, []);

  return (
    <div className="mt-4 d-flex justify-content-center flex-column">
      <Button
        className="bg-dark"
        onClick={() => {
          toogle();
        }}
        variant="danger"
      >
        {text}
      </Button>
      {isOpen && <AddTask getTask={getTask} />}

      <TaskList  />
    </div>
  );
};

export default Home;
