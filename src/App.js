import './App.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import { Home, About, ManagerDashboard, Solutions, Contact, SignIn } from './screens';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Auth } from 'aws-amplify'

// eslint-disable-next-line react-hooks/exhaustive-deps
function App() {
  const [isAdmin, setIsAdmin] = useState(false)
  const [user, setUser] = useState({})

  const getData = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser()
      setIsAdmin(user.signInUserSession.accessToken.payload['cognito:groups'].includes('admin'))
      setUser(user)
    } catch (err) {
      setIsAdmin(false)
      setUser()
      console.error(err)
    }
  }
  useEffect(() => {
    getData()
  },[])
  return (
    <>
      <Router>
        <div className='App'>
          <div className='navigation'>
            <Header user={user} signOut={async () => {await Auth.signOut().then(()=>getData())}} />
          </div>
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/hr-dashboard' element={<ManagerDashboard isManager={isAdmin}/>} />
              <Route path='/sign-in' element={<SignIn setUser={async()=>getData()}/>} />
              <Route path='/solutions' element={<Solutions />} />
              <Route path='/contact-us' element={<Contact />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
