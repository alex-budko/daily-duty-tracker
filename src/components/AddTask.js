import { useState } from "react"

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Please Add Task')
            return
        }

        onAdd({text, day, reminder})

        //clear form
        setText('')
        setReminder(false)
        setDay('')
    }

    return (
        //form for when a new task in to be added
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Duty</label>
                <input type="text" placeholder="Add Duty" 
                value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Day and Time</label>
                <input type="text" placeholder="Add Day and Time"
                value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input type="checkbox" placeholder="Add Duty" 
                checked={reminder}
                //if box is checked, reminder = true
                value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>
            <input type="submit" value = "Save Duty" className="btn btn-block"/>
        </form>
    )
}

export default AddTask