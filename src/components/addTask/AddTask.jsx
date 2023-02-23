import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import axios from "axios";



const AddTask = () => {
  return (
    <div>
      <Form >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Task</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter task"
            // onChange={(e) => setTask(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
        <div className="text-center">
          <Button variant="primary w-50 " type="submit" className="bg-dark">
            SAVE
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default AddTask