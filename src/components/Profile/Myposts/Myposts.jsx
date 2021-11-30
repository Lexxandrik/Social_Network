import Post from "./Post/Post";
import styles from './Myposts.module.css'
import React from "react";

const MyPosts = (props) => {

  let newPost = React.createRef();
  let addPost = () => {

    let text = newPost.current.value;
    props.addPost(text);
  };
  

  let mapPost = props.state.map(post => <Post message={post.message} likesCount={post.likesCount}/>)
  
  return (
    <div className={styles.myposts}>
      <div>My Posts</div>
      <textarea ref={newPost} name="" id="" cols="30" rows="3"></textarea>
      <button onClick={addPost} className={styles.add}>Добавить</button>
      {mapPost}
    </div>
  );
};

export default MyPosts;
