import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

const CalculateSuccess = () => {
  const [message, setMessage] = useState(null);

  const handleClick = () => {
    setMessage(
      "This loan has a 67% chance of being full repaid. The chances would be 10% greater, if the time in business was more than 5 years"
    );
  };

  return (
    <div>
      <form>
        <div className="form-group mx-auto" style={{ width: "75%" }}>
          <input className="form-control" placeholder="State"></input>
        </div>
        <div className="form-group mx-auto" style={{ width: "75%" }}>
          <input className="form-control" placeholder="Industry"></input>
        </div>
        <div className="form-group mx-auto" style={{ width: "75%" }}>
          <input className="form-control" placeholder="Position"></input>
        </div>
        <div className="form-group mx-auto" style={{ width: "75%" }}>
          <input className="form-control" placeholder="Loan range"></input>
        </div>
        <div className="form-group mx-auto" style={{ width: "75%" }}>
          <input
            className="form-control"
            placeholder="Time in business"
          ></input>
        </div>
        <div className="form-group mx-auto" style={{ width: "75%" }}>
          <input className="form-control" placeholder="Factor range"></input>
        </div>
        <div className="form-group mx-auto" style={{ width: "75%" }}>
          <input className="form-control" placeholder="Credit score"></input>
        </div>
      </form>
      <Button variant="primary" onClick={handleClick}>
        Calculate Success
      </Button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CalculateSuccess;
