import React from "react";
import "./style.css";
import Profile from "../../img/profile.png";
import GitHubIcon from "../../img/github.png";
import InstagramIcon from "../../img/instagram.png";
import LinkedinIcon from "../../img/linkedin.png";
import TwitterIcon from "../../img/twitter.png";

import AvatarProfile from "../../objects/AvatarProfile";
import IconSocial from "../../objects/IconSocial";

const ProfileUser = () => (
  <dl className="profile-user">
    <dd className="avatar">
      {" "}
      <AvatarProfile
        src={Profile}
        alt="Avatar do Diogo"
        className="avatar-profile"
      />
    </dd>
    <dt className="title">Lorem ipsum</dt>
    <dd className="description">Lorem ipsum dolor sit amet. Aut voluptatem odit et assumenda nihil vel dolorem vitae et dignissimos illo. </dd>
    <dd className="socials">
      <IconSocial src={GitHubIcon} alt="Logo do GitHub"/>
      <IconSocial src={InstagramIcon} alt="Logo do Instagram"/>
      <IconSocial src={LinkedinIcon} alt="Logo do Linkedin"/>
      <IconSocial src={TwitterIcon} alt="Logo do Twitter"/>
    </dd>
  </dl>
);
export default ProfileUser;
