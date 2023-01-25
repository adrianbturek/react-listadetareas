import { useState } from 'react'
import Todo from './Todo';
import './todoApp.css'

export default function TodoApp() {
    const [title, setTitle] = useState('Hola')
    const [todos, setTodos] = useState([])

    /* La dejamos de usar en algun momento
    function handleClick(e) {
        e.preventDefault();
        setTitle("Marcos")
    }
    */

    const handleChange = (e) => {
        const value = e.target.value;
        setTitle(value)
    }

    const handlesubmit = (e) => {
        //Para que el formulario no intente subir los datos
        e.preventDefault();
        const newTodo = {
            id: crypto.randomUUID(),
            title: title,
            completed: false
        }

        //Una forma de asignar el elemento al array es
        //setTodos([...todos, newTodo])

        //Otra manera es
        const temp = [...todos]
        //Agregar elemento al inicio (unshift), si quiero agregarl al final es temp.push
        temp.unshift(newTodo)
        setTodos(temp)

        //Para Empezar vacio
        setTitle('')
    }

    function handleUpdate(id, value) {
        const temp = [...todos]
        const item = temp.find((item) => item.id === id)
        item.title = value
        setTodos(temp)
    }

    function handleDelete(id) {
        //borrando un elemento
        const temp = todos.filter((item) => item.id !== id);
        setTodos(temp)

    }

    return (

        <div className='todoContainer'>
            <form className='todoCreateForm' onSubmit={handlesubmit}>
                <input onChange={handleChange}
                    className='todoInput'
                    value={title} />
                <input
                    onClick={handlesubmit}
                    type="submit"
                    value='Create todo'
                    className='buttonCreate' />

            </form>

            <div className='todosContainer'>
                {
                    //Usamos map porque estamos usando Java, queremos devolver una estrucrura HTML que se pueda renderizar
                    // con Key ayudamos a react a reconcoer que elemento esta siendo asignado
                    todos.map(item => (
                        //<div key={item.id}>{item.title} </div>
                        // Al final llevamnos la linea al componnte
                        <Todo key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete} />
                    ))
                }

            </div>

        </div>


    )
}

