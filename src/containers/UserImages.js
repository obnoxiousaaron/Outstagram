import React, { useState, useEffect } from "react";
import Image from "react-graceful-image";
import { Link } from "react-router-dom";
import axios from "axios";

export default function UserImages({ id, name, img }) {
  const idLink = `users/${id}`;

  const [images, setImages] = useState([]);

  useEffect(() => {
    // performing a GET request
    axios
      .get(`https://insta.nextacademy.com/api/v1/images?userId=${id}`)
      .then((result) => {
        // If successful, we do stuffs with 'result'

        setImages(result.data);
      })
      .catch((error) => {
        // If unsuccessful, we notify users what went wrong
        console.log("ERROR: ", error);
      });
  }, [id]);

  console.log(images);

  return (
    <li
      style={{
        listStyleType: "none",
        fontWeight: "bold",
        marginBottom: "20px",
        height: "100%",
        display: "flex",
        fontSize: "30px",
        textAlign: "center",
      }}
      key={id}
      >
      <div className="leftcontainer">
        <div className="userName">{name}</div>
        <div>
          <div>
            <Image
            className="profileImage"
            alt={name}
            src={img}
            width="250"
            height="250"
            style={{ padding: "20px" }}
            retry={{ count: 10, delay: 2 }}
            />
          </div>
          <Link className="button" to={idLink}>
            See More
          </Link>
        </div>
      </div>
      <div className=".image-container-parent">
        <hr></hr>
        <div className="image-container">
          {images.map((image) => (
            <div>
              <img alt={`The only @${name}`} className="userPosts" src={image} />
            </div>
          ))}
        </div>
        <hr></hr>
      </div>        
    </li>
  );
}
