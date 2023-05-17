// layout1に累積する形で適用される

export default function SecondLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <p>Layout 2</p>
      {children}
    </>
  )
}