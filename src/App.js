import Header from './components/Header'
import Card from './components/Card'
import data from "./data"
function App() {
  const cards = data.map(card => {
    return (
      <Card card={card} />
    )
  })
  return (
    <div className="App">
      <Header />
      <div className="cards">
        {cards}
      </div>
    </div>
  );
}

export default App;
