import { Suspense } from 'react'
import NotesList from './components/notes-list'
import TimerCounter from './components/timer-counter'
import Spinner from './components/spinner'
import RefreshBtn from './components/refresh-btn'

export default function Page() {
  return (
    <main>
      <div className="m-10 text-center">
        <p>Hello World🚀</p>
        {/* 以下のように記述することでNotesListのみSpinnerが表示される */}
        <Suspense fallback={<Spinner color="border-green-500" />}>
          {/* @ts-expect-error https://tinyurl.com/2qz83lv7 */}
          <NotesList />
        </Suspense>
        <TimerCounter />
        {/* RefreshBtnを */}
        <RefreshBtn />
      </div>
    </main>
  )
}
