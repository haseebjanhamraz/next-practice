import { formatCurrency } from '@/app/lib/utils';
import { fetchBooks } from '@/app/lib/data';

type Book = {
    id: string;
    bookId: string;
    shelf: string;
    title: string;
    author: string;
    publication_year: number;
    genre: string;
    price: number;
    language: string;
    image_url: string;
    in_stock: boolean;
    total_copies: number;
};

export default async function BooksTable({
    query,
    currentPage,
}: {
    query: string;
    currentPage: number;
}) {
    const books = await fetchBooks(query, currentPage);

    return (
        <div className="mt-6 flow-root">
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                    <MobileBooksList books={books} />
                    <DesktopBooksTable books={books} />
                </div>
            </div>
        </div>
    );
}

function MobileBooksList({ books }: { books: Book[] }) {
    return (
        <div className="md:hidden">
            {books?.map((book) => (
                <div key={book.id} className="mb-2 w-full rounded-md bg-white p-4">
                    <div className="flex items-center justify-between border-b pb-4">
                        <div>
                            <BookCoverWithTitle book={book} />
                            <p className="text-sm text-gray-500">{book.language}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

function DesktopBooksTable({ books }: { books: Book[] }) {
    return (
        <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
                <tr>
                    <TableHeader title="Book Name" />
                    <TableHeader title="Author" />
                    <TableHeader title="Published" />
                    <TableHeader title="Total Copies" />
                    <TableHeader title="Genre" />
                    <TableHeader title="Language" />
                    <TableHeader title="Price" />
                    <th scope="col" className="relative py-3 pl-6 pr-3">
                        <span className="sr-only">Edit</span>
                    </th>
                </tr>
            </thead>
            <tbody className="bg-white">
                {books?.map((book) => (
                    <tr
                        key={book.id}
                        className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                    >
                        <TableCell>
                            <div className="flex items-center gap-3">
                                <p>{book.title}</p>
                            </div>
                        </TableCell>
                        <TableCell>{book.author}</TableCell>
                        <TableCell>{book.publication_year}</TableCell>
                        <TableCell>{book.total_copies}</TableCell>
                        <TableCell>{book.genre}</TableCell>
                        <TableCell>{book.language}</TableCell>
                        <TableCell>{formatCurrency(book.price)}</TableCell>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

function BookCoverWithTitle({ book }: { book: Book }) {
    return (
        <div className="mb-2 flex items-center">
            <p>{book.title}</p>
        </div>
    );
}

function TableHeader({ title }: { title: string }) {
    return (
        <th scope="col" className="px-3 py-5 font-medium">
            {title}
        </th>
    );
}

function TableCell({ children }: { children: React.ReactNode }) {
    return (
        <td className="whitespace-nowrap px-3 py-3">
            {children}
        </td>
    );
}
