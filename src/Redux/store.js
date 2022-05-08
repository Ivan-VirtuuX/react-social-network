import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Konnichiwa", likesCount: 30043345 },
        { id: 2, message: "Konbanwa", likesCount: 320334 },
        { id: 3, message: "Hi", likesCount: 532333213 },
        { id: 4, message: "Hello", likesCount: 5323233 },
      ],
      newPostText: "VirtuuX",
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Ivan" },
        { id: 2, name: "Dima" },
        { id: 3, name: "Alyona" },
        { id: 4, name: "Vitaly" },
        { id: 5, name: "Gosha" },
        { id: 6, name: "Mariya" },
      ],
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "Hello" },
        { id: 3, message: "How are you?" },
        { id: 4, message: "Konnichiwa" },
        { id: 5, message: "Konbanwa" },
      ],
      newMessageBody: "",
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log("State changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
