import NewsFeed from "./components/NewsFeed"
import Converter from "./components/converter";


const App = () => {
  return (
    <div className= "app">
      <h1>Crypto Converter</h1>
        <Converter/> 
        <NewsFeed />
    </div>
  );
}

export default App;
