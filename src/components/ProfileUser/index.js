import React from "react";
import "./style.css";
import Profile from "../../img/profile.png";

import AvatarProfile from "../../objects/AvatarProfile";

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
  </dl>
);
export default ProfileUser;
