import Form from '@/app/ui/books/create-form';
import Breadcrumbs from '@/app/ui/books/breadcrumbs';


export default async function Page() {

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Books', href: '/dashboard/books' },
                    {
                        label: 'Create Book',
                        href: '/dashboard/books/create',
                        active: true,
                    },
                ]}
            />
            <Form />
        </main>
    );
}