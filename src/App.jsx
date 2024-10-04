import Header from './components/Header'
import { Outlet } from 'react-router-dom'


function App() {


  return (
    <div className="min-h-screen bg-slate-200">
      <Header />
      <main className="relative flex bg-slate-100 border pt-14">
        <Outlet/>
      </main>
    </div>
  )
}

export default App
