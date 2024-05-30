import './App.css'
import AppRouter from './routes/router'
import { UserDataProvider, useUserDetails } from './context/UserDataContext'
import Spinner from './components/Spinner/Spinner'

function App() {

  return (
    <>
      <UserDataProvider>
        <AppContent/>
      </UserDataProvider>
    </>
  )
}

export default App

const AppContent = () => {
  const { loading } = useUserDetails();

  return (
    <>
      {loading && <Spinner />}
      <AppRouter />
    </>
  );
};
