import './App.css';
import{Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Create from './components/Create';
import NavBar from './components/NavBar';
import Edit from './components/Edit';
import Delete from './components/Delete';
import TableData from './components/TableData'
import Games from './components/Games'
import Download from './components/Download'
import Signup from './components/Signup';
import FirebaseAuth from './components/FirebaseAuth';
import Member from './components/Member';



function App() {
  const myWidth = 200
  return (
    <div className="App">
     
      <NavBar 
        drawerWidth={myWidth}
        content = {
          <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/> 
          <Route path="/create" element={<Create/>}/>
          <Route path="/tabledata/edit/:id" element={<Edit/>}/>
          <Route path="/tabledata/delete/:id" element={<Delete/>}/>
          <Route path="/tabledata" element={<TableData/>}/>
          <Route path="/games" element={<Games/>}/>
          <Route path="/download" element={<Download/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/firebaseauth" element={<FirebaseAuth />} />
          <Route path="/member" element={<Member />} />

          
        

          
        </Routes>
        }
      />

      
    </div>
  );
}

export default App;
