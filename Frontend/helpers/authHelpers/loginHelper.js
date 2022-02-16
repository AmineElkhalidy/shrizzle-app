import axios from "axios";
import { API_URL } from "../../constants/api";
/**
 *
 * @param {string} email is the email of the identifier
 * @param {string} password is the password of the identifier
 *
 *
 * @returns {Object} AuthData with this structure:
 * {
 *     @param {string} userId : the user ID
 *     @param {string} token : the authentication token
 *     @param {int} tokenExpiration : the number of hours for the token to expire
 * }
 */

export const loginHandler = (email, password) => {
  return axios.post(
    API_URL,
    {
      query: `
        query{
            login(email:"${email}",password:"${password}"){
              userId
              token
              tokenExpiration
            }
        }`,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
