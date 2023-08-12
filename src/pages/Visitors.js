import React from "react";
import AppBar from "../widgets/Appbar";
import App from "../App";
const Visitors = () => {
  return (
    <div>
      <AppBar />
      <div class="customers-content">
        <h2>Our Visitors Entering</h2>
        <table class="customer-table">
          <tr>
            <th>Photo</th>
            <th>date and time</th>
          </tr>
          <tr>
            <td>
              <img
                src="https://picsum.photos/200/200"
                alt="John Doe's picture"
              />
            </td>
            <td>08/08/2023 12:35:31</td>
          </tr>
          <tr>
            <td>
              <img
                src="https://picsum.photos/200/200"
                alt="Jane Doe's picture"
              />
            </td>
            <td>08/08/2023 12:34:05</td>
          </tr>
          <tr>
            <td>
              <img
                src="https://picsum.photos/200/200"
                alt="Peter Smith's picture"
              />
            </td>
            <td>08/08/2023 12:33:33</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Visitors;
