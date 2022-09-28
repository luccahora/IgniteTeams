import React from "react";
import { Container, Message } from "./styles";

type Props = {
  message: string;
};

export function ListEmpty({ message }: Props) {
  return (
    <Container>
      <Message></Message>
      {message}
    </Container>
  );
}
