// In Next.js 13 components are server components by default. They get rendered on the server and you can do data fetching inside of the components.

// ? import Pocketbase from "pocketbase"
import Link from "next/link";
import styles from "./Notes.module.css";

// Next.js 13 has a variety of variables to be used to cache when not using fetch requests, which you can export from the page in order to control caching behavior and runtime.
// ? export const dynamic = "auto",
//   ? dynamicParams = true,
//   ? revalidate = 0,
//   ? fetchCache = "auto",
//   ? runtime = "nodejs",
//   ? preferredRegion = "auto";

async function getNotes() {
  // * You do not need to use the fetch request as pocketbase has an SDK, which works like an Object Relational Mapper (ORM), where we can make a reference to it and grab all records by using db.records.getList("notes").
  // ? const db = new Pocketbase("http://127.0.0.1:8090");
  // ? const data = await db.records.getList("notes");
  // Standard fetch API to retrieve data from the backend.
  // Pocketbase comes with a built-in REST API which you can point to collections and receive a paginated list of results (i.e. Page 1 with 30 results per page).
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30",
    // Next.js auto caches the notes route, because the route segment is not dynamic (It is treated like a static page). We fix this by adding "no-store" to the fetch request so that it will refresh the server on each request (Equivalent to getServerSideProps).
    { cache: "no-store" }
  );
  // Convert the above result into JSON.
  const data = await res.json();
  // Return the items which will be an array of the data in the database.
  return data?.items as any[];
}

export default async function NotesPage() {
  // To fetch the data in the component we need to await a call to the getNotes function, which gives us access to an array of notes to loop over in the API and render out a basic note component.
  const notes = await getNotes();

  return (
    <div>
      <h1>Notes</h1>
      <div className={styles.grid}>
        {notes?.map(note => {
          return <Note key={note.id} note={note} />;
        })}
      </div>
    </div>
  );
}

// This is the note component with title, content, etc.
function Note({ note }: any) {
  const { id, title, content, created } = note || {};

  return (
    <Link href={`/notes/${id}`}>
      <div className={styles.note}>
        <h2>{title}</h2>
        <h5>{content}</h5>
        <p>{created}</p>
      </div>
    </Link>
  );
}
