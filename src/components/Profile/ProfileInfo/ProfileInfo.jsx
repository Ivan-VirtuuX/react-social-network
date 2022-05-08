import React from "react";
import bg from "../../../assets/images/bg.jpg";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div>
        <img src={bg} className={s.image} alt="" />
      </div>
      <div className={s.descriptionBlock}>
        <img src={profile.photos.large} alt="" />
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};

export default ProfileInfo;
