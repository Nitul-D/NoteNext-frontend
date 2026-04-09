import React, {useContext, useState, useRef, useEffect} from 'react';
import noteContext from "../context/notes/noteContext";


const AddNote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState ({title: "", description: "", tag: ""});
  const descRef = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
    props.showAlert("Note added successfully", "success");
  }

  const onChange = (e) => {
    setNote ({...note, [e.target.name]: e.target.value})
  }

  useEffect(() => {
    if (descRef.current) {
      descRef.current.style.height = 'auto';
      descRef.current.style.height = descRef.current.scrollHeight + 'px';
    }
  }, [note.description]);

  const isDisabled = note.title.trim().length === 0 || note.description.trim().length === 0;


  return (
    <div className="container my-3">
      <h2>Add a Note</h2>
        <form className="my-3">
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" name="title" aria-describedby="titlehelp" value={note.title} onChange={onChange} placeholder="Title" required/>
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                value={note.description}
                placeholder="Description"
                onChange={onChange}
                ref={descRef}
                rows={1}
                style={{overflow: 'hidden', resize: 'none'}}
                required
              />
            </div>
            <div className="mb-3">
                <label htmlFor="tag" className="form-label">Tag</label>
                <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange}/>
            </div>
            <button disabled={isDisabled} type="submit" className="btn btn-outline-primary" onClick={handleClick}>Save</button>
        </form>
      </div>
  )
}

export default AddNote
