import { useQuery } from "@tanstack/react-query";

import "./css/PostDetail.css";

const fetchComments = async (postId) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
  return response.json();
};

export const PostDetail = ({ post, deleteMutation }) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["comments", post.id],
    queryFn: () => fetchComments(post.id),
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return (
      <>
        <h3>Oops, something went wrong!</h3>
        <p>{error.toString()}</p>
      </>
    );
  }

  if (data) {
    return (
      <>
        <h3 style={{ color: "blue" }}>{post.title}</h3>
        <button onClick={() => deleteMutation.mutate(post.id)}>Delete</button>
        {deleteMutation.isPending && <p>Deleting post...</p>}
        {deleteMutation.isError && (
          <p>Error deleting the post: {deleteMutation.error.toString()}</p>
        )}
        {deleteMutation.isSuccess && <p>Post Successfully (not) deleted.</p>}
        <button>Update title</button>
        <p>{post.body}</p>
        <h4>Comments</h4>
        {data.map((comment) => (
          <li key={comment.id}>
            {comment.email}: {comment.body}
          </li>
        ))}
      </>
    );
  } else null;
};
