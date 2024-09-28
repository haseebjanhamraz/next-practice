import SideNav from '@/app/ui/dashboard/sidenav';

export const experimental_ppr = true;
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen flex-col md:flex-row overflow-hidden">
            {/* SideNav */}
            <div className="w-full flex-none md:w-64 md:h-full">
                <SideNav />
            </div>

            {/* Main Content Area */}
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12 min-w-0">
                {children}
            </div>
        </div>
    );
}
