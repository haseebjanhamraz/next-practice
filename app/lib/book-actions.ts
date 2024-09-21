'use server';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';


// Define the schema for form validation using Zod
const FormSchema = z.object({
    id: z.string(),
    bookId: z.string({
        invalid_type_error: "Please enter a library book id",
    }),
    shelf: z.string({
        invalid_type_error: "Please enter a library book shelf",
    }),
    title: z.string({
        invalid_type_error: "Please enter a library book title",
    }),
    author: z.string({
        invalid_type_error: "Please enter a library book author",
    }),
    publication_year: z.string({
        invalid_type_error: "Please enter a library book publication year",
    }),
    genre: z.string({
        invalid_type_error: "Please enter a library book genre",
    }),
    price: z.coerce.number()
        .gt(0, { message: 'Please enter an amount greater than $0.' }),
    language: z.string({
        invalid_type_error: "Please enter a library book language",
    }),
    image_url: z.string({
        invalid_type_error: "Please enter a library book language",
    }),
    in_stock: z.boolean(),
    total_copies: z.number(),
    date: z.string(),
});

const CreateBook = FormSchema.omit({ id: true, date: true });
const UpdateBook = FormSchema.omit({ id: true, date: true });

// Define the structure for the state
export type State = {
    errors?: {
        bookId?: string[];
        shelf?: string[];
        title?: string[];
        author?: string[];
        publication_year?: Number[];
        genre?: string[];
        price?: Number[];
        language?: string[];
        image_url?: string[];
        in_stock?: boolean[];
        total_copies?: Number[];
    };
    message?: string | null;
};

export async function createBook(prevState: State, formData: FormData) {
    // Validate form using Zod
    const validatedFields = CreateBook.safeParse({
        bookId: formData.get('bookId'),
        shelf: formData.get('shelf'),
        title: formData.get('title'),
        author: formData.get('author'),
        publication_year: formData.get('publication_year'),
        genre: formData.get('genre'),
        price: Number(formData.get('price')),
        language: formData.get('language'),
        image_url: formData.get('image_url'),
        in_stock: Boolean(formData.get('in_stock')),
        total_copies: Number(formData.get('total_copies')),
    });

    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Book.',
        };
    }

    // Prepare data for insertion into the database
    const { bookId,
        shelf,
        title,
        author,
        publication_year,
        genre,
        price,
        language,
        image_url,
        in_stock,
        total_copies } = validatedFields.data;
    const amountInCents = price * 100;
    const date = new Date().toISOString().split('T')[0];

    // Insert data into the database
    try {
        await sql`
        INSERT INTO books (
        bookId,
        shelf,
        title,
        author,
        publication_year,
        genre,
        price,
        language,
        image_url,
        in_stock,
        total_copies)
        VALUES (
        ${bookId},
        ${shelf},
        ${title},
        ${author},
        ${publication_year},
        ${genre},
        ${price},
        ${language},
        ${image_url},
        ${in_stock},
        ${total_copies})
      `;
    } catch (error) {
        // If a database error occurs, return a more specific error.
        return {
            message: 'Database Error: Failed to Create Book.',
        };
    }

    // Revalidate the cache for the books page and redirect the user.
    revalidatePath('/dashboard/books');
    redirect('/dashboard/books');
}

// Function to update an existing book
export async function updateBook(id: string, prevState: State, formData: FormData) {
    // Validate form using Zod
    const validatedFields = UpdateBook.safeParse({
        bookId: formData.get('bookId'),
        shelf: formData.get('shelf'),
        title: formData.get('title'),
        author: formData.get('author'),
        publication_year: formData.get('publication_year'),
        genre: formData.get('genre'),
        price: Number(formData.get('price')),
        language: formData.get('language'),
        image_url: formData.get('image_url'),
        in_stock: Boolean(formData.get('in_stock')),
        total_copies: Number(formData.get('total_copies')),
    });

    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Update Book.',
        };
    }

    const {
        bookId,
        shelf,
        title,
        author,
        publication_year,
        genre,
        price,
        language,
        image_url,
        in_stock,
        total_copies } = validatedFields.data;
    const amountInCents = price * 100;

    // Update the book in the database
    try {
        await sql`
        UPDATE books
        SET 
        bookId = ${bookId},
        shelf = ${shelf},
        title = ${title},
        author = ${author},
        publication_year = ${publication_year},
        genre = ${genre},
        price = ${price},
        language = ${language},
        image_url = ${image_url},
        in_stock = ${in_stock},
        total_copies = ${total_copies}
        WHERE id = ${id}
      `;
    } catch (error) {
        return { message: 'Database Error: Failed to Update Book.' };
    }

    revalidatePath('/dashboard/books');
    redirect('/dashboard/books');
}
