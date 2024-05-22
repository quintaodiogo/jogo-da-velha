import React from "react";
import "./style.css";
import Profile from "../../img/profile.png";

import AvatarProfile from "../../objects/AvatarProfile";

const ProfileUser = () => (
  <dl>
    <dd>
      {" "}
      <AvatarProfile
        src={Profile}
        alt="Avatar do Diogo"
        className="avatar-profile"
      />
    </dd>
    <dt>Diogo de Paula</dt>
  </dl>
);
export default ProfileUser;
