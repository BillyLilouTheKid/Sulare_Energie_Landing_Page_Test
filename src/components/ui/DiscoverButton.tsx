export default function DiscoverButton({text = "Découvrir"} : {text?:string}) {
    return (
        <button className="bg-artic-green border border-white shadow flex items-center w-fit">
            <p className="flex-1 text-center text-white text-sm font-mundial-narrow font-normal px-4 ml-2">{text}</p>

            <div className="h-full w-8 aspect-square bg-white flex justify-center items-center rounded-full">
                <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 text-billard-room">
                    <path d="M8 5v14l11-7-11-7z" fill="currentColor" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
                </svg>
            </div>
        </button>
    );
}