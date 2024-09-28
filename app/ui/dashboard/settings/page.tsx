import Languages from "./components/languages"
import User from "./components/user"


export default async function Settings() {
    return (

        <div className="grid grid-cols-4 grid-flow-* gap-4">
            <div>
                <User />
            </div>
            <div>
                <Languages />
            </div>
            <div>
                <p>Hello</p>
            </div>
            <div>

                <p>Hello</p>
            </div>
            <div>

                <p>Hello</p>
            </div>
        </div>
    )
}