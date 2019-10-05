import React,{Component} from 'react';
import { Button } from 'react-bootstrap';



class Test extends Component{

    handleChange = () =>{
        console.log(this.props.changeBG)

    }

    render(){
        console.log('Inside Test component');
        console.log(this.props)
        return(<div style={{padding:"100px"}}>
            <div>Test Component</div>
            <Button onClick={this.props.changeBG}> Sample button</Button>
            </div>
        )
    }

}

export default Test;