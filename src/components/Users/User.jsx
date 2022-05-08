import React from "react";
import UsersStyles from "./users.module.css";
import img_err from "../../assets/images/image_error.png";
import { NavLink } from "react-router-dom";

let User = ({ user, followingInProgress, unfollow, follow }) => {
  return (
    <div>
      <div>
        <div>
          <NavLink to={"/profile/" + user.id}>
            <img
              src={user.photos.small != null ? user.photos.small : img_err}
              className={UsersStyles.userPhoto}
              alt=""
            />
          </NavLink>
        </div>
        <div className={UsersStyles.followBtn}>
          {user.followed ? (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                unfollow(user.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                follow(user.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </div>
      <div>
        <div className={UsersStyles.users}>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </div>

        <div className={UsersStyles.users}>
          <div>{"user.location.country"}</div>
          <div>{"user.location.city"}</div>
        </div>
        <br />
      </div>
    </div>
  );
};

export default User;
