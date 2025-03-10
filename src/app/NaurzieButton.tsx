import Link from "next/link";

const NaurzieButton: React.FC = () => {
    return (
        <Link href = "/">
            <button className=" btn btn-ghost bg-[#7e71bb] text-[#c6bfe9] text-4xl">Naurzie</button>
        </Link>
    );
};

export default NaurzieButton;