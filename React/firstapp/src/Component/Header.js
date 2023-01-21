import React,{Component} from 'react';
import './Header.css';

class Header extends Component{

    constructor(){
        super()

        this.state={
            title:'My React App',
            keyword:'User Text Input'
        }
    }

    render(){
        return(
                <>
                    <header>
                        <div className="logo">
                            {this.state.title}
                        </div>
                        <input/>
                        <div style={{color:'white',fontSize:'20px'}}>
                            {this.state.keyword}
                        </div>
                    </header>
                    <hr/>
                </>
            ) 
        }
}


export default Header