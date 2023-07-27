import React, { useEffect, useState } from "react";
import { Box, Heading } from "@chakra-ui/react";
import SingleCard from "./SingleCard";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Box p="4">
      <Heading>Posts</Heading>
      {/* Add your posts content here */}

      {posts?.map((ele) => (
        <SingleCard ele={ele} />
      ))}
    </Box>
  );
};

export default Posts;
