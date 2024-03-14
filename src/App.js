import React, { Component } from 'react';
import './App.css';
import Person from '../Person/Person';
class App extends Component {
  state = {
    Persons: [{ id: 1, name: 'ahmed', age: 32 },
    { id: 2, name: 'mohammed', age: 30 },
    { id: 3, name: 'manaf', age: 33 }
    ],
    showList: false,
  }
  changeName = (name, age) => {
    this.setState(
      {
        Persons: [
          { name: name, age: age }
        ]
      }
    )
  };

  showList =()=>{
let Show=!this.state.showList;
this.setState({showList:Show});

  }
  changeNameHandelr = (event, id) => {
    const index = this.state.Persons.findIndex(p => p.id === id);
    const Personstemp = [...this.state.Persons];
    const temp ={...Personstemp[index]};
    temp.name = event.target.value;
    Personstemp[index] = temp;
    this.setState({ Persons: Personstemp });
  }

  deletePerson =(index) =>{
const temp = {...this.state.Persons[index]};
const TemplistOfPerson =this.state.Persons;

  }

  render() {
    let listOFPerson = null;

    if (this.state.showList) {
      listOFPerson = (
        <div>
          {
            this.state.Persons.map((p, index) => {
              return <Person
              key={p.id}
              name={p.name}
               age={p.age} 
               onClick={this.deletePerson(index)}
               Change={(event) => this.changeNameHandelr(event, p.id)} 
               />
            })
          }
        </div>
      );
    }
    return (      
      <div> 
      {listOFPerson}
        <button onClick={this.showList}> Show</button></div >
    );
  }

}

export default App;
