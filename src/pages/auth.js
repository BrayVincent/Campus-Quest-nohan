// pages/index.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Container, Form, Button, Alert } from 'react-bootstrap';


export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Vérification des identifiants en dur (à remplacer par votre logique de connexion réelle)
      if (email === 'test@example.com' && password === 'mdp') {
        // Redirection vers une autre page après une connexion réussie
        router.push('/profil');
      } else {
        setError('Adresse e-mail ou mot de passe incorrect');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Container>
      <Form  onSubmit={handleLogin}>
        <h2>Campus quest</h2>
        <Form.Group controlId="email">
          <Form.Label>Adresse e-mail:</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Mot de passe:</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        {error && <Alert variant="danger">{error}</Alert>}
        <Button type="submit" variant="primary">Se connecter</Button>
      </Form>
    </Container>
  );
}
