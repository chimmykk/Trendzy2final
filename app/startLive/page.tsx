import Link from "next/link"
import CreateStream from "./components/createStreamModal"

export default function LiveStream(){
    return(
            <div className="bg-black min-h-screen w-full py-4">
                <CreateStream />
            </div>
    )
}