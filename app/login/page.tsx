import BKRCLogo from '@/app/ui/bkrc-logo';
import LoginForm from '@/app/ui/login-form';
import { Button } from '../ui/button';
import Link from 'next/link'

export default function LoginPage() {
    return (
        <main className="flex items-center justify-center md:h-screen">
            <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
                <div className="flex h-20 w-full items-center justify-center rounded-lg bg-red-500 p-3 md:h-36">
                    <div className="w-32 text-white md:w-36">
                        <BKRCLogo />
                    </div>
                    <div>
                        <h4 className='text-xl text-white text-center font-bold'>Bacha Khan Research Center</h4>
                    </div>
                </div>
                <div>
                    <LoginForm />
                </div>
                <button className="p-2 rounded-md transition text-white ease-in-out delay-150 bg-red-500 hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-300 ...">
                    <Link href="/">
                        Go Back
                    </Link>
                </button>
            </div>
        </main>
    );
}