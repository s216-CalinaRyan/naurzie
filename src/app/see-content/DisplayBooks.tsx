
import { db } from "~/server/db";
import { posts } from "~/server/db/schema";

export default async function DisplayBooks() {
  const data = await db.query.posts.findMany({
    columns: {
      title: true,
      author: true,
      status: true,
      rating: true,
      description: true,
    },
  })
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pl-10">
        {data.map((data, index) => (
          <div key={index} className="card w-96 bg-violet-100 shadow-sm text-[#7e71bb]">
            <div className="card-body">
              <h2 className="card-title">Title: {data.title}</h2>
              <p>Author: {data.author}</p>
              <p>Status: {data.status}</p>
              <p>
                Rating: {data.rating == "0" ? "Unrated" : `${data.rating} stars`}
              </p>
              <p>Description: {data.description || "None"}</p>
              <div className="justify-end card-actions"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
