BEGIN TRANSACTION;

CREATE TABLE product_category (
    id SERIAL PRIMARY KEY,
    name TEXT
);

CREATE TABLE product_image (
    id SERIAL PRIMARY KEY,
    name text,
    description text
);

CREATE TABLE product (
    id SERIAL PRIMARY KEY,
    name text,
    description text,
    price money,
    product_category_id int REFERENCES product_category(id),
    product_image_id int REFERENCES product_image(id)
);

CREATE TYPE discount AS ENUM ('percentage off', 'fixed amount off');

CREATE TABLE discount_type (
    id SERIAL PRIMARY KEY,
    type discount
);

CREATE TABLE product_discount (
    id SERIAL PRIMARY KEY,
    value numeric,
    product_id int REFERENCES product(id) UNIQUE,
    discount_type_id int REFERENCES discount_type(id)
);

COMMIT;