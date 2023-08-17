import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL =
  "https://8a1jmkofhl.execute-api.us-east-1.amazonaws.com/prod/number";

function GetDynamo() {
  const [entries, setEntries] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      const response = await axios.get(API_URL);

      console.log("response: ", response);
      setEntries(response.data.Items);
    } catch (error) {
      console.error("Error fetching entries:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(API_URL, { message });
      setMessage("");
      fetchEntries();
    } catch (error) {
      console.error("Error submitting entry:", error);
    }
  };

  return (
    <div>
      {/* <h1>New entry</h1> */}
      {/* <form onSubmit={handleSubmit}>
        <label htmlFor="msg">Message</label>
        <textarea
          id="msg"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">Submit</button>
      </form> */}
      <div id="entries">
        {entries.map((guestbookItem, index) => (
          <p key={index}>{guestbookItem.message}</p>
        ))}
      </div>
    </div>
  );
}

export default GetDynamo;
