
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = { 

    posts: [
      { id: 1, message: "huwei", likesCount: 0 },
      { id: 2, message: "hi", likesCount: 5 },
      { id: 3, message: "zaebis", likesCount: 55 },
    ],
    newPostText: "",
  }


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
    case ADD_POST :{
        let newPost = {
          id: state.posts.length+1,
          message: state.newPostText,
          likesCount: 65,
        };
        let stateCopy = {...state};
        stateCopy.posts = [...state.posts, newPost];
        // stateCopy.posts.push(newPost);
        stateCopy.newPostText = "";
        return stateCopy;
      }
      case UPDATE_NEW_POST_TEXT :
        let stateCopy = {...state};
        stateCopy.newPostText = action.text;
        return stateCopy;
      
      default : return state;
    }
   
    
}
export let addPostCreator = () =>  ({type: 'ADD-POST'});

export let updateNewPostTextCreator = (text) =>({type: 'UPDATE-NEW-POST-TEXT', text: text});


export default profileReducer; 