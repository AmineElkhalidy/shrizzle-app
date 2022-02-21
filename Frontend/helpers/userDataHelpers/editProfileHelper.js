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

export const editProfileHelper = (token) => {
  return axios.post(
    API_URL,
    {
      query: `mutation {updateProfile(profileInfoInput: {personalProfile: true,businessProfile: false, 
        phoneNumber: "",bio: "Im a web developer",facebook:"", twitter: "", discord: "", address: "", linkedIn: "", profilePic:"",snapshat: "",  instagram:"", whatsapp:"", customLink: "", tiktok:""}) 
        {
        fullName
        personalProfile {
          profilePic                   
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
