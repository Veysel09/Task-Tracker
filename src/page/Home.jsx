import AddTask from "../components/addTask/AddTask";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const Home = () => {
  const [isOpen, setIsopen] = useState(false);
  const [text, setText] = useState("Show Task Bar");

  const toogle = () => {
    setIsopen(!isOpen);
    const buttonText = isOpen ? "Show Task Bar" : "Hide Text Bar";
    setText(buttonText);
  };
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
      {isOpen && <AddTask />}

      {/* <TaskList task={task} getTask={getTask} /> */}
    </div>
  );
};

export default Home;
