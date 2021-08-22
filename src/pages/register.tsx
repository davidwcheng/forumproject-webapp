import React from "react";
import { Form, Formik } from "formik";
import { Wrapper } from "../components/Wrapper";
import { InputField } from "../components/InputField";
import { Box, Button } from "@material-ui/core";

interface registerProps { }

export const Register: React.FC<registerProps> = ({ }) => {
  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form>
            <InputField
              name="username"
              placeholder="username"
              label="Username">
            </InputField>
            <Box marginTop={4}>
              <InputField
                name="password"
                placeholder="password"
                label="Password"
                type="password">
              </InputField>
            </Box>
            <Box mt={4}>
              <Button
                type="submit"
                variant="outlined"
                color="primary"
              >
                Register
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Wrapper>

  );
};

export default Register;
