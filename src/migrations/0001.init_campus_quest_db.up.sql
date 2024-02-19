CREATE TABLE utilisateurs (
    id_utilisateur SERIAL PRIMARY KEY,
    nom_utilisateur VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    mot_de_passe VARCHAR(100)
);

CREATE TABLE quêtes (
    id_quête SERIAL PRIMARY KEY,
    titre VARCHAR(255),
    description TEXT,
    localisation POINT,
    code_QR VARCHAR(100)
);

CREATE TABLE progression_utilisateur (
    id_progression SERIAL PRIMARY KEY,
    id_utilisateur INT REFERENCES utilisateurs(id_utilisateur),
    id_quête INT REFERENCES quêtes(id_quête),
    état VARCHAR(50)
);

CREATE TABLE notifications (
    id_notification SERIAL PRIMARY KEY,
    id_utilisateur INT REFERENCES utilisateurs(id_utilisateur),
    message TEXT,
    date_notification TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE thèmes (
    id_thème SERIAL PRIMARY KEY,
    nom_thème VARCHAR(100),
    couleurs JSONB
);

CREATE TABLE feedback_utilisateur (
    id_feedback SERIAL PRIMARY KEY,
    id_utilisateur INT REFERENCES utilisateurs(id_utilisateur),
    message TEXT,
    date_feedback TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
