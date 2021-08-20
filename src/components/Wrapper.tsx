import React from "react";
import Box from '@material-ui/core/Box'

interface WrapperProps { }

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <Box color="primary.main"
      maxWidth="800px"
      maxHeight="800px"
      marginX="50px"
      marginY="50px"
      fontFamily="h6.fontFamily">
      {children}
    </Box>
  );
};
