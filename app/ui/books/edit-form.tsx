'use client';
import { BookForm } from '@/app/lib/definitions';
import { updateBook, State } from '@/app/lib/book-actions';
import { useActionState } from 'react';
import { CurrencyDollarIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from '@/app/ui/button';

export default function EditBookForm({ book }: { book: BookForm }) {
  const initialState: State = { message: null, errors: {} };
  const updateBookWithId = updateBook.bind(null, book.id);
  const [state, formAction] = useActionState(updateBookWithId, initialState);

  return (
    <form action={formAction}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">

        {/* Book ID */}
        <div className="mb-4">
          <label htmlFor="bookid" className="mb-2 block text-sm font-medium">
            Book ID
          </label>
          <input
            id="bookid"
            name="bookid"
            type="text"
            defaultValue={book.bookid}
            placeholder="Enter Book ID"
            className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm placeholder:text-gray-500"
          />
        </div>

        {/* Shelf */}
        <div className="mb-4">
          <label htmlFor="shelf" className="mb-2 block text-sm font-medium">
            Shelf
          </label>
          <input
            id="shelf"
            name="shelf"
            type="text"
            defaultValue={book.shelf}
            placeholder="Enter Shelf"
            className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm placeholder:text-gray-500"
          />
        </div>

        {/* Title */}
        <div className="mb-4">
          <label htmlFor="title" className="mb-2 block text-sm font-medium">
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            defaultValue={book.title}
            placeholder="Enter Book Title"
            className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm placeholder:text-gray-500"
          />
        </div>

        {/* Author */}
        <div className="mb-4">
          <label htmlFor="author" className="mb-2 block text-sm font-medium">
            Author
          </label>
          <input
            id="author"
            name="author"
            type="text"
            defaultValue={book.author}
            placeholder="Enter Book Author"
            className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm placeholder:text-gray-500"
          />
        </div>

        {/* Publication Year */}
        <div className="mb-4">
          <label htmlFor="publication_year" className="mb-2 block text-sm font-medium">
            Publication Year
          </label>
          <input
            id="publication_year"
            name="publication_year"
            type="text"
            defaultValue={book.publication_year}
            placeholder="Enter Publication Year"
            className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm placeholder:text-gray-500"
          />
        </div>

        {/* Genre */}
        <div className="mb-4">
          <label htmlFor="genre" className="mb-2 block text-sm font-medium">
            Genre
          </label>
          <input
            id="genre"
            name="genre"
            type="text"
            defaultValue={book.genre}
            placeholder="Enter Book Genre"
            className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm placeholder:text-gray-500"
          />
        </div>

        {/* Price */}
        <div className="mb-4">
          <label htmlFor="price" className="mb-2 block text-sm font-medium">
            Price (USD)
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="price"
                name="price"
                type="number"
                step="0.01"
                defaultValue={book.price}
                placeholder="Enter USD amount"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm placeholder:text-gray-500"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Language */}
        <div className="mb-4">
          <label htmlFor="language" className="mb-2 block text-sm font-medium">
            Language
          </label>
          <input
            id="language"
            name="language"
            type="text"
            defaultValue={book.language}
            placeholder="Enter Book Language"
            className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm placeholder:text-gray-500"
          />
        </div>

        {/* Image URL */}
        <div className="mb-4">
          <label htmlFor="image_url" className="mb-2 block text-sm font-medium">
            Image URL
          </label>
          <input
            id="image_url"
            name="image_url"
            type="text"
            defaultValue={book.image_url}
            placeholder="Enter Image URL"
            className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm placeholder:text-gray-500"
          />
        </div>

        {/* In Stock Status */}
        <fieldset>
          <legend className="mb-2 block text-sm font-medium">
            Book Availability
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="in-stock"
                  name="in_stock"
                  type="radio"
                  value="true"
                  defaultChecked={book.in_stock === true}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="in-stock"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                >
                  In Stock
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="out-of-stock"
                  name="in_stock"
                  type="radio"
                  value="false"
                  defaultChecked={book.in_stock === false}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="out-of-stock"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Out of Stock
                </label>
              </div>
            </div>
          </div>
        </fieldset>

        {/* Total Copies */}
        <div className="mb-4">
          <label htmlFor="total_copies" className="mb-2 block text-sm font-medium">
            Total Copies
          </label>
          <input
            id="total_copies"
            name="total_copies"
            type="number"
            defaultValue={book.total_copies}
            placeholder="Enter Total Copies"
            className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm placeholder:text-gray-500"
          />
        </div>

      </div>

      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/books"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Edit Book</Button>
      </div>
    </form>
  );
}
