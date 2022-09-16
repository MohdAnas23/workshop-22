import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [disc, SetDisc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!title || !disc) {
      alert("Field can't be null");
    } else {
      addTodo(title, disc);
      setTitle("");
      SetDisc("");
    }
  };
  return (
    <div className="container">
      <form onSubmit={submit}>
        <h3 className="my-3">Add todo</h3>
        <div className="mb-3">
          <label htmlFor="Title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Desription
          </label>
          <input
            type="text"
            className="form-control"
            value={disc}
            onChange={(e) => SetDisc(e.target.value)}
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
