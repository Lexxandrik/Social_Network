
import { connect } from "react-redux";
import {
  addPostCreator,
  updateNewPostTextCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./Myposts";

// const MyPostsContainer = (props) => {

//   let addPost = () => {
//     props.store.dispatch(addPostCreator());
//   };

//   let onPostChange = (text) => {
//     props.store.dispatch(updateNewPostTextCreator(text));
//   };

//   return (
//     <MyPosts
//       updateNewPostText={onPostChange}
//       addPost={addPost}
//       posts={props.store.getState().profile.posts}
//       newPostText = {props.store.getState().profile.newPostText}
//     />
//   );
// };

const mapStateToProps = (state) => {
  return {
    posts : state.profile.posts,
    newPostText : state.profile.newPostText
  }
}

const mapDispatchToProps =(dispatch)=> {
  return {
    updateNewPostText : (text) => {
      dispatch(updateNewPostTextCreator(text))
    },
    addPost : ()=> {
      dispatch(addPostCreator())
    }
  }
}

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;
