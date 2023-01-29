import logo from './logo.svg';
import {useContext} from 'react';
import {ThemeArea} from './context/ThemeContext';
import {ContactsSection} from './components/ContactsSection';
import {ThemeSwitcher} from './components/ThemeSwitcher';
import {ThemeContext} from './context/ThemeContext';
import './App.css';
const family = [
  {
    name: "Finn the Human"
  },
  {
    name: "Jake the Dog"
  }
];

const friends = [
  {
    name: "Marceline"
  },
  {
    name: "Princess Bubblegum"
  }
];

function App() {
  const {theme} = useContext(ThemeContext);
  return (
    <div className={`theme-${theme}`}>
      <h1>Contacts</h1>
      <ThemeSwitcher />
      <h2>Family </h2>
      <ThemeArea initialTheme="light">
        <ThemeSwitcher />
        <ContactsSection contacts={family} name="Family" />
      </ThemeArea>
      <h2>Friends </h2>
      <ThemeArea initialTheme="dark">
        <ThemeSwitcher />
        <ContactsSection contacts={friends} name="Friends" />
      </ThemeArea>
    </div>
  );

}

export default App;
