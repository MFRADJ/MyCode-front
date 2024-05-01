import React, { useState } from 'react';

function ProfilProf() {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Envoyer les données du profil à l'API ou à une autre fonction
    console.log({ name, subject, description });
  };

  return (
    <div>
      <h1>Profil du Professeur</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom:</label>
          <input type="text" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label>Matière Enseignée:</label>
          <input type="text" value={subject} onChange={handleSubjectChange} />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={handleDescriptionChange} />
        </div>
        <button type="submit">Enregistrer</button>
      </form>
    </div>
  );
}

export default ProfilProf;
