export default async function ProductReviews() {
  await new Promise((resolve) => setTimeout(() => { resolve(200) }, 4000))
  return (
    <div className="text-3xl font-bold text-center text-blue-700 mt-6 tracking-wide">
      Product Reviews
    </div>
  )
}
