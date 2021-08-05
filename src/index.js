import reducer from './reducer';

const number = document.querySelector("span");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
number.innerHTML = 0;
const onChange = () => {
  number.innerHTML = reducer.getState();
}
reducer.subscribe(onChange);
const handlePlus =()=>{
    reducer.dispatch({ type: 'ADD' });
}

const handleMinus =()=>{
    reducer.dispatch({ type: 'MINUS' });
}

plus.addEventListener('click', handlePlus);
minus.addEventListener('click', handleMinus);
