import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';

function App() {
  const [language, setLanguage] = useState('fr');

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  }
  return (
    <div className="App">
      <Header onLanguageChange={handleLanguageChange} />
      <Body language={language} />
    </div>
  );
}

export default App;
