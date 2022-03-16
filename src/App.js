import logo from './logo.svg';
import './App.css';

const students=[
  {name:' Sakibal Hassan',division:'Mathematics',id:52456},
  {name:' RJ Kibria',division:'Chemistry',id:52458},
  {name:' Litondas',division:'Economics',id:52459},
  {name:' Polas Hosain',division:'Bangla',id:52457},
]

function App() {
  return (
    <div className="App">
      <h1>Card Designer</h1>
      {   
       students.map(student=><Student name={student.name} division={student.division} id={student.id}></Student>)
     }
    </div>
  );
}
function Student(props) {
  return (
    <div className="student">
      <h3>Name:{props.name}</h3>
      <p>Division:{props.division}</p>
      <p>ID:{props.id}</p>
    </div>
  );
}

export default App;
