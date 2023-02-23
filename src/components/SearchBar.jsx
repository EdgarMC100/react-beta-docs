export default function SearchBar ({ handleCheckBox, handleFilterText, inStockOnly, filterText }) {
  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <input
        style={{
          fontSize: '1.5rem',
          padding: '10px',
          borderRadius: '10px',
          border: 'none'
        }}
        type='text'
        value={filterText}
        placeholder='Search...'
        onChange={(event) => handleFilterText(event.target.value)}
      />
      <label htmlFor=''>
        <input type='checkbox' onChange={(event) => handleCheckBox(event)} />{' '}
        Only show products in stock
      </label>
    </form>
  )
}
