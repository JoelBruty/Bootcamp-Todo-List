function TodoDisplay ({description, status, date, handleClick, handleClickToggleCompleted}) {
    return (
        <div>
            <li>
            <button onClick={handleClickToggleCompleted}>{status ? ("✓ - Toggle") : ("✗ - Toggle")}</button><button onClick={handleClick}>Clear</button> - {status ? ("Completed") : ("To-do")} - {description} - {date}</li>
        </div>
    )
}

export default TodoDisplay