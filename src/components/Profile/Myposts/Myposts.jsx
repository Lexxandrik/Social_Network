import Post from "./Post/Post";
import styles from "./Myposts.module.css";
import React from "react";


const MyPosts = (props) => {

  let mapPost = props.posts.map((post) => (
    <Post message={post.message} key={post.id} likesCount={post.likesCount} />
  ));

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = (e) => {
    let text = e.target.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={styles.myposts}>
      <div className={styles.headname}>My Posts</div>
      <div>
        <textarea
          onChange={onPostChange}
          value={props.newPostText}
          name=""
          id=""
          cols="30"
          rows="3"
        ></textarea>
        <button onClick={onAddPost} className={styles.add}>
          Добавить
        </button>
      </div>
      {mapPost}
    </div>
  );
};

export default MyPosts;
