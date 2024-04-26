import { Divider } from "@mui/material";
import moment from "moment";
import React, { useState } from "react";


function Note({ index, todo, remove, update }) {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(() => todo.task);

  const handleClick = () => {
    remove(index);
  };

  const toggleFrom = () => {
    setTask(todo.task);
    setIsEditing(prev => !prev);
  };

  const handleUpdate = evt => {
    evt.preventDefault();
    update(index, task);
    toggleFrom();
  };

  const handleChange = evt => {
    setTask(evt.target.value);
  };

  if (isEditing) {
    return (
      <div className="pt-2" id={index}>
        <form className="flex bg-[#38A3BD] items-center" onSubmit={handleUpdate}>

          <div className="flex flex-row gap-2 items-center flex-1">
            <input
              type="text"
              name="task"
              value={task}
              placeholder="Edit Note"
              onChange={handleChange}
              class="bg-gray-50 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>

          <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm  sm:w-auto px-5 py-2.5 text-center">
            Save
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="flex flex-col border border-gray-300 rounded-lg bg-white p-3" id={index}>
      <div className="flex flex-row justify-between w-full mb-1">
        <h1>{moment(Date.now()).format('DD MMMM, YYYY')}</h1>

        <div className="flex flex-row gap-x-2">
          <h1 onClick={toggleFrom} className="text-blue cursor-pointer">Edit</h1>

          <h1 onClick={handleClick} className="text-red-500 cursor-pointer">Delete</h1>
        </div>
      </div>

      <Divider />

      <div className="text-lg mt-2 text-ellipsis overflow-hidden">
        {todo.task}
      </div>
    </div>
  );
}

export default Note;
