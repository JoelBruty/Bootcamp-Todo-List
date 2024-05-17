import { useState } from "react"
import TodoForm from './todoForm';
import TodoDisplay from "./todoDisplay"

function TodoList() {
    //List that the application starts with

    const [todoItems, setTodoItems] = useState([
        { description: "Complete this react project", status: false, date: "15th May 2024" },
        { description: "Something else", status: true, date: "12th February 2024" },
        { description: "Another thing to do", status: false, date: "25th June 2024" },
    ])

    //Usestates for description, status and date

    const [descriptionInput, setDescriptionInput] = useState("")
    const [statusInput, setStatusInput] = useState("")
    const [dateInput, setDateInput] = useState("")

    //Click handler, removes entry on clicking the delete button

    const handleClick = (index) => {
        let storedTodoItems = [...todoItems] //create array of current items in state
        storedTodoItems.splice(index, 1) //remove one item from index
        setTodoItems(storedTodoItems) //set state to array
    }

    //Submit handler, updates the state of todoItems 

    const handleSubmit = (e) => {
    e.preventDefault()
    setTodoItems([...todoItems, {description: descriptionInput, status: statusInput, date: dateInput}])
    setDescriptionInput("")
    setStatusInput("")
    setDateInput("")
    }

    //Checkbox

    // const [isChecked, setIsChecked] = useState(false)
    // const handleCheck = () => {
    //     setIsChecked(!isChecked)
    //     }

    const [checked, setChecked] = useState(false); 
   function handleCheck(e) {
      setChecked(e.target.checked);
   }

    return (
        <div>
            <h2>Add an item</h2>
            <TodoForm
            handleSubmit={handleSubmit}
            handleCheck={handleCheck}
            checked={checked}
            setChecked={setChecked}
            descriptionInput={descriptionInput}
            setDescriptionInput={setDescriptionInput}
            statusInput={statusInput}
            setStatusInput={setStatusInput}
            dateInput={dateInput}
            setDateInput={setDateInput}/>
            <h2>To-do List</h2>
            <p>{todoItems.length} items in the list</p>
            <div>
                <ul>
                    {todoItems.map(((item, index) => {
                        return (
                            <TodoDisplay description={item.description} status={item.status} date={item.date} handleClick={() => handleClick(index)}/>)
                    }))}
                </ul>
            </div>
        </div>
    )
}

export default TodoList