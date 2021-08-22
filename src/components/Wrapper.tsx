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
      maxWidth="800px"
      marginX="auto"
      marginTop={8}
      borderRadius={8}
    >
      {children}
    </MyBox>
  );
};
