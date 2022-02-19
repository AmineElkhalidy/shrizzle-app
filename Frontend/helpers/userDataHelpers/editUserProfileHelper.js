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
  tiktok,
  token
) => {
  return axios.post(
    API_URL,
    {
      query: `mutation {
      updateProfile(profileInfoInput: {personalProfile: ${personalProfile}, businessProfile: ${businessProfile}, phoneNumber: "${phoneNumber}", 
                    bio: "${bio}",facebook:"${facebook}", twitter: "${twitter}", discord: "${discord}", address: "${address}",linkedIn: "${linkedIn}", profilePic: "${profilePic}", 
                    snapshat: "${snapshat}",  instagram: "${instagram}",whatsapp:"${whatsapp}", customLink: ${customLink}},tiktok:"${tiktok}") {
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
