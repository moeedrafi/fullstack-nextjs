"use client";

import { useRouter } from "next/navigation";

const DeletePostButton = ({ postId }) => {
  const router = useRouter();

  async function handleDelete() {
    try {
      await fetch(`/api/post/${postId}`, {
        method: "DELETE",
      });
      router.refresh();
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  return <button onClick={handleDelete}>Delete Post</button>;
};

export default DeletePostButton;
