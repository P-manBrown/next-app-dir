import type { Database } from '../../database.types'
import { format } from 'date-fns'

// Noteの型(database.typesのもの)
type Note = Database['public']['Tables']['notes']['Row']

// Notesをfetchするための関数
async function fetchNotes() {
  // 意図的に2000ms遅らせている
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const res = await fetch(`${process.env.url}/rest/v1/notes?select=*`, {
    headers: new Headers({
      apikey: process.env.apikey as string,
    }),
    // cache: にはforce-cache(デフォルト), no-storeを使用できる)
    cache: 'force-cache',
    // nextにはrevalidateを設定できる
    //next: { revalidate: 10 },
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data in server')
  }
  const notes: Note[] = await res.json()
  return notes
}

export default async function NotesList() {
  const notes = await fetchNotes()
  return (
    <div>
      <p className="my-4 pb-3 text-xl font-medium underline underline-offset-4">
        Notes
      </p>
      <ul className="m-3">
        {/* 取得したnotesを表示する */}
        {notes.map((note) => (
          <li key={note.id}>
            <p> {note.title}</p>
            <p>
              <strong className="mr-3">Created at:</strong>
              {note && format(new Date(note.created_at), 'yyyy-MM-dd HH:mm:ss')}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
