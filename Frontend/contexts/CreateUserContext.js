import React, { useState, useContext, createContext } from "react";

const CreateUserContext = createContext();

function CreateUserProvider({ children }) {
  const [fullName, setFullName] = useState("");
  const [bio, setBio] = useState("");
  const [url, setUrl] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");
  const [instagram, setInstagram] = useState("");
  const [snapshat, setSnapshat] = useState("");
  const [discord, setDiscord] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [tiktok, setTiktok] = useState("");
  const [linkedIn, setLinkedIn] = useState("");

  const values = {
    fullName,
    setFullName,
    bio,
    setBio,
    url,
    setUrl,
    phone,
    setPhone,
    email,
    setEmail,
    website,
    setWebsite,
    facebook,
    setFacebook,
    twitter,
    setTwitter,
    instagram,
    setInstagram,
    snapshat,
    setSnapshat,
    discord,
    setDiscord,
    whatsapp,
    setWhatsapp,
    tiktok,
    setTiktok,
    linkedIn,
    setLinkedIn,
  };

  return (
    <CreateUserContext.Provider value={values}>
      {children}
    </CreateUserContext.Provider>
  );
}

export default CreateUserProvider;

export const useCreateUserContext = () => {
  return useContext(CreateUserContext);
};
