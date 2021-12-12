import { useState } from 'react/cjs/react.development';
import './App.css';
import Accordion from './Components/Accordion';
import DropDown from './Components/DropDown';
import Header from './Components/Header';
import Route from './Components/Route';
import Search from './Components/Search';
import Translate from './Components/Translate.js';


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

const options = [
  {
    label: 'The color Red',
    value: 'red'
  },
  {
    label: 'The color Green',
    value: 'green'
  },
  {
    label: 'The color blue',
    value: 'blue'
  }
]

function App() {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <DropDown
          label="Select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
}

export default App;
