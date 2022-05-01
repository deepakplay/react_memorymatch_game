import './App.scss';

import Header from './components/header/header';
import CardList from './components/cardlist/cardlist';

function App() {    
    return (
        <div className="Memory_game">
            <Header/>   
            <CardList/>         
        </div>
    );
}

export default App;
