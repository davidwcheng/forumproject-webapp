import { Button } from "@chakra-ui/react";
import { Box, Link } from "@material-ui/core";
import NLink from "next/link";
import React from "react";
import { useMeQuery } from "../generated/graphql";

interface NavigationBarProps {}

export const NavigationBar: React.FC<NavigationBarProps> = ({}) => {
  const [{ data, fetching }] = useMeQuery();
  var body = null;

  if (fetching) {
      body = null;
  } else if (!data?.me) {
    body = (
      <>
        <Box mr={2}>
          <NLink href="/register">
            <Link>Register</Link>
          </NLink>
        </Box>
        <Box mr={2}>
          <NLink href="/login">
            <Link>Login</Link>
          </NLink>
        </Box>
      </>
    );
  } else {
    body = (
      <Box display="flex">
        <Box mr={2}>{data.me.username}</Box>
        <Button variant="link">Logout</Button>
      </Box>
    );
  }

  return (
    <Box
      display="flex"
      flexDirection="row-reverse"
      bgcolor="teal"
      p={4}
      ml={"auto"}
    >
      {body}
    </Box>
  );
};
