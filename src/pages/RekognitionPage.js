import Appbar from "../widgets/Appbar";
import "./RekognitionPage.css";
import { useState } from "react";
const uuid = require("uuid");

function RekognitionPage() {
  const [image, setImage] = useState("");
  const [uploadResultMessage, setUploadResultMessage] = useState("");
  const [imgName, setImgName] = useState("placeholder.jpeg");
  const [isAuth, setIsAuth] = useState(false);

  function sendImage(e) {
    e.preventDefault();
    setImgName(image.name);
    const visitorImageName = uuid.v4();
    console.log(visitorImageName);
    fetch(
      `https://hbnk456s1k.execute-api.us-east-1.amazonaws.com/dev/befit-visitor-images/${visitorImageName}.jpeg`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "image/jpeg",
        },
        body: image,
      }
    )
      .then(async () => {
        const response = await authenticate(visitorImageName);
        if (response.Message === "Success") {
          setIsAuth(true);
          setUploadResultMessage(
            `Hi ${response["firstName"]} ${response["lastName"]}, welcome to Befit! Have a great training!`
          );
        } else {
          setIsAuth(false);
          setUploadResultMessage(
            "Authentication Failed: this person is not in our list."
          );
        }
      })
      .catch((error) => {
        setIsAuth(false);
        setUploadResultMessage(
          "There is an error during the authentication process. Please try again."
        );
        console.log(error);
      });
  }

  async function authenticate(visitorImageName) {
    const requestUrl =
      "https://hbnk456s1k.execute-api.us-east-1.amazonaws.com/dev/customers?" +
      new URLSearchParams({
        objectKey: `${visitorImageName}.jpeg`,
      });
    return await fetch(requestUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((error) => console.log(error));
  }
  return (
    <>
      <div className="App">
        <Appbar />
        <h2>Facial Rekognition System</h2>
        <form onSubmit={sendImage}>
          <div id="marg">
            <label for="images" className="drop-container" id="dropcontainer">
              <input
                type="file"
                name="image"
                id="images"
                accept="image/*"
                required
                onChange={(e) => setImage(e.target.files[0])}
              ></input>
            </label>
          </div>

          <button type="submit" className="button-9">
            Authenticate
          </button>
        </form>
        <div className={isAuth ? "success" : "failure"}>
          {uploadResultMessage}
        </div>

        {imgName === "placeholder.jpeg" ? (
          <div></div>
        ) : (
          <img
            src={require(`../visitors/${imgName}`)}
            alt="Visitor"
            height={150}
            width={150}
          />
        )}
      </div>
    </>
  );
}

export default RekognitionPage;
