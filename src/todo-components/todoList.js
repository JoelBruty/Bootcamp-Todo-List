import { useState } from "react"
import TodoForm from './todoForm';
import TodoDisplay from "./todoDisplay"

function TodoList() {
    //List that the application starts with

    const [todoItems, setTodoItems] = useState([
        { description: "Complete this react project", status: false, date: "15th May" },
        { description: "Something else", status: true, date: "12th February" },
        { description: "Another thing to do", status: false, date: "25th June" },
    ])

    //Usestates for description, status and date

    const [descriptionInput, setDescriptionInput] = useState("")
    // const [statusInput, setStatusInput] = useState("")
    const [dateInput, setDateInput] = useState("")

    //Click handlers
    
    //Removes entry on clicking the "Clear" button

    const handleClick = (index) => {
        let storedTodoItems = [...todoItems] //create array of current items in state
        storedTodoItems.splice(index, 1) //remove one item from index
        setTodoItems(storedTodoItems) //set state to array
    }

    //Toggles the status of the entry when the "Toggle" button is clicked

    const handleClickToggleCompleted = (index) => {
        let storedTodoItems = [...todoItems] //create array of current items in state
        // console.log(storedTodoItems[index])
        if (storedTodoItems[index].status === true){ //If true/completed
            storedTodoItems[index].status = false //Set to false/to-do
        }
        else {
            storedTodoItems[index].status = true //Set to true/completed
        }
        setTodoItems(storedTodoItems) //set state to array
    }

    //Submit handler, updates the state of todoItems 

    const handleSubmit = (e) => {
    e.preventDefault()
    setTodoItems([...todoItems, {description: descriptionInput, status: checked, date: dateInput}])
    setDescriptionInput("")
    // setStatusInput("")
    setDateInput("")
    }

    //Checkbox handler

    const [checked, setChecked] = useState(false); 
   function handleCheck(e) {
      setChecked(e.target.checked);
   }

    return (
        <div>
            <h2>Add an item</h2>
            <TodoForm

            //Handlers

            handleSubmit={handleSubmit}
            handleCheck={handleCheck}
            checked={checked}
            setChecked={setChecked}

            //Input

            descriptionInput={descriptionInput}
            setDescriptionInput={setDescriptionInput}
            
            dateInput={dateInput}
            setDateInput={setDateInput}
            
            // statusInput={statusInput}
            // setStatusInput={setStatusInput}
            />
            <h2>To-do List</h2>
            <p>{todoItems.length} items in the list</p>
            <div>
                <ul>
                    {todoItems.map(((item, index) => {
                        return (
                            <TodoDisplay
                            
                            description={item.description}
                            status={item.status}
                            date={item.date}

                            handleClick={() => handleClick(index)}
                            handleClickToggleCompleted={() => handleClickToggleCompleted(index)}/>)
                    }))}
                </ul>
            </div>
        </div>
    )
}

export default TodoList