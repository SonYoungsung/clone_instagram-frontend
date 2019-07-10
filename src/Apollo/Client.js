import ApolloClient from "apollo-boost";
import { defaults, resolvers } from "./LocalState";

export default new ApolloClient({
  //graphql 서버와 연결
  uri: "http://localhost:4000",
  clientState: {
    defaults,
    resolvers
  },
  // header: {
  //   Authorization: `Bearer ${localStorage.getItem("token")}`
  // }
  request: async operation => {
    const token = await localStorage.getItem("token");
    operation.setContext({
      headers: {
        Authorization: token ? `Bearer ${token}` : ""
      }
    });
  }
});
