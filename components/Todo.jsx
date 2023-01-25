import { useState } from "react"

export default function Todo({ item, onUpdate, onDelete }) {
    const [isEdit, setIsEdit] = useState(false)

    function FormEdit() {

        const [newValue, setNewvalue] = useState(item.title)

        function handlesubmit(e) {
            e.preventDefault()
        }

        function handlechange(e) {
            const value = e.target.value
            setNewvalue(value)
        }

        function handleclickUpdateTodo() {
            onUpdate(item.id, newValue)
            setIsEdit(false)
        }

        return (
            <form className='todoUpdateForm' onSubmit={handlesubmit}>
                <input type='text' className='todoInput' onChange={handlechange} value={newValue} />
                <button className='button' onClick={handleclickUpdateTodo}>Update</button>
            </form>
        )
    }

    function TodoElement() {
        return (
            <div className='todoInfo'>
                <spam className='todoTitle'>
                    {item.title}
                </spam>
                <button className='button' onClick={() => setIsEdit(true)}>
                    Editar
                </button>
                <button className='buttonDelete' onClick={(e) => onDelete(item.id)}>
                    Eliminar
                </button>
            </div>
        )
    }

    return (
        <div className='todo'>
            {isEdit ? <FormEdit /> : <TodoElement />}
        </div>
    )
}