import Header from './Header.jsx'
import footer from './Footer.jsx'
import Student from './Students.jsx';
function App() {
  return(
    <>
      <Header/>
      <footer/>
      <Student name='Igraneza Rukamba Adal' age={34} status={false} />

    </>
  );
}

export default App
