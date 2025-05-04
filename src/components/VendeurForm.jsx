import React, { useState } from 'react';

const VendeurForm = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [adresse, setAdresse] = useState('');
  const [ville, setVille] = useState('');
  const [codePostal, setCodePostal] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Formulaire soumis');
    console.log({
      nom,
      prenom,
      email,
      password,
      adresse,
      ville,
      codePostal,
    });
  };

  return (
    <div>
      <h2>Formulaire de vendeur</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nom :
          <input type="text" value={nom} onChange={(event) => setNom(event.target.value)} />
        </label>
        <br />
        <label>
          Prénom :
          <input type="text" value={prenom} onChange={(event) => setPrenom(event.target.value)} />
        </label>
        <br />
        <label>
          Email :
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <br />
        <label>
          Mot de passe :
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <br />
        <label>
          Adresse :
          <input type="text" value={adresse} onChange={(event) => setAdresse(event.target.value)} />
        </label>
        <br />
        <label>
          Ville :
          <input type="text" value={ville} onChange={(event) => setVille(event.target.value)} />
        </label>
        <br />
        <label>
          Code postal :
          <input type="text" value={codePostal} onChange={(event) => setCodePostal(event.target.value)} />
        </label>
        <br />
        <button type="submit">Soumettre</button>
      </form>
    </div>
  );
};

export default VendeurForm;