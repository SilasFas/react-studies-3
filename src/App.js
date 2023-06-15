import './App.css';

function App() {

  const handleNameChange = () => {
    const names = ['Jake', 'Kevin', 'Dave', 'Silas']
    const int = Math.floor(Math.random() * 4)
    return names[int]
  }

  return (
    <div className="App">
      <h1>Hello there, Start here!</h1>
      <h2>{handleNameChange()}</h2>

    </div>
  );
}

export default App;
