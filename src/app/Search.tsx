import Link from "next/link";

const SearchButton: React.FC = () => {
    return (
        <Link href = "/search">
            <button className=" btn btn-ghost bg-[#7e71bb] text-[#c6bfe9] text-xl">Search</button>
        </Link>
    );
};

export default SearchButton;