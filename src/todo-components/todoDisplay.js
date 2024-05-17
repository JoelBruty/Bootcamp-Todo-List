function TodoDisplay ({description, status, date, handleClick}) {
    
    // if(status===true){
    //     status = "Completed"
    // }
    // else{
    //     status = "To-do"
    // }

    return (
        <div>
            <li>
                {/* <button>Mark</button> */}
                <button onClick={handleClick}>Clear</button> - {description} - {status} - {date}</li>
        </div>
    )
}

export default TodoDisplay