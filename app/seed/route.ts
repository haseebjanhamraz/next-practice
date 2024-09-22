import bcrypt from "bcrypt";
import { db } from "@vercel/postgres";
import {
  invoices,
  customers,
  books,
  revenue,
  users,
} from "../lib/placeholder-data";

const client = await db.connect();

async function seedUsers() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
  `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return client.sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return insertedUsers;
}

async function seedInvoices() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS invoices (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      customer_id UUID NOT NULL,
      amount INT NOT NULL,
      status VARCHAR(255) NOT NULL,
      date DATE NOT NULL
    );
  `;

  const insertedInvoices = await Promise.all(
    invoices.map(
      (invoice) => client.sql`
        INSERT INTO invoices (customer_id, amount, status, date)
        VALUES (${invoice.customer_id}, ${invoice.amount}, ${invoice.status}, ${invoice.date})
        ON CONFLICT (id) DO NOTHING;
      `
    )
  );

  return insertedInvoices;
}

async function seedCustomers() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS customers (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      image_url VARCHAR(255) NOT NULL
    );
  `;

  const insertedCustomers = await Promise.all(
    customers.map(
      (customer) => client.sql`
        INSERT INTO customers (id, name, email, image_url)
        VALUES (${customer.id}, ${customer.name}, ${customer.email}, ${customer.image_url})
        ON CONFLICT (id) DO NOTHING;
      `
    )
  );

  return insertedCustomers;
}
async function seedBooks() {
  // Ensure the UUID extension is available
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  // Create the table with correct types for each column
  await client.sql`
    CREATE TABLE IF NOT EXISTS books (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      bookid VARCHAR(255) NOT NULL,
      shelf VARCHAR(255) NOT NULL,
      title VARCHAR(255) NOT NULL,
      author VARCHAR(255) NOT NULL,
      publication_year INT NOT NULL,
      genre VARCHAR(255) NOT NULL,
      price NUMERIC(10, 2) NOT NULL,
      language VARCHAR(255) NOT NULL,
      image_url VARCHAR(255) NOT NULL,
      in_stock BOOLEAN NOT NULL,
      total_copies INT NOT NULL
    );
  `;

  // Insert books into the table
  const insertedBooks = await Promise.all(
    books.map(
      (book) => client.sql`
        INSERT INTO books (bookId, shelf, title, author, publication_year, genre, price, language, image_url, in_stock, total_copies)
        VALUES
        (${book.bookId}, ${book.shelf}, ${book.title}, ${book.author}, ${book.publication_year}, ${book.genre}, ${book.price}, ${book.language}, ${book.image_url}, ${book.in_stock}, ${book.total_copies})
        ON CONFLICT (id) DO NOTHING;
      `
    )
  );

  return insertedBooks;
}


async function seedRevenue() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS revenue (
      month VARCHAR(4) NOT NULL UNIQUE,
      revenue INT NOT NULL
    );
  `;

  const insertedRevenue = await Promise.all(
    revenue.map(
      (rev) => client.sql`
        INSERT INTO revenue (month, revenue)
        VALUES (${rev.month}, ${rev.revenue})
        ON CONFLICT (month) DO NOTHING;
      `
    )
  );

  return insertedRevenue;
}

export async function GET() {
  try {
    await client.sql`BEGIN`;
    await seedUsers();
    await seedCustomers();
    await seedInvoices();
    await seedRevenue();
    await seedBooks();
    await client.sql`COMMIT`;
    return Response.json({ message: "Database seeded successfully" });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}
