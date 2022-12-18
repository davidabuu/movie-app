import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Header = () => {
  return (
    <Flex justifyContent={{ base: "center", lg: "flex-start" }} bgColor='#292929' px={'40px'} py='20px'>
      <Box color='#E5E5E5' border='1px solid #E5E5E5' p='10px'>
        <Text>MyTextApp</Text>
      </Box>
    </Flex>
  );
};

export default Header;
