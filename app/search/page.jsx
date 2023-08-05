export default function Search({ searchParams }) {
  const { category } = searchParams;
  console.log(category);
  return (
    <div>
      <h1>Category: {category}</h1>
    </div>
  )
}