import './App.css';

function App() {
  const name = 'John';
  const age = 37;

  const sentence = (
    <div>{name} is {age} years old</div>
  );

  const writeNextQuestion = function () {
    return (
      <strong>
        If {name} is {age}, how old is he going to be next year?
      </strong>
    );
  }

  return (
    <div>
      {writeSentence(name)}
      {sentence}
      <hr />
      {writeNextQuestion()}
      <div>
       Next year, {name} is going to be {age + 1} years old.
      </div>
    </div>
  );
}

function writeSentence(name) {
  return (
    <strong>How old is {name}?</strong>
  );
}

export default App;
