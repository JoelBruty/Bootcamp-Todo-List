// import { useState } from "react"

function TodoForm ({
    handleSubmit,
    checked,
    setChecked, 
    descriptionInput,
    setDescriptionInput,
    // statusInput,
    // setStatusInput,
    dateInput,
    setDateInput}) {
    

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Task/Description:
                <br/>
                <input
                type = "text"
                value = {descriptionInput}
                onChange={(e) => setDescriptionInput(e.target.value)}
                />
            </label>
            <br/>
            <label>
                Completed:
                <br/>
                <input
                type = "checkbox"
                value = {false}
                // onChange={(e) => setStatusInput(e.target.value)}
                onChange={(e) => setChecked(e.target.checked)}
                />
                {checked ? (
                <div> Task has been completed </div>
            ) : (
                <div> Task is not completed </div>
            )}
            </label>
            <br/>
            <label>
                Date:
                <br/>
                <input
                type = "text"
                value = {dateInput}
                onChange={(e) => setDateInput(e.target.value)}
                />
            </label>
            <br/>
            <button>Add</button>
            {/* <button>Edit existing entry</button> */}
        </form>
    )
}

export default TodoForm