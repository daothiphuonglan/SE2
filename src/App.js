import logo from './logo.svg';
import './App.css';

import {Article,Brand,CTA,feature,Navbar} from './components';
import {Blog,footer,Header,addHeader} from './containers'

function App() {
  return (
    <div className="App">
    <div className='gradient_bg'>
        <Navbar></Navbar>
        <Header></Header>
        
    </div>
        <addHeader></addHeader>
        <Brand></Brand>
        
    </div>
  );
}

export default App;
