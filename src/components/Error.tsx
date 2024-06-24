
export default function Error({children} : {children : React.ReactNode}) {
  return (
    <p className="text-center my-4 bg-purple-800 text-white p-1 text-sm">
      {children}
    </p>
  )
}
