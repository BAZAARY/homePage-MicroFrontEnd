import { gql } from "@apollo/client";

export const GET_USERS = gql`
	query {
		users {
			id_usuario
			email
		}
	}
`;

export const REGISTER_INFORMATION_USER = gql`
	mutation RegisterInfoUser($input: UserInput!) {
		registerInfoUser(input: $input) {
			message
		}
	}
`;