import "@/app/global.css"

export default function componentLoader() {
    return (
        <div className="flex flex-row gap-2">
            <div className="animate-pulse bg-gray-300 w-12 h-12 rounded-full" />
            <div className="flex flex-col gap-2">
                <div className="animate-pulse bg-gray-300 w-28 h-5 rounded-full" />
                <div className="animate-pulse bg-gray-300 w-36 h-5 rounded-full" />
            </div>
        </div>
    )
}
