import Link from "next/link";

const AddBook: React.FC = () => {
    return (
        <Link href = "/add">
            <button className=" btn btn-ghost bg-[#7e71bb] text-[#c6bfe9] text-xl">Add Book</button>
        </Link>
    );
};

export default AddBook;