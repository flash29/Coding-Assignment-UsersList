import React,{Component} from 'react';

class CardIndividual extends Component  {

   render(){

       return (
         <div className='tc grow bg-gray br3 pa3 ma2 db bw2 shadow-5' >
           <div>
             <h2>{this.props.key}</h2>

           </div>
         </div>
       );
   }

}

export default CardIndividual;
