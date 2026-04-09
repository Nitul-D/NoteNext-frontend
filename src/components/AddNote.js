import React, {useContext, useState, useRef, useEffect} from 'react';
import noteContext from "../context/notes/noteContext";


const AddNote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState ({title: "", description: "", tag: ""});
  const descRef = useRef(null);

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   addNote(note.title, note.description, note.tag);
  //   setNote({ title: "", description: "", tag: "" });
  //   props.showAlert("Note added successfully", "success");
  // }

  const onChange = (e) => {
    setNote ({...note, [e.target.name]: e.target.value})
  }

  useEffect(() => {
    if (descRef.current) {
      descRef.current.style.height = 'auto';
      descRef.current.style.height = descRef.current.scrollHeight + 'px';
    }
  }, [note.description]);

  // const isDisabled = note.title.trim().length === 0 || note.description.trim().length === 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
    props.showAlert("Note added successfully", "success");
  }

  return (
    <div className="container my-3">
      <h2>Add a Note</h2>
        <form className="my-3" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" name="title" aria-describedby="titlehelp" value={note.title} onChange={onChange} placeholder="Title" required onInvalid={(e) => e.target.setCustomValidity('Please enter a title for your note!')}
                onInput={(e) => e.target.setCustomValidity('')}/>
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
                onInvalid={(e) => e.target.setCustomValidity('Please enter a description for your note!')}
                onInput={(e) => e.target.setCustomValidity('')}
              />
            </div>
            <div className="mb-3">
                <label htmlFor="tag" className="form-label">Tag</label>
                <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange}/>
            </div>
            <button type="submit" className="btn btn-outline-primary">Save</button>
        </form>
      </div>
  )
}

export default AddNote
