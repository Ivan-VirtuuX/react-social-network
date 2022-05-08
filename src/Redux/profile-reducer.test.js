import profileReducer, {
  addPostActionCreator,
  deletePost,
} from "./profile-reducer";
import React from "react";

let state = {
  posts: [
    { id: 1, message: "Konnichiwa", likesCount: 30043345 },
    { id: 2, message: "Konbanwa", likesCount: 320334 },
    { id: 3, message: "Hi", likesCount: 532333213 },
    { id: 4, message: "Hello", likesCount: 5323233 },
  ],
};

it("length of posts should be incremented", () => {
  let action = addPostActionCreator("VirtuuX");

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(5);
});

it("message of new post should be correct", () => {
  let action = addPostActionCreator("VirtuuX");

  let newState = profileReducer(state, action);

  expect(newState.posts[4].length).toBe("VirtuuX");
});

it("after deleting length of messages should be decrement", () => {
  let action = deletePost(1);

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(3);
});

it(`after deleting length shouldn't be decrement if id is incorrect `, () => {
  let action = deletePost(1000);

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(4);
});
