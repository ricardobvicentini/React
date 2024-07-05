import { useState } from 'react';

function App() {
  const [light, setLight] = useState(0);

  console.log(light);

  const handleColorChange = (e) => {
    setLight(e.target.value);
    document.documentElement.style.setProperty('--light', `${light}%`);
  };

  return (
    <div className='app' /* style={{ '--light': colorStyle }} */>
      <Header onColorChange={handleColorChange} light={light} />
      <h1>Color change sample</h1>
    </div>
  );
}

function Header({ light, onColorChange }) {
  return (
    <header>
      <input
        onChange={onColorChange}
        type='range'
        value={light}
        min='0'
        max='100'
        id='light'
      />
    </header>
  );
}

export default App;
