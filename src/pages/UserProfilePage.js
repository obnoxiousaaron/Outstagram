import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UserProfilePage = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [name, setName] = useState([]);
  const [image, setImage] = useState();

  useEffect(() => {
    // performing a GET request
    axios
      .get(`https://insta.nextacademy.com/api/v1/images?userId=${id}`)
      .then((result) => {
        // If successful, we do stuffs with 'result'

        setData(result.data);
      })
      .catch((error) => {
        // If unsuccessful, we notify users what went wrong
        console.log("ERROR: ", error);
      });
  }, [id]);

  useEffect(() => {
    // performing a GET request
    axios
      .get(`https://insta.nextacademy.com/api/v1/users/${id}`)
      .then((result) => {
        // If successful, we do stuffs with 'result'

        setName(result.data.username);
        setImage(result.data.profileImage);
      })
      .catch((error) => {
        // If unsuccessful, we notify users what went wrong
        console.log("ERROR: ", error);
      });
  }, [id]);

  return (
    <div className="bgdiv">
      <div className="imgCont">
        <div className="userProfile">          
          <img alt={`${name}`} src={image} />
          <h1>@{name}</h1>
        </div>
        <div className="userPostCont">
          {data.map((src, index) => {
            return <img alt={index} key={index} src={src} />;
          })}          
        </div>
      </div>
      </div>
  );
};

export default UserProfilePage;
