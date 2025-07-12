import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <p>Check</p>
//     </div>
//   );
// }

// export default App;
// import { ButtonCounter,useState } from './components/ButtonCounter';
import { useState } from 'react';

const items = [
  { title: '1', content: 'First content' },
  { title: '2', content: 'Second content' },
];

export const App = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    console.log('index', index);
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div>
          <button key={index} onClick={() => handleClick(index)}>
            {item.title}
          </button>
          {activeIndex === index && <div>{item.content}</div>}
        </div>
      ))}
    </div>
  );
};

