import { useState } from 'react';

function App() {
  const [light, setLight] = useState(50);

  function handleColorChange(e) {
    setLight(parseInt(e.target.value));
  }

  const colorStyle = `${light}%`;
  console.log(light);

  return (
    <div className='app' style={{ '--light': colorStyle }}>
      <Header light={light} onChangeColor={handleColorChange} />
      <h1 style={{ color: `oklch(${colorStyle}% 0 0)` }}>
        Color change sample
      </h1>
    </div>
  );
}

function Header({ light, onChangeColor }) {
  console.log(light);
  return (
    <header>
      <input
        onChange={onChangeColor}
        type='range'
        value={light}
        min='50'
        max='70'
        id='light'
      />
    </header>
  );
}

export default App;
