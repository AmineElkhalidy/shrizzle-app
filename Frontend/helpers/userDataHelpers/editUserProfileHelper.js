import axios from "axios";
import { API_URL } from "../../constants/api";

/**
 *
 * @param {string} email is the email of the identifier
 * @param {string} password is the password of the identifier
 *
 *
 * @returns {Object}
 */

export const editUserProfile = (
  token,
  personalProfile,
  businessProfile,
  phoneNumber,
  bio,
  facebook,
  twitter,
  discord,
  address,
  linkedIn,
  profilePic,
  snapshat,
  whatsapp,
  instagram,
  customLink,
  tiktok
) => {
  return axios.post(
    API_URL,
    {
<<<<<<< HEAD
      query: `mutation {
      updateProfile(profileInfoInput: {personalProfile: ${personalProfile}, businessProfile: ${businessProfile}, phoneNumber: "${phoneNumber}", 
                    bio: "${bio}",facebook:"${facebook}", twitter: "${twitter}", discord: "${discord}", address: "${address}", linkedIn: "${linkedIn}", profilePic: "${profilePic}", 
                    snapshat: "${snapshat}",  instagram: "${instagram}", whatsapp:"${whatsapp}", customLink: "${customLink}", tiktok:"${tiktok}"}) {
                     fullName
                    }
    }
=======
      query: `mutation {updateProfile(profileInfoInput: {personalProfile: ${personalProfile},businessProfile: ${businessProfile}, 
        phoneNumber: "${phoneNumber}",bio: "${bio}",facebook:"${facebook}", twitter: "${twitter}", discord: "${discord}", address: "${address}", linkedIn: "${linkedIn}", profilePic:"${profilePic}",snapshat: "${snapshat}",  instagram:"${instagram}", whatsapp:"${whatsapp}", customLink: "${customLink}", tiktok:"${tiktok}"}) 
        {
        fullName
        personalProfile {
                      profilePic                   
        }                
      }   
      }
>>>>>>> bed5cba294bdf1b3f5fdafad3fdaf952096a2970
    `,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    }
  );
};
