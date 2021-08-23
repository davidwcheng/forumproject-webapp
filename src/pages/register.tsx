import React from "react";
import { Form, Formik } from "formik";
import { Wrapper } from "../components/Wrapper";
import { InputField } from "../components/InputField";
import { Box, Button } from "@material-ui/core";
import { useRegisterMutation } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";
import { useRouter } from "next/dist/client/router";

interface registerProps {}

export const Register: React.FC<registerProps> = ({}) => {
  const router = useRouter();
  const [{}, register] = useRegisterMutation();
  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={async (values, { setErrors }) => {
          const res = await register(values);
          if (res.data?.register.errors) {
            setErrors(toErrorMap(res.data.register.errors));
          } else if (res.data?.register.user) {
            router.push("/");
          }
        }}
      >
        {() => (
          <Form>
            <InputField
              name="username"
              placeholder="username"
              label="Username"
            ></InputField>
            <Box marginTop={4}>
              <InputField
                name="password"
                placeholder="password"
                label="Password"
                type="password"
              ></InputField>
            </Box>
            <Box mt={4}>
              <Button type="submit" variant="outlined" color="primary">
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
