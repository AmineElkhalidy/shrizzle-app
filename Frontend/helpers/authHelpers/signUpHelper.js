import axios from "axios";
import { API_URL } from "../../constants/api";

/**
 *  @param {string} fullName of the identifier
 * @param {string} email is the email of the identifier
 * @param {string} password is the password of the identifier
 *
 *
 * @returns {Object} User with this structure:
 * {
 *     @param {string} _id : the user ID
 *     @param {string} fullName : the user full name
 *     @param {string} email : the user email
 *     @param {null} password : the user password
 *     @param {Object} personalProfile : the user personal profile
 *     @param {Object} businessProfile : the user business profile
 * }
 */

export const signUp = (fullName, email, password) => {
  return axios.post(
    API_URL,
    {
      query: `
        mutation{
            createUser(userInput:{fullName:"${fullName}",email:"${email}",password:"${password}"}){
            _id
            fullName
            email
            password
            personalProfile{
                bio
                instagram
            }
            
            businessProfile{
                bio
                instagram
            }
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
