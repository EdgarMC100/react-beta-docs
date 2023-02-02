export default function SearchBar ({ handleCheckBox }) {
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
        placeholder='Search...'
      />
      <label htmlFor=''>
        <input type='checkbox' onChange={(event) => handleCheckBox(event)} />{' '}
        Only show products in stock
      </label>
    </form>
  )
}
