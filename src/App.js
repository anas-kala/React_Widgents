import './App.css';
import Accordion from './Components/Accordion';
import Search from './Components/Search';


const items = [
  {
    title: 'Whast is React',
    content: 'React is a font end javascript framework'
  },
  {
    title: 'Why use React',
    content: 'React is a favorite JS library among engineers'
  },
  {
    title: 'How to use React React',
    content: 'You use React by using components'
  }
];

function App() {
  return (
    <div>
      <Search />
    </div>
  );
}

export default App;
