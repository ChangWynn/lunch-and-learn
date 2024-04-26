import "./css/PostDetail.css";

// const fetchComments = async (postId) => {
//   const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
//   return response.json();
// };

export const PostDetail = ({ post }) => {
  const data = [];

  if (data) {
    return (
      <>
        <h3 style={{ color: "blue" }}>{post.title}</h3>
        <button>Delete</button> <button>Update title</button>
        <p>{post.body}</p>
        <h4>Comments</h4>
        {data.map((comment) => (
          <li key={comment.id}>
            {comment.email}: {comment.body}
          </li>
        ))}
      </>
    );
  } else return null;
};
