import { useState } from "react";

import { PostDetail } from "./PostDetail";
const maxPostPage = 10;

// const fetchPosts = async (pageNum = 1) => {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pageNum}`
//   );
//   return response.json();
// };

// const deletePost = async (postId) => {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${postId}`,
//     { method: "DELETE" }
//   );
//   return response.json();
// }

export const Posts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState(null);

  const data = [];

  return (
    <>
      <ul>
        {data.map((post) => (
          <li key={post.id} className="post-title" onClick={() => setSelectedPost(post)}>
            {post.title}
          </li>
        ))}
      </ul>
      <div className="pages">
        <button disabled onClick={() => {}}>
          Previous page
        </button>
        <span>Page {currentPage}</span>
        <button disabled onClick={() => {}}>
          Next page
        </button>
      </div>
      <hr />
      {selectedPost && <PostDetail post={selectedPost} />}
    </>
  );
};
