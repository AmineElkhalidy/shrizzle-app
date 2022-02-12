import axios from "axios";
import { API_URL } from "../../constants/api";

/**
 *
 * @param {string} email is the email of the identifier
 * @param {string} password is the password of the identifier
 * @param {string} token from the login
 *
 * @returns {Object} User with this structure
 * 
 * 
 * _id
        fullName
        email
        address
        plan{
          name
        }
        personalProfile{
          bio
          tinder
          twitter
          discord
          facebook
          linkedIn
          snapshat
          whatsapp
          instagram
          profilePic
          customLink
          phoneNumber
          
        }
        businessProfile{
          bio
          tinder
          twitter
          discord
          facebook
          linkedIn
          snapshat
          whatsapp
          instagram
          profilePic
          customLink
          phoneNumber
          
        }
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

export const getUserData = (token) => {
  return axios.post(
    API_URL,
    {
      query: `query{
      getUserData{
        _id
        fullName
        email
        address
        plan{
          name
        }
        personalProfile{
          bio
          tinder
          twitter
          discord
          facebook
          linkedIn
          snapshat
          whatsapp
          instagram
          profilePic
          customLink
          phoneNumber
          
        }
        businessProfile{
          bio
          tinder
          twitter
          discord
          facebook
          linkedIn
          snapshat
          whatsapp
          instagram
          profilePic
          customLink
          phoneNumber
          
        }
      }
      }`,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    }
  );
};
