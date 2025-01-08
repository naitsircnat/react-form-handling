import React, { useState } from "react";

export default function SurveyForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("developer");
  const [hear, setHear] = useState([]);

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

  const updateHear = (event) => {
    if (event.target.checked) {
      const clone = [...hear, event.target.value];
      setHear(clone);
    } else {
      const indexToDelete = hear.findIndex(function (h) {
        return h === event.target.value;
      });
      const left = hear.slice(0, indexToDelete);
      const right = hear.slice(indexToDelete + 1);
      const clone = [...left, ...right];
      setHear(clone);
    }
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
      {/* radio buttons */}
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
      {/* Checkboxes */}
      <div>
        <label>How did you hear about us?</label>
        <input
          type="checkbox"
          value="email"
          onChange={updateHear}
          checked={hear.includes("email")}
        />
        Email
        <input
          type="checkbox"
          value="social media"
          onChange={updateHear}
          checked={hear.includes("social media")}
        />
        Social media
        <input
          type="checkbox"
          value="ads"
          onChange={updateHear}
          checked={hear.includes("ads")}
        />
        Ads
        <input
          type="checkbox"
          value="word of mouth"
          onChange={updateHear}
          checked={hear.includes("word of mouth")}
        />
        Word of mouth
        <input
          type="checkbox"
          value="others"
          onChange={updateHear}
          checked={hear.includes("others")}
        />
        Others
      </div>
      <button onClick={buttonHandler}>Submit</button>
    </>
  );
}
