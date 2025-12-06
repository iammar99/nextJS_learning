export default async function Product() {
  await new Promise((resolve) => setTimeout(() => { resolve(200) }, 2000))
  return (
    <div className="text-3xl font-bold text-center text-blue-700 mt-6 tracking-wide">
      Product
    </div>
  )
}
