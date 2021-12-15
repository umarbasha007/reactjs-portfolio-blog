import logo from './logo.svg';
import umarImage from './assets/images/umarImage.jfif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={umarImage} className="App-logo" alt="logo" />
        <p>
         🙋‍♂️ This is Umar Basha
        </p>
        
        <p>My react app deployment in GitHub works. 🥳</p>
      <a
          className="App-link"
          href="https://github.com/umarbasha007/react-deploy/blob/main/package.json"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check the package.json file 📃
        </a>
      </header>
    </div>
  );
}

export default App;
