import React,{Component} from 'react';
import './Header.css'
import {Link} from 'react-router-dom'

const url = "http://3.17.216.66:5000/api/auth/userinfo"

class Header extends Component {

    constructor(){
        super()

        this.state={
            userData:''
        }
    }

    handleLogout = () => {
        sessionStorage.removeItem('ltk');
        sessionStorage.setItem('loginStatus','loggedOut')
        this.setState({userData:''});
        this.props.history.push('/')
    }

    conditionalHeader = () => {
        if(this.state.userData.name){
            let data = this.state.userData;
            sessionStorage.setItem('userInfo',JSON.stringify(data))
            return(
                <div id="social">
                    <Link to="/" className="btn btn-warning">
                        <span className="glyphicon glyphicon-user"></span>  Hi {data.name}
                    </Link> &nbsp;
                    <button className="btn btn-danger" onClick={this.handleLogout}>
                        <span className="glyphicon glyphicon-log-out"></span> LogOut
                    </button>
                </div> 
            )
        }else{
            return(
                <div id="social">
                    <Link to="/login" className="btn btn-warning">
                        <span className="glyphicon glyphicon-log-in"></span> Login
                    </Link> &nbsp;
                    <Link to="/register" className="btn btn-success">
                        <span className="glyphicon glyphicon-user"></span> Register
                    </Link>
                </div> 
            )
        }
    }   


    render(){
        return(
            <header>
                <div id="brand">
                    Developer Funnel  &nbsp; <Link className='btn btn-info' to="/">Home</Link>
                </div>
                {this.conditionalHeader()}
            </header>
        )
    }

    componentDidMount(){
        fetch(url,{
            method:'GET',
            headers:{
                'x-access-token':sessionStorage.getItem('ltk')
            }
        })
        .then((res) => res.json())
        .then((data) =>{
            this.setState({
                userData:data
            })
        })
    }
    
}

export default Header