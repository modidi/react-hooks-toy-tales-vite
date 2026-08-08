import React from "react";

function ToyCard( {toy, onDeleteToy} ) {

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

  return (
    <div className="card" data-testid="toy-card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn">Like {"<3"}</button>
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
