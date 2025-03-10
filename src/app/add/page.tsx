import AddBook from "../AddBook";
import NaurzieButton from "../NaurzieButton";
import SearchButton from "../Search";

export default function Page () {
    return (
    <main>
    <br></br>
    <br></br>

    <div className="grid grid-flow-col ">
        <div className="box-border m-auto h-96 w-3/4 p-4 border-4 bg-white m4 text-xl rounded-lg">
        <div className="text-2xl text-violet-700 text-center">Add Book</div>
        <form className="m-auto">
            <div className="relative z-0 w-full mb-5 group">
                <input type="text" name="book_title" id="book_title" className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-violet-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="book_title" className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Book Title</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="text" name="author_title" id="author_title" className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-violet-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="author_title" className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Author Name</label>
            </div>  
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="inline-block relative ">
                    <select name="status" id="status" className="block appearance-none w-full bg-white border border-violet-700 hover:border-violet-700 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" defaultValue="" required >
                        <option value="" disabled hidden>Choose Status...</option>
                        <option>Want to Read</option>
                        <option>Currently Reading</option>
                        <option>Read</option>
                        <option>Dropped</option>
                        <option>Took a Break</option>
                    </select>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="integer" pattern="[0-5]{1}.[0-9]{2}" name="rating" id="rating" className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-violet-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                    <label htmlFor="rating" className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Rating (0-5 if completed)</label>
                </div>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="text" name="description" id="description" className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-violet-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="description" className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description (ie. series, format, etc)</label>
            </div> 
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>      
        </div>
    </div>


    </main>
    );
}
