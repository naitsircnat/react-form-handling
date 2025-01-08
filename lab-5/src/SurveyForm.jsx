import React, { useState } from "react";

export default function SurveyForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("developer");

  const updateFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const updateLastName = (event) => {
    setLastName(event.target.value);
  };

  const updateEmail = (event) => {
    setEmail(event.target.value);
  };

  const updateRole = (event) => {
    setRole(event.target.value);
  };

  const buttonHandler = () => {
    console.log(
      `First name: ${firstName}, Last name: ${lastName}, Email: ${email}, Role: ${role}`
    );
  };

  return (
    <>
      <div>
        <label>First Name</label>
        <input type="text" value={firstName} onChange={updateFirstName} />
      </div>

      <div>
        <label>Last Name</label>
        <input type="text" value={lastName} onChange={updateLastName} />
      </div>
      <div>
        <label>Email</label>
        <input type="text" value={email} onChange={updateEmail} />
      </div>
      <div>
        <label>Role</label>
        <input
          type="radio"
          value="student"
          name="role"
          onChange={updateRole}
          checked={role == "student"}
        />
        Student
        <input
          type="radio"
          value="educator"
          name="role"
          onChange={updateRole}
          checked={role == "educator"}
        />
        Educator
        <input
          type="radio"
          value="developer"
          name="role"
          onChange={updateRole}
          checked={role == "developer"}
        />
        Developer
      </div>
      <button onClick={buttonHandler}>Submit</button>
    </>
  );
}
