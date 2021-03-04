import './App.css';
import Header from './Components/Header/Header';
import News from './Components/News/News';
import TopHeadline from './Components/TopHeadline/TopHeadline';

function App() {
    return (
        <div>
            <h2>React Bootstrap</h2>
            <Header></Header>
            <TopHeadline></TopHeadline>
            <News></News>
        </div>
    );
}

export default App;
