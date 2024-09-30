CREATE TABLE todo_items
(
    id          BIGSERIAL PRIMARY KEY,
    description VARCHAR(255) NOT NULL,
    completed   BOOLEAN      NOT NULL DEFAULT false
);