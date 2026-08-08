import React from "react";

function ToyCard( {toy, onDeleteToy, onUpdateToy} ) {

  const { id, name, image, likes} = toy;

  function handleDelete(){
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    })
    .then((r) => {
      if (r.ok) {
        onDeleteToy(id);
      } else {
        throw new Error(`Failed to delete toy with status of ${r.status}`);
      }
    })
    .catch((error) => console.log(error));
  }

    function handleLike() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likes: likes + 1 }),
    })
      .then((r) => {
        if (r.ok) {
          return r.json();
        } else {
          throw new Error(`Failed to update toy with status of ${r.status}`);
        }
      })
      .then((updatedToy) => onUpdateToy(updatedToy))
      .catch((error) => console.log(error));
  }

  return (
    <div className="card" data-testid="toy-card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLike}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
