import React, { useContext } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { AlertContext } from "../context/alert/alertContext";

export const NotesComponent = ({ notes, onRemove }) => {
  const alert = useContext(AlertContext);

  return (
    <TransitionGroup component="ul" className="list-group">
      {notes.map((note) => (
        <CSSTransition key={note.id} classNames="note" timeout={800}>
          <li className="list-group-item note">
            <div>
              <strong>{note.title}</strong>
              <small>{new Date().toLocaleDateString()}</small>
            </div>
            <button
              type="button"
              className="btn btn-outline-danger btn-sm"
              onClick={() => {
                alert.show("Note deleted", "success");
                onRemove(note.id);
              }}
            >
              &times;
            </button>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};
