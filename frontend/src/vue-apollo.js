import Vue from "vue";
import VueApollo from "vue-apollo";
import { createApolloClient } from "vue-cli-plugin-apollo/graphql-client";

Vue.use(VueApollo);

const httpEndpoint =
  process.env.VUE_APP_GRAPHQL_HTTP || "http://localhost:4000/graphql";

export const filesRoot =
  process.env.VUE_APP_FILES_ROOT ||
  httpEndpoint.substr(0, httpEndpoint.indexOf("/graphql"));

Vue.prototype.$filesRoot = filesRoot;

export const createProvider = () => {
  const { apolloClient } = createApolloClient({
    httpEndpoint: "http://localhost:4000/graphql"
  });

  const apolloProvider = new VueApollo({
    defaultClient: apolloClient
  });

  return apolloProvider;
};

export const onLogin = async () => {};
