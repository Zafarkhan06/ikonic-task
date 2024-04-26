import React, { useReducer } from "react";

function NewNoteForm({ createNote }) {
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      task: ""
    }
  );

  const handleChange = evt => {
    setUserInput({ [evt.target.name]: evt.target.value });
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    createNote({ task: userInput.task });
    setUserInput({ task: "" });
  };

  return (
    <form className="absolute bottom-1 mx-2" onSubmit={handleSubmit}>
      <div class="bg-gray-50">
        <div class="container flex justify-center items-center">
          <div class="relative">
            <input
              type="text"
              name="task"
              value={userInput.task}
              placeholder="New Note"
              onChange={handleChange}
              class="h-14 w-[335px] pl-2 pr-20 rounded-lg border z-0 focus:shadow focus:outline-none"
              required
            />

            <div class="absolute top-2 right-2">

              <button class="h-10 w-20 text-white rounded-lg bg-blue" type="submit">Add</button>

            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default NewNoteForm;
