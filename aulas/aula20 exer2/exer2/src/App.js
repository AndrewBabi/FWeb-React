import './App.css';
import Title from './componentes/componente1';
import Subtitle from './componentes/componente2';
import Input from './componentes/componente3';
import Password from './componentes/componentes4';
import InputPass from './componentes/componentes5';
import Button from './componentes/componentes6';

function App() {
  return (
    <div className="container">
      <div className="login">
        <Title />
        <div className="container2">
          <Subtitle/>
          <Input/>
          <Password/>
          <InputPass/>
        </div>
        <Button/>
      </div>
    </div>
  );
}

export default App;
