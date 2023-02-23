import { useState, Children } from 'react'
import './App.css'
import ReactLogo from './components/ReactLogo.jsx'
// eslint-disable-next-line no-unused-vars
import FilterableProductTable from './components/FilterableProductTable'
// eslint-disable-next-line no-unused-vars
import Main from './components/Main'
// eslint-disable-next-line no-unused-vars
import MainContent from './components/MainContent'
// eslint-disable-next-line no-unused-vars
import Sidebar from './components/Sidebar'
// eslint-disable-next-line no-unused-vars
import TicTacToe from './containers/TicTacToe'
import NavBar from './components/NavBar'
import SidebarTop from './components/SidebarTop'
const PRODUCTS = [
  { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
  { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
  { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
  { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
  { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
  { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' },
  { category: 'Clean', price: '$1', stocked: true, name: 's' }
]

function App () {
  const [count, setCount] = useState(0)
  return (
    <div className='App'>
      {/* {count === 1
        ? <TicTacToe />
        : <FilterableProductTable products={PRODUCTS} />} */}
      <Main>
        <Sidebar>
          <SidebarTop>
            <ReactLogo
              width={150} color='color: rgb(20 158 202/1)'
            />
            <h3 style={{ lineHeight: '50px' }}>React Exercises</h3>
          </SidebarTop>
          <NavBar />
        </Sidebar>
        <MainContent />
      </Main>
    </div>
  )
}

export default App
