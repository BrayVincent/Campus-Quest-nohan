import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { sql } from "@vercel/postgres";

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Vérification si l'email existe dans la base de données
      const { rows } = await sql`SELECT * from users where email = ${email}`;
      if (rows.length === 0) {
        setError('Adresse e-mail incorrecte');
        return;
      }

      // Vérification si le mot de passe correspond
      const user = rows[0]; 
      if (user.password !== password) {
        setError('Mot de passe incorrect');
        return;
      }

      // Redirection vers une autre page après une connexion réussie
      router.push('/');
      
    } catch (error) {
      console.error(error);
      setError('Une erreur est survenue lors de la connexion');
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
