import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
	uri: "http://localhost:9000/graphql", // Reemplaza con la URL de tu API Gateway
	cache: new InMemoryCache(),
});

export default client;
