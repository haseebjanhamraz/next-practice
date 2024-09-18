// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'Haseeb Alam',
    email: 'haseeb@gmail.com',
    password: '123456',
  },
];



const customers = [
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Evil Rabbit',
    email: 'evil@rabbit.com',
    image_url: '/customers/evil-rabbit.png',
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    image_url: '/customers/delba-de-oliveira.png',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Lee Robinson',
    email: 'lee@robinson.com',
    image_url: '/customers/lee-robinson.png',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Michael Novotny',
    email: 'michael@novotny.com',
    image_url: '/customers/michael-novotny.png',
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Amy Burns',
    email: 'amy@burns.com',
    image_url: '/customers/amy-burns.png',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Balazs Orban',
    email: 'balazs@orban.com',
    image_url: '/customers/balazs-orban.png',
  },
];

const invoices = [
  {
    customer_id: customers[0].id,
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    customer_id: customers[1].id,
    amount: 20348,
    status: 'pending',
    date: '2022-11-14',
  },
  {
    customer_id: customers[4].id,
    amount: 3040,
    status: 'paid',
    date: '2022-10-29',
  },
  {
    customer_id: customers[3].id,
    amount: 44800,
    status: 'paid',
    date: '2023-09-10',
  },
  {
    customer_id: customers[5].id,
    amount: 34577,
    status: 'pending',
    date: '2023-08-05',
  },
  {
    customer_id: customers[2].id,
    amount: 54246,
    status: 'pending',
    date: '2023-07-16',
  },
  {
    customer_id: customers[0].id,
    amount: 666,
    status: 'pending',
    date: '2023-06-27',
  },
  {
    customer_id: customers[3].id,
    amount: 32545,
    status: 'paid',
    date: '2023-06-09',
  },
  {
    customer_id: customers[4].id,
    amount: 1250,
    status: 'paid',
    date: '2023-06-17',
  },
  {
    customer_id: customers[5].id,
    amount: 8546,
    status: 'paid',
    date: '2023-06-07',
  },
  {
    customer_id: customers[1].id,
    amount: 500,
    status: 'paid',
    date: '2023-08-19',
  },
  {
    customer_id: customers[5].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-03',
  },
  {
    customer_id: customers[2].id,
    amount: 1000,
    status: 'paid',
    date: '2022-06-05',
  },
];

const revenue = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3000 },
  { month: 'Dec', revenue: 4800 },
];


const books = [
  {
    bookId: "1",
    shelf: "A1",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publication_year: 1925,
    genre: "Classic",
    price: 10.99,
    language: "English",
    image_url: "https://example.com/great-gatsby.jpg",
    in_stock: true,
    total_copies: 5
  },
  {
    bookId: "2",
    shelf: "B2",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publication_year: 1960,
    genre: "Fiction",
    price: 12.49,
    language: "English",
    image_url: "https://example.com/to-kill-a-mockingbird.jpg",
    in_stock: true,
    total_copies: 8
  },
  {
    bookId: "3",
    shelf: "C3",
    title: "1984",
    author: "George Orwell",
    publication_year: 1949,
    genre: "Dystopian",
    price: 15.00,
    language: "English",
    image_url: "https://example.com/1984.jpg",
    in_stock: true,
    total_copies: 10
  },
  {
    bookId: "4",
    shelf: "D1",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    publication_year: 1813,
    genre: "Romance",
    price: 8.99,
    language: "English",
    image_url: "https://example.com/pride-and-prejudice.jpg",
    in_stock: false,
    total_copies: 2
  },
  {
    bookId: "5",
    shelf: "E5",
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    publication_year: 1951,
    genre: "Fiction",
    price: 11.99,
    language: "English",
    image_url: "https://example.com/catcher-in-the-rye.jpg",
    in_stock: true,
    total_copies: 7
  },
  {
    bookId: "6",
    shelf: "F4",
    title: "Moby Dick",
    author: "Herman Melville",
    publication_year: 1851,
    genre: "Adventure",
    price: 14.99,
    language: "English",
    image_url: "https://example.com/moby-dick.jpg",
    in_stock: false,
    total_copies: 3
  },
  {
    bookId: "7",
    shelf: "G3",
    title: "War and Peace",
    author: "Leo Tolstoy",
    publication_year: 1869,
    genre: "Historical Fiction",
    price: 19.99,
    language: "English",
    image_url: "https://example.com/war-and-peace.jpg",
    in_stock: true,
    total_copies: 4
  },
  {
    bookId: "8",
    shelf: "H2",
    title: "The Alchemist",
    author: "Paulo Coelho",
    publication_year: 1988,
    genre: "Philosophical",
    price: 9.99,
    language: "Portuguese",
    image_url: "https://example.com/the-alchemist.jpg",
    in_stock: true,
    total_copies: 12
  },
  {
    bookId: "9",
    shelf: "I1",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    publication_year: 1937,
    genre: "Fantasy",
    price: 13.50,
    language: "English",
    image_url: "https://example.com/the-hobbit.jpg",
    in_stock: true,
    total_copies: 6
  },
  {
    bookId: "10",
    shelf: "J3",
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    publication_year: 1890,
    genre: "Gothic Fiction",
    price: 7.99,
    language: "English",
    image_url: "https://example.com/dorian-gray.jpg",
    in_stock: false,
    total_copies: 1
  }
];

export { users, customers, invoices, revenue, books };
