import React, {useState, useEffect, useRef} from 'react';

function ToDoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);
    // Sets focus

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        // Prevents refreshing upon submission.
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
    };

    return (
        // <div>
            <form className="todo-form" onSubmit={handleSubmit}>
                {props.edit ? (
                    <>
                        <input 
                            type="text" 
                            placeholder="Update your item" 
                            value={input} 
                            ref={inputRef}
                            name="text" 
                            className="todo-input edit"
                            onChange={handleChange}
                        />

                        <button onClick={handleSubmit} className='todo-button edit'>
                            Update
                        </button>
                    </>
                ) : (
                    <>
                        <input 
                            type="text" 
                            placeholder="Add a to-do" 
                            value={input} 
                            name="text" 
                            className="todo-input"
                            onChange={handleChange}
                        />

                        <button onClick={handleSubmit} className='todo-button'>
                            Add to-do
                        </button>
                    </>
                )}
            </form>
        // </div>
    );
}

export default ToDoForm;