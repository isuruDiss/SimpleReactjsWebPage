import React,{Component} from 'react';
import './resources/styles.css';
import Header from './components/Header_Footer/Header.js';

class App extends Component {

  render(){
  return (
    <div className="App" style={{height:'1500px',background:"#FFBF00"}} >
      <Header/>
    </div>
  );
}
}
export default App;
