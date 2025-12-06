export default function loading() {
    return (
        <div>
            <>
                <div className="flex bg-[#121212] p-8 justify-center items-center h-[450px]">
                    <div className="text-center space-y-6">
                        <div className="w-24 h-24 border-4 border-t-[#00ffff] border-gray-700 rounded-full animate-spin mx-auto" />
                        <div className="text-[#00ffff] font-semibold text-4xl opacity-90 animate-fadeIn">
                            Almost There...
                        </div>
                        <div className="text-[#9e9e9e] text-sm opacity-80 animate-fadeIn">
                            <p>We are getting everything ready for you...</p>
                            <p>Sit tight for just a moment.</p>
                        </div>
                    </div>
                </div>
            </>

        </div>
    )
}
