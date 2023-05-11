import NotesList from "./components/notes-list";

export default function Page() {
  return (
    <main>
      <div className="m-10 text-center">
        <p>Hello World🚀</p>
        {/* @ts-expect-error https://github.com/vercel/next.js/issues/42292 */}
        <NotesList />
      </div>
    </main>
  )
}
