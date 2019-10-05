 import React,{Component} from 'react'; 
import { dummyText } from './Functions';



 class Lorem extends Component{
     render(){
         console.log(this.props);
        return(
            <div>
            <div className={this.props.col}>
                {dummyText}
            </div>
            </div>
                )
     }

   
 }


 export default Lorem;