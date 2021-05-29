import './App.css';


function Food(props) {
  console.log(props);
  return <h1>I like { props.fav }</h1>
}

function Season({ season }) {
  return <h2>I love { season }</h2>
}

function App() {
  return <div>
      <h1>HELLO WORLD!!</h1>
      <Food fav="kimchi" something={true} papapa={[1, 2, 3, 4, true]} />
      <Season season="spring"/>
      <Season season="summer"/>
      <Season season="fall"/>
      <Season season="winter"/>
        </div>
}

export default App;
