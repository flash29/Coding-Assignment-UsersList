import React,{Component} from 'react';
import CardList from './Components/CardList.js'
import './App.css';
import 'tachyons';

class App extends Component {
    constructor(){
        super();
        this.state={
            users:[],
            darkmode:"lightbg"
        }
    }

    componentDidMount() {
        fetch('https://randomuser.me/api/?results=50')
        .then(response=>response.json())
        .then(response=>
          {
            this.setState({
              users:response.results
            })
          }
        );
    }

    modeChange=()=>{
      if(this.state.darkmode==="lightbg"){
        this.setState({darkmode:"darkbg"})
      }
      else{
        this.setState({darkmode:"lightbg"})
      }

    }

    render(){
        return (

          <div className="App">
          {
            this.state.darkmode==="darkbg"
            ?
            <div className="bg-black">
                <p className="heading bg-light-gray">Users List </p>
                <p className="dark pa10" onClick={this.modeChange}> Turn into light mode</p>
                <CardList
                users={this.state.users}
                />
            </div>
            :
            <div className="bg-white">
              <p className="heading">Users List </p>
              <p className="dark pa10" onClick={this.modeChange}> Turn into dark mode</p>
              <CardList
              users={this.state.users}
              />
            </div>

          }



          </div>
        );
    }

}

export default App;
