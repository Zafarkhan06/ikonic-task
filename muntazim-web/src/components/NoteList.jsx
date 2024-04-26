import React from "react";

import { Divider } from "@mui/material";

import NewNoteForm from "./NewNoteForm";
import Note from "./Note";

function NoteList({ notes, setNotes, title }) {

  const create = newNote => {
    setNotes([...notes, newNote]);
  };

  const remove = index => {
    const list = [...notes];

    list.splice(index, 1)

    setNotes([...list]);
  };

  const update = (index, updatedTask) => {
    const updatedNotes = [...notes];

    updatedNotes[index].task = updatedTask;

    setNotes(updatedNotes);
  };

  return (
    <div className="text-left">
      <h1 className="font-bold text-3xl p-2">
        {title}
      </h1>

      <div className="m-1 mx-2">
        <Divider />
      </div>

      <h1 className="font-semibold text-2xl p-2">
        Notes:
      </h1>

      <div className={`px-4 h-[70vh] overflow-y-auto flex flex-col gap-y-2`}>
        {notes.length > 0 ? (
          notes.map((todo, index) => (
            <Note
              update={update}
              remove={remove}
              key={index}
              index={index}
              todo={todo}
            />
          ))
        ) : (
          <div className="text-lg mt-2 border border-gray-300 rounded-lg bg-white p-3">
            Empty Notes
          </div>
        )}
      </div>

      <NewNoteForm createNote={create} />
    </div>
  );
}

export default NoteList;
