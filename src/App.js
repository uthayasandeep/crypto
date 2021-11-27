import NewsFeed from "./components/NewsFeed"
import Converter from "./components/converter";


const App = () => {
  return (
    <div className= "app">
        <Converter/> 
        <NewsFeed />
    </div>
  );
}

export default App;
