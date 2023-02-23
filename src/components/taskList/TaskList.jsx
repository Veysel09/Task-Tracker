import { RiDeleteBack2Fill } from "react-icons/ri";

const TaskList = () => {
  return (
    <div className="mt-2 d-flex justify-content-between bg-secondary rounded-2 p-2">
      <div>
        <h4>task</h4>
        <p>date</p>
      </div>
      <div>
        <RiDeleteBack2Fill
          style={{
            cursor: "pointer",
            marginRight: "20px",
            fontSize: "2rem",
            boxShadow: "2px 2px 2px #ECAB9E",
          }}
        />
      </div>
    </div>
  );
};

export default TaskList;
