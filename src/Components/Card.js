import React,{Component} from 'react';
//import CardIndividual from './CardIndividual';

class Card extends Component  {
  constructor(){
      super();
      this.state={
          userCard:"no",
      }
  }
  userDeatils=()=>{
    console.log("clicked on user");
     this.setState({userCard:"yes"})
  }
   render(){
      const {userCard}=this.state;
       return (
         <div>
         {
           (userCard ==="yes")
           ?
           <div className='tc grow bg-gray br3 pa3 ma2 db bw2 shadow-5'>
              <img src={this.props.picture.thumbnail} alt="profile"/>
               <h2>Name:{this.props.username.first} {this.props.username.last}</h2>
               <p>Contact No:{this.props.contactno}</p>
               <p>Email Id:{this.props.email}</p>
               <p>Gender:{this.props.gender}</p>
               <p>Age:{this.props.age}</p>
           </div>
           :
           <div
                className='tc grow bg-gray br3 pa3 ma2 db bw2 shadow-5'
                onClick={this.userDeatils} >
             <div>
                <img src={this.props.picture.thumbnail} alt="profile"/>
                 <h2>{this.props.username.first} {this.props.username.last}</h2>
                 <p>{this.props.contactno}</p>
                 <p>{this.props.email}</p>
             </div>
           </div>
         }
         </div>

       );
   }

}

export default Card;
