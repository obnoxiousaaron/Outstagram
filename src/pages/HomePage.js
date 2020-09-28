import React, { useState, useEffect } from "react";
// import "./HomePage.css";

import axios from "axios";
import UserImages from "../containers/UserImages";
import LoadingIndicator from "../components/LoadingIndicator";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // performing a GET request
    axios
      .get("https://insta.nextacademy.com/api/v1/users")
      .then((result) => {
        // If successful, we do stuffs with 'result'
        setUsers(result.data);
        setIsLoading(false);
      })
      .catch((error) => {
        // If unsuccessful, we notify users what went wrong
        console.log("ERROR: ", error);
      });
  }, []);

  const load = () => {
    if (isLoading) {
      return <LoadingIndicator />;
    } else {
      return;
    }
  };

  return (
    <div>
      {load()}

      <ul className="ul">
        {users.map((user) => (
          <UserImages
            key={user.id}
            id={user.id}
            name={user.username}
            img={user.profileImage}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;