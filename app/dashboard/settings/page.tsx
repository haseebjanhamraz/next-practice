
import Settings from "@/app/ui/dashboard/settings/page"
import Languages from "@/app/ui/dashboard/settings/components/languages";
import { fetchLang } from '@/app/lib/data';

export default async function Page() {
    const lang = await fetchLang();
    return (
        <div className="">
            <div className="w-full over-">
                <div className="m-4">
                    <h1 className="text-2xl font-md">Settings</h1>
                </div>
                <Settings />
            </div>
        </div>
    )
}