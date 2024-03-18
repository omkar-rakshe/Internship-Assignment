import React from "react";

const Post = ({post}) => {
    return (
        <div className="bg-white shadow-md shadow-teal-800 rounded-md p-4">
            <h2 className="text-lg  font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-700 mb-4">{post.body}</p>
            <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500 ">{post.tags.map((tag) => <span className="px-1 cursor-pointer hover:text-gray-700">#{tag}</span>)}</p>
            </div>
        </div>
    )
};

export default Post;