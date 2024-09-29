"use client";

import { createBook, State } from '@/app/lib/book-actions';
import { useActionState } from 'react';
import Link from 'next/link';
import { bookFormFields } from '@/app/lib/book-form-fields';
import { Button } from '@/app/ui/button';

export default function Form() {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useActionState(createBook, initialState);

  return (
    <form action={formAction}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {bookFormFields.map((field) => (
          <div className="mb-4" key={field.id}>
            <label htmlFor={field.id} className="mb-2 block text-sm font-medium">
              {field.label}
            </label>
            <div className="relative mt-2 rounded-md">
              {field.type === "checkbox" ? (
                <input
                  id={field.id}
                  name={field.id}
                  type="checkbox"
                  className="peer block h-5 w-5 rounded border-gray-200 text-blue-600 focus:ring-2 focus:ring-blue-200"
                  aria-describedby={`${field.id}-error`}
                />
              ) : (
                <input
                  id={field.id}
                  name={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  className="peer block w-full rounded-md border border-gray-200 py-2 px-3 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  aria-describedby={`${field.id}-error`}
                />
              )}
            </div>
            <div id={`${field.id}-error`} aria-live="polite" aria-atomic="true">
              {state.errors?.[field.id as keyof State['errors']] &&
                (state.errors[field.id as keyof State['errors']] as string[]).map(
                  (error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                      {error}
                    </p>
                  )
                )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/invoices"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create Book</Button>
      </div>
    </form>
  );
}
