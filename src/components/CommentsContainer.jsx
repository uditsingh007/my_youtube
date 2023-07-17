import { UserIcon } from "@heroicons/react/24/outline";
import React from "react";
import { NESTED_COMMENT_DATA } from "../constants";

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="font-bold text-2xl">Comments</h1>
      <CommentList comments={NESTED_COMMENT_DATA} />
    </div>
  );
};

const CommentList = ({ comments }) =>
  comments.map((comment, i) => (
    <div>
      <Comment key={`${comment.name}${i}`} data={comment} />
      <div className="pl-5 border border-l-black">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex gap-2 bg-gray-100 p-2 rounded-md">
      <UserIcon className="h-8 mt-1" />
      <div className="">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default CommentsContainer;
