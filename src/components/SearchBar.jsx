export default function SearchBar() {
  return (
    <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <input type="text" placeholder="Search..." />
      <label htmlFor="">
        <input type="checkbox" /> Only show products in stock
      </label>
    </form>
  );
}
