import reactDom from 'react-dom';
import Corpo from './Conteudo/Corpo';

function App(){
    return(
        <div>
            <Corpo />
        </div>
    )
}

reactDom.render(<App />, document.querySelector('.root'));