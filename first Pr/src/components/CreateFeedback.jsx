
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
export default function CreateFeedback() {
    const [feedbacks, setFeedbacks] = useState([]);
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        setFeedbacks([...feedbacks, data]);
        reset();
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div>
                    <label>Advantages:</label>
                    <input {...register("advantages")} />
                </div>
                <div>
                    <label>Disadvantages:</label>
                    <input {...register("disadvantages")} />
                </div>
                <div>
                    <label>Comments:</label>
                    <textarea {...register("comments")} />
                </div>
                <div>
                    <label>Rating:</label>
                    <select {...register("rating")} defaultValue="">
                        <option value="" disabled>
                            Select rating
                        </option>
                        <option value="5">★★★★★ (5)</option>
                        <option value="4">★★★★☆ (4)</option>
                        <option value="3">★★★☆☆ (3)</option>
                        <option value="2">★★☆☆☆ (2)</option>
                        <option value="1">★☆☆☆☆ (1)</option>
                    </select>
                </div>
                <button type="submit">Save Feedback</button>
            </form>
            <ul>
                {feedbacks.map((fb, idx) => (
                    <li key={idx}>
                        <strong>Advantages:</strong> {fb.advantages} <br />
                        <strong>Disadvantages:</strong> {fb.disadvantages} <br />
                        <strong>Comments:</strong> {fb.comments}
                        <br />
                        <strong>Rating:</strong> {fb.rating ? "★".repeat(Number(fb.rating)) + "☆".repeat(5 - Number(fb.rating)) : "No rating"}
                    </li>
                ))}
            </ul>
        </div>

    );

}