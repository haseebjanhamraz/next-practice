import Form from '@/app/ui/books/edit-form';
import Breadcrumbs from '@/app/ui/books/breadcrumbs';
import { fetchBookById } from '@/app/lib/data';
import { notFound } from 'next/navigation';



export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const [book] = await Promise.all([
        fetchBookById(id),
    ]);
    if (!book) {
        notFound();
    };
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Books', href: '/dashboard/books' },
                    {
                        label: 'Edit Book',
                        href: `/dashboard/books/${id}/edit`,
                        active: true,
                    },
                ]}
            />
            <Form book={book} />
        </main>
    );
}