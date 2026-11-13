import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx';
import Student from './Students.jsx';
import Card from './Card.jsx';
import Counter from './Counter.jsx'
import Button from './Button.jsx';
import CustomHook from './CustomHook.jsx';

function App() {
  return(
    <>
      <Header/>
      {/* <Food/> */}
      {/* <Card/> */}
      <Counter/>
      {/* <Button/> */}
      {/* <Student name='Igraneza Rukamba Adal' age={34} status={false} /> */}
      <CustomHook />

      <Footer/>

    </>
  );
}

export default App
