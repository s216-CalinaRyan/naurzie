"use client"
import { useState, useEffect } from "react";
import uploadData from "../api/upload-stuff/upload";
import { useRouter } from "next/navigation";
import InfiniteScroll from "react-infinite-scroll-component";



export default function UploadForm () {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [status, setStatus] = useState("");
    const [rating, setRating] = useState("");
    const [description, setDescription] = useState("");
    const router = useRouter();
  
    useEffect(() => {
      // This hook will run after the component is mounted on the client side
      // Any code that interacts with the browser (e.g., navigation, DOM manipulation) should go here
    }, []); // Empty dependency array ensures it runs only once, after initial render
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      const result = await uploadData(title, author, status, rating, description);
      console.log(result); // Handle the result as needed
      router.push("/"); // Redirect to the home page after submission, not needed but good to have as example
    };
    
    return (

        
    <main className="h-dvh">
    <br></br>
    <br></br>

    <div className="grid grid-flow-col ">
        <div className="box-border m-auto max-height: fit-content; w-3/4 p-4 border-4 bg-white m4 text-xl rounded-lg">
        <div className="text-2xl text-violet-700 text-center">Add Book</div>
        <form onSubmit={handleSubmit} className="m-auto">
            <div className="relative z-0 w-full mb-5 group">
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-violet-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="book_title" className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Book Title</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-violet-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="author_title" className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Author Name</label>
            </div>  
            <div className="grid md:grid-cols-2 md:gap-6">
            <div className="inline-block relative ">
                    <select className="block appearance-none w-full bg-white border border-violet-700 hover:border-violet-700 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" required value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value="" disabled >Choose Status...</option>
                        <option value="Want to Read">Want to Read</option>
                        <option value="Currently Reading">Currently Reading</option>
                        <option value="Read" >Read</option>
                        <option value="Dropped">Dropped</option>
                        <option value="Took a Break" >Took a Break</option>
                    </select>
                </div>
                <div className="rating rating-lg rating-half py-2.5">
                    <h2 className="text-gray-600">Rating</h2>   
                    <input type="radio" value="0.0" checked={rating === "0.0"} onChange={(e) => setRating(e.target.value)} name="rating-11" className="rating-hidden" />
                    <input type="radio" value="0.5" checked={rating === "0.5"} onChange={(e) => setRating(e.target.value)} name="rating-11" className="mask mask-star-2 mask-half-1 bg-yellow-300" aria-label="0.5 star" />
                    <input type="radio" value="1.0" checked={rating === "1.0"} onChange={(e) => setRating(e.target.value)} name="rating-11" className="mask mask-star-2 mask-half-2 bg-yellow-300" aria-label="1 star" />
                    <input type="radio" value="1.5" checked={rating === "1.5"} onChange={(e) => setRating(e.target.value)} name="rating-11" className="mask mask-star-2 mask-half-1 bg-yellow-300" aria-label="1.5 star" />
                    <input type="radio" value="2.0" checked={rating === "2.0"} onChange={(e) => setRating(e.target.value)} name="rating-11" className="mask mask-star-2 mask-half-2 bg-yellow-300" aria-label="2 star" />
                    <input type="radio" value="2.5" checked={rating === "2.5"} onChange={(e) => setRating(e.target.value)} name="rating-11" className="mask mask-star-2 mask-half-1 bg-yellow-300" aria-label="2.5 star" />
                    <input type="radio" value="3.0" checked={rating === "3.0"} onChange={(e) => setRating(e.target.value)} name="rating-11" className="mask mask-star-2 mask-half-2 bg-yellow-300" aria-label="3 star" />
                    <input type="radio" value="3.5" checked={rating === "3.5"} onChange={(e) => setRating(e.target.value)} name="rating-11" className="mask mask-star-2 mask-half-1 bg-yellow-300" aria-label="3.5 star" />
                    <input type="radio" value="4.0" checked={rating === "4.0"} onChange={(e) => setRating(e.target.value)} name="rating-11" className="mask mask-star-2 mask-half-2 bg-yellow-300" aria-label="4 star" />
                    <input type="radio" value="4.5" checked={rating === "4.5"} onChange={(e) => setRating(e.target.value)} name="rating-11" className="mask mask-star-2 mask-half-1 bg-yellow-300" aria-label="4.5 star" />
                    <input type="radio" value="5.0" checked={rating === "5.0"} onChange={(e) => setRating(e.target.value)} name="rating-11" className="mask mask-star-2 mask-half-2 bg-yellow-300" aria-label="5 star" />
                </div>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-violet-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                <label htmlFor="description" className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Notes (ie. series, format, thoughts, etc)</label>
            </div> 
            <br></br>
            <div className="center-end">
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </div>
            </form>     
        </div>
    </div>
    <br></br>
    <br></br>
    <br></br>
    </main>

        /*<form onSubmit={handleSubmit}>
            <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            required
            />
            <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content"
            required
            />
            <button type="submit">Upload</button>
        </form>*/
    );
}

/*                <div className="inline-block relative ">
                    <select value={status} onChange={(e) => setStatus(e.target.value)} className="block appearance-none w-full bg-white border border-violet-700 hover:border-violet-700 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" defaultValue="" required >
                        <option value="" disabled hidden>Choose Status...</option>
                        <option>Want to Read</option>
                        <option>Currently Reading</option>
                        <option>Read</option>
                        <option>Dropped</option>
                        <option>Took a Break</option>
                    </select>
                </div>*/

                /*                <div className="relative z-0 w-full mb-5 group">
                    <h2 className="text-gray-600">Status</h2>
                        <div className="flex items-center me-4">
                            <input value="Want to Read" checked={status === "Want to Read"} onChange={(e) => setStatus(e.target.value)} type="radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="inline-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Want to Read</label>
                        </div>
                        <div className="flex items-center me-4">
                            <input value="Currently Reading" checked={status === "Currently Reading"} onChange={(e) => setStatus(e.target.value)} type="radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="inline-2-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Currently Reading</label>
                        </div>
                        <div className="flex items-center me-4">
                            <input value="Read" checked={status === "Read"} onChange={(e) => setStatus(e.target.value)} type="radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="inline-checked-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Read</label>
                        </div>
                        <div className="flex items-center me-4">
                            <input value="Dropped" checked={status === "Dropped"} onChange={(e) => setStatus(e.target.value)} type="radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="inline-checked-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Dropped</label>
                        </div>
                        <div className="flex items-center me-4">
                            <input value="Took a Bread" checked={status === "Took a Break"} onChange={(e) => setStatus(e.target.value)} type="radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="inline-checked-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Took a Break</label>
                        </div>
                </div> */