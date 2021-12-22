import './App.css';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import GlobalStyle from './components/common/Global';
import Brands from './components/Brands';
import Clients from './components/Clients';
import Connect from './components/Connect';
import WorldWide from './components/WorldWide';
import Integrations from './components/Integrations';
import Customers from './components/Customers';
import People from './components/People';
import Community from './components/Community';
import Footer from './components/Footer';
import Home from './pages/Home';

const theme = {
  colors: {
    nav: '#fff',
    header: '#061D2B',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Home />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
