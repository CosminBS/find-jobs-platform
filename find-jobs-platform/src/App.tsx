import './App.css'
import AppRouter from './routes/router'
import { UserDataProvider } from './context/UserDataContext'

function App() {

  return (
    <>
      <UserDataProvider>
        <AppRouter/>
      </UserDataProvider>
    </>
  )
}

export default App
