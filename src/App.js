
import './App.css';
import NavBar from './components/NavBar/NavBar'
import Cards from './components/cards/Cards'
import {data} from './components/constants/data'
import {Row} from 'react-bootstrap'
import {Modal } from 'bootstrap';
import ModalBody from './components/Modal/Modal';



function App() {
  return (  
  
  <div>

    
    

 <NavBar/> 
 <ModalBody/>
 
 <Row xs={1} md={5} className="g-4">
  {data.map((el, idx) => 
 <Cards  aaaaa={el} />
 
 )}

</Row>
 
 </div> );


}
 
export default App;
