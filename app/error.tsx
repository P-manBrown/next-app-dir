// サーバーコンポーネントとクライアントコンポーネントの使い分け
// https://tinyurl.com/2eagztz9
'use client'

export default function Error({ error }: { error: Error }) {
  return (
    <div>
      <p className="mt-6 text-center text-red-500">
        Data fetching in server failed
      </p>
    </div>
  )
}
