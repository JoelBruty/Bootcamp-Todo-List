function TodoDisplay ({description, status, date, handleClick}) {
    return (
        <div>
            <li>
                {/* <button>Mark</button> */}
                <button onClick={handleClick}>Clear</button> - {status ? ("Completed") : ("To-do")} - {description} - {date}</li>
        </div>
    )
}

export default TodoDisplay