import React from "react";
import Box from '@material-ui/core/Box'
import { styled } from "@material-ui/core";

interface WrapperProps { }

const MyBox = styled(Box)({
  background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',

})
export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <MyBox 
      maxHeight="800px"
      maxWidth="800px"
      marginLeft="25%"
      marginTop="20%"
      p={5}
      borderRadius={16}
    >
      {children}
    </MyBox>
  );
};
