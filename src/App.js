import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import SubmitForm from "./SubmitForm";

const apiClient = new ApolloClient({
  uri: "http://localhost:3000/api/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={apiClient}>
      <SubmitForm />
    </ApolloProvider>
  );
}

export default App;
