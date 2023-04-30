import './App.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import { Home, About, ManagerDashboard, Solutions, Contact } from './screens';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

const protectedRoute = ({ user, component: Component, userRole }) => {
  console.log('here');
  if (user) {
    if (user.signInUserSession?.accessToken?.payload?.scope?.includes(userRole))
      return <Component />;
    return <Home />;
  }
};
function App({ signOut, user }) {
  return (
    <>
      <Router>
        <div className='App'>
          <div className='navigation'>
            <Header user={user} signOut={signOut} />
          </div>
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/hr-dashboard' element={<ManagerDashboard />} />
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

export default withAuthenticator(App);
