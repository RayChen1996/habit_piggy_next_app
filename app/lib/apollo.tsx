"use client";

import React from "react";
import { ApolloProvider } from "@apollo/client";
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
// NOTE zustand
// import useTokenStore from "@/zustand/useTokenStore";

import useTokenStore from "../store/userToken";

const httpLink = createHttpLink({
  uri: "https://current--sgrice.apollographos.net/graphql",
  credentials: "same-origin",
});

export const authLink = setContext((_, { headers }) => {
  //   const token = useTokenStore.getState().token;
  const token = "";
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  connectToDevTools: process.env.NODE_ENV !== "production",
});

export default function Apollo({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
