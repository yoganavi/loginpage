import React, { useState } from 'react';

export default function TodoList(){

        const createTodo = () => {
            const todoRef = firebase.database().ref('loginPage');
            const todo = {
                title,
                complete: false
            };

            todoRef.push(todo)
        };
    return (
        <div>
            <input type='text' onChange={handleOnChange} value={title} />
            <button onClick={createTodo} >Add Todo</button>
        </div>
    )
}