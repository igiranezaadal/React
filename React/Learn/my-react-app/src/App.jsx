import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx';
import Student from './Students.jsx';
import Card from './Card.jsx';

function App() {
  return(
    <>
      <Header/>
      <Food/>
      {/* <Student name='Igraneza Rukamba Adal' age={34} status={false} /> */}
      <Card/>
      <Footer/>

    </>
  );
}

export default App
