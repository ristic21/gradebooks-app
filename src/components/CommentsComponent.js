import React, { useState, useEffect } from "react";
import { commentsService } from "../services/CommentsService";
import { useHistory } from "react-router-dom";
import jwtDecode from "jwt-decode";

function SingleGradebookComments({ gradebookId }) {

    const [comments, setComments] = useState([]);
    const history = useHistory()
    const token = localStorage.getItem("token");
    const decodedToken = jwtDecode(token);
    const user_id = decodedToken.id;


    const [comment, setComment] = useState({
        content: "",
        user_id: user_id,
        gradebook_id: parseInt(gradebookId),
    });


    useEffect(() => {
        loadComments();
    }, []);
    async function loadComments() {
        try {
            const response = await commentsService.getComments(gradebookId);
            setComments(response.data);

        } catch (error) {
            console.log(error);
        }
    }

    async function addComment(e) {
        e.preventDefault();

        try {
            await commentsService.addComment(
                comment.content,
                comment.gradebook_id,
                comment.user_id
            );
            setComments([...comments, comment]);
            setComment({ ...comment, content: '' });
        } catch (error) {
            console.log(error);
        }
    }

    console.log(comment)
    return (
        <div>
            <h2>Comments</h2>
            {comments.length === 0 ? (
                <p>No comments yet.</p>
            ) : (
                <ul>
                    {comments.map((comment, index) => (
                        <li key={index}>{comment.content}</li>
                    ))}
                </ul>
            )}

            <form onSubmit={addComment}>
                <label htmlFor="content">
                    Add a comment:
                </label>
                <textarea
                    name="content"
                    type="text"
                    value={comment.content}
                    onChange={({ target }) =>
                        setComment({ ...comment, content: target.value })
                    }
                    placeholder="Enter comment content"
                    id="content"
                />
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default SingleGradebookComments;
