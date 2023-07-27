import { Button } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";

const Card = ({ ele }) => {
  console.log(ele);

  const handleUpdate = () => {
    let firstname = prompt("enter firstName");
    let lastname = prompt("enter lastName");

    axios
      .patch(`https://jsonplaceholder.typicode.com/posts/update/${ele.id}}`, {
        firstname,
        lastname,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const handleDelete = () => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/delete/${ele.id}}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1>{ele.id}</h1>
      <h1>{ele.title}</h1>
      <Button onClick={handleUpdate}>Update</Button>
      <Button onClick={handleDelete}>Delete</Button>
    </>
  );
};

export default Card;
