import React, { Fragment, useEffect, useContext } from "react";
import { FormComponent } from "../components/Form.component";
import { NotesComponent } from "../components/Notes.component";
import { FirebaseContext } from "../context/firebase/firebaseContext";
import { LoaderComponent } from "../components/Loader.component";

export const Home = () => {
  const { loading, notes, fetchNotes, removeNote } =
    useContext(FirebaseContext);

  useEffect(() => {
    fetchNotes();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <FormComponent />

      <hr />

      {loading ? (
        <LoaderComponent />
      ) : (
        <NotesComponent notes={notes} onRemove={removeNote} />
      )}
    </Fragment>
  );
};
