import React from 'react'

const TodoItem = ({ todoItem, editHandler, deleteHandler }) => {
    return (
        <div className='flex items-center justify-between p-3 my-3 border rounded-md todoItem'>
            <div className=''>
                <h1 className='text-xl font-bold'>{todoItem.title}</h1>
                <p className='text-sm'>{todoItem.description}</p>
                <p className=''>STATUS : {todoItem.status}</p>
            </div>
            <div className='flex gap-2 buttons'>
                <button className='px-4 py-2 text-white transition bg-green-600 rounded-md hover:bg-green-500' onClick={() => editHandler(todoItem)}>Edit</button>
                <button className='px-4 py-2 text-white transition bg-red-600 rounded-md hover:bg-red-500' onClick={() => deleteHandler(todoItem)}>Delete</button>
            </div>
        </div>
    )
}

export default TodoItem