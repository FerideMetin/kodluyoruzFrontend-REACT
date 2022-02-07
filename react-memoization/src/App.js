/* import './App.css';

// react.memo 
// Gereksiz renderları kaldırmak için.

import {useState} from 'react'
import Header from './components/Header'

function App() {
  const [number,setNumber] = useState(0);
  return (
    <div className="App">
      <Header number = {number}/>
      <hr/>
      <h1>{number}</h1>
      <button onClick={()=> setNumber(number + 1)}>Click</button>
    </div>
  );
}

export default App;

*/


/*
// useMemo

import './App.css';
import {useMemo, useState} from 'react'
import Header from './components/Header'

function App() {
  const [number,setNumber] = useState(0);

  const data = useMemo(() => {
    return {name : 'Feride'};
  }, [number]); // eğer burda [] içerisine number yazarsan number her değiştiğinde render edilir.

  return (
    <div className="App">
      <Header data={data}/>
      <hr/>
      <h1>{number}</h1>
      <button onClick={()=> setNumber(number + 1)}>Click</button>
    </div>
  );
}

export default App;
*/

// useCallback

import './App.css';
import {useMemo, useState, useCallback} from 'react'
import Header from './components/Header'

function App() {
  const [number,setNumber] = useState(0);
  const [text, setText] = useState("");

  const increment = useCallback (() => {
    setNumber((prevState) => prevState +1);
  }, []); // bu şekilde kullanıldığında header componenti tekrar tekrar render edilmez.

  // depends arrayde verdiğiniz datalar değişene kadar o fonksiyon aynı kalır.

  return (
    <div className="App">
      <Header increment={increment}/>
      <hr/>
      <h1>{number}</h1>
      <br/>
      <br/>
      <input value={text} onChange={({target}) => setText(target.value)} />
    </div>
  );
}

export default App;
