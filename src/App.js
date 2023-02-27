import './App.css';
import About from './components/About';
import MastHead from './components/MastHead';
import Section from './components/Section';
import Container from './components/Container';
import MyComponent from './components/MYComponent';

function App() {
  return (
    <div>
        <MastHead />
        <About />
        <hr />
        <Section />
        <Container />
        <MyComponent />
    </div>
  );
}

export default App;
