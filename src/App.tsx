import { Container, ContainerMobile } from './styled'
import './App.css';
// import NavBar from './components/navbar';
import Routes from './routes';

function App() {
  return (
    <Container>
      <ContainerMobile>
        <Routes />

        {/* <NavBar /> */}
      </ContainerMobile>
    </Container>
  );
}

export default App;