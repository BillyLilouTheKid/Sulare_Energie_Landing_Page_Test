export default function RegularButton({text} : {text:string}) {
    return (
        <button className="bg-artic-green border border-white shadow px-4 py-1">
            <p className="text-center text-white font-mundial-narrow font-normal">{text}</p>
        </button>
    );
}