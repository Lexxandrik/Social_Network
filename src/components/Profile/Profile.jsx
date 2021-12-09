import MyPostsContainer from "./Myposts/MypostsContainer";

const Profile = (props) => {
  return (
    <div className="profile">
      <div>
        <img src="" alt="" />
      </div>
      <div className="profileInfo">Profile Info</div>
      <MyPostsContainer store={props.store}/>
    </div>
  );
};

export default Profile;
