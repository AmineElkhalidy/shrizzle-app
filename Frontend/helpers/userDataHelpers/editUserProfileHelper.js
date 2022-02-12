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
  personalProfile,
  businessProfile,
  phoneNumber,
  bio,
  twitter,
  discord,
  address,
  linkedIn,
  profilePic,
  snapshat,
  whatsapp,
  instagram,
  customLink,
  token
) => {
  return axios.post(
    API_URL,
    {
      query: `mutation {
      updateProfile(profileInfoInput: {personalProfile: ${personalProfile}, businessProfile: ${businessProfile}, phoneNumber: "${phoneNumber}", 
                    bio: "${bio}", twitter: "${twitter}", discord: "${discord}", address: "${address}",linkedIn: "${linkedIn}", profilePic: "${profilePic}", 
                    snapshat: "${snapshat}",  instagram: "${instagram}",whatsapp:"${whatsapp}", customLink: ${customLink}}) {
        personalProfile {
          phoneNumber
        }
      }
    }
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
