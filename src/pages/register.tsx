import React from "react";
import { Form, Formik } from "formik";
import {
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Wrapper } from "../components/Wrapper";
interface registerProps { }

export const Register: React.FC<registerProps> = ({ }) => {
  return (
    <Wrapper>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(values, handleChange) => (
          <Form>
            <FormControl>
              <FormLabel htmlFor="username" color="blue.700" fontSize="20px">Username</FormLabel>
              <Input
                color="blue.700"
                value={values.username}
                onChange={handleChange}
                id="username"
                placeholder="username"
              />
              {/* <FormErrorMessage>{form.errors.name}</FormErrorMessage> */}
            </FormControl>
          </Form>
        )}
      </Formik>
    </Wrapper>

  );
};

export default Register;
