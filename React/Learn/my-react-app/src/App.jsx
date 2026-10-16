import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx';
import Student from './Students.jsx';
import Card from './Card.jsx';
import Counter from './Counter.jsx'

function App() {
  return(
    <>
      <Header/>
      <Food/>
      <Card/>
      <Card/>
      <Card/>
      <Counter></Counter>
      <Student name='Igraneza Rukamba Adal' age={34} status={false} />
      <Footer/>

    </>
  );
}

export default App
