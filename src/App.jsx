import './App.css'
import { Address } from './components/profile/Address'
import FullName from './components/profile/FullName'
import { ProfilePhoto } from './components/profile/ProfilePhoto'

function App() {
  return (
    <>
    <ProfilePhoto/>
    <h1 style={{color:"red" }}><FullName /></h1>
    <h2><Address /></h2>
    </>
  )
}

export default App
