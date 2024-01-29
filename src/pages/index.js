// pages/profile.js
import React from 'react';
import { Container, Row, Col, Image, ListGroup, ProgressBar, ButtonToolbar} from 'react-bootstrap';


const Profile = () => {
  // Les données du joueur (à remplacer par vos données réelles)
  const playerData = {
    image: 'profil.png',
    pseudo: 'Nom du joueur',
    level: 10,
    experience: 70, // Remplacez par la valeur réelle
    quetesValidees: [], // Tableau des quêtes validées
    quetesAFaire: ['Quête 1', 'Quête 2', 'Quête 3'], // Tableau des quêtes à faire
  };

  // Fonction pour valider une quête
  const validerQuete = (quete) => {
    // Ajoutez la logique pour marquer la quête comme validée
    console.log(`Quête à faire : ${quete}`);
  };

  return (
    <Container>
      <button><a href="auth">x</a></button>
      <h1 className="mt-3">Profil du joueur</h1>
      <Row>
        <Col md={4}>
          <Image src={playerData.image} alt="Image du joueur" fluid width={100} height={100} />
          <p>Pseudo : {playerData.pseudo}</p>
          <p>Level : {playerData.level}</p>
          <ProgressBar now={playerData.experience} label={`${playerData.experience}%`} />
        </Col>
        <Col md={8}>
          <h2>Quêtes validées</h2>
          <ListGroup>
            {playerData.quetesValidees.map((quete, index) => (
              <ListGroup.Item key={index}>{quete}</ListGroup.Item>
            ))}
          </ListGroup>

          <h2 className="mt-3">Quêtes à faire</h2>
          <ListGroup>
            {playerData.quetesAFaire.map((quete, index) => (
              <ListGroup.Item key={index} action onClick={() => validerQuete(quete)}>
                {quete}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
