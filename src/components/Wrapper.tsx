import React from "react";
import Box from '@material-ui/core/Box'
import { styled } from "@material-ui/core";

interface WrapperProps {
  variant?: "small" | "regular" //optional size for user registration
}

const MyBox = styled(Box)({
  background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',

})
export const Wrapper: React.FC<WrapperProps> = ({ children, variant = "regular" }) => {
  return (
    <MyBox
      maxWidth={variant === "regular" ? "800px" : "400px"}
      width="100%"
      marginX="auto"
      marginTop={8}
      borderRadius={8}
    >
      {children}
    </MyBox>
  );
};
