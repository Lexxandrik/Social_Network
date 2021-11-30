
import MyPosts from "./Myposts/Myposts";

const Profile = (props) => {
  return (
    <div className="profile">
      <div>
        <img src="" alt="" />
      </div>
      <div className="profileInfo">Profile Info</div>
      <MyPosts state={props.state.postArray} addPost={props.addPost}/>
    </div>
  );
};

export default Profile;
