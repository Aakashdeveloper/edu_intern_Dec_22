import React,{Component} from 'react';
import Header from '../Header';

const url = "http://3.17.216.66:5000/api/auth/login"

class Login extends Component{

    constructor(props){
        super(props)

        this.state={
            email:'rohini@gmail.com',
            password:'12345678',
            message:''
        }
    }

    handleChange=(event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    handleSubmit=() => {
        fetch(url,{
            method: 'POST',
            headers:{
                'accept':'application/json',
                'content-type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.auth === false){
               this.setState({message:data.token}) 
            }else{
                sessionStorage.setItem('ltk',data.token)
                sessionStorage.setItem('loginStatus','loggedIn')
                this.props.history.push('/')
            }
        })

    }

    render(){
        return(
           <>
           <Header/>
           <hr/>
            <div className="container">
                <div className="panel panel-success">
                    <div className="panel-heading">
                        <h3>Login</h3>
                        <h2>{this.state.message}</h2>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <label for="email" className='control-label'>Email</label>
                                <input className="form-control" id="email" name="email" 
                                value={this.state.email} onChange={this.handleChange}/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label for="password" className='control-label'>Password</label>
                                <input className="form-control" id="password" name="password" 
                                value={this.state.password} onChange={this.handleChange}/>
                            </div>
                        </div>
                        <button className="btn btn-success" onClick={this.handleSubmit}>
                            Login
                        </button>
                    </div>
                </div>
            </div>
           </>
        )
    }
}

export default Login