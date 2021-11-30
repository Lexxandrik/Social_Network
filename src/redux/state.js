let state = {
  messages: {
    dialogsArray: ["Hren tam", "mama", "papa"],
    contactsArray: [
      { name: "Alex", id: 1 },
      { name: "Dima", id: 2 },
      { name: "Vanya", id: 3 },
      { name: "Viktor", id: 4 },
      { name: "Oleg", id: 5 },
    ]
  },
  profilePage : {
    postArray : [
      {id : 1, message : "huwei", likesCount : 0},
      {id : 2, message : "hi", likesCount : 5},
      {id : 3, message : "zaebis", likesCount : 55}

]
}
};

export let addPost = (postText) => {
    
  let newPost = {
      id: 6,
      message: postText,
      likesCount: 65
  };
  state.profilePage.postArray.push(newPost);
  console.log(state.profilePage.postArray);
    
  };

export default state;
