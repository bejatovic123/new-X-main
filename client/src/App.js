import './style/main.scss';
import AppRouter from './containers/Router';
import { Provider } from 'react-redux';
import {store} from "./redux/store/store";

function App() {
  return <AppRouter />
}

export default App;
