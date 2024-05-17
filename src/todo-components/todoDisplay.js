function TodoDisplay ({description, status, date, handleClick, handleClickToggleCompleted, numberOfItems}) {
    return (
        <div class="flex-list-item">
            {/* {numberOfItems} */}
            <div class="section">
                <button onClick={handleClickToggleCompleted}>Toggle</button><button onClick={handleClick}>Clear</button>
            </div>
            <div class="section">
                {status ? ("✓ Done") : ("✗ To-do")}
            </div>
            <div class="section">
                {description}
            </div>
            <div class="section">
                {date}
            </div>
        </div>
    )
}

export default TodoDisplay