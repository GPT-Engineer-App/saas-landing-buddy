import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";

const Pricing = () => {
  return (
    <Box p={4}>
      <Button colorScheme="blue" onClick={() => (window.location.href = "/")}>
        Go Home
      </Button>
      <Text mt={4}>Welcome to the Pricing Page!</Text>
    </Box>
  );
};

export default Pricing;
