import React,{Component} from 'react';
import './Search.css';

const lurl = "http://3.17.216.66:4000/location";
const rurl = "http://3.17.216.66:4000/restaurant?stateId="

class Search extends Component {

    constructor(props){
        super(props)

        this.state={
            location:'',
            restaurants:''
        }
    }

    renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.state_id} key={item._id}>
                        {item.state}
                    </option>
                )
            })
        }
    }

    renderRest = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option key={item.restaurant_id} value={item.restaurant_id}>
                        {item.restaurant_name} | {item.address}
                    </option>
                )
            })
        }
    }

    handleCity = (event) => {
        let stateId = event.target.value;
        console.log(stateId)
        console.log(`${rurl}${stateId}`)
        fetch(`${rurl}${stateId}`,{method: 'GET'})
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            this.setState({restaurants:data})
        })
    }

    render(){
        return(
            <div id="search">
                <div id="logo">
                    <span>D!</span>
                </div>
                <div id="heading">
                    Find Best Place Near You
                </div>
                <div id="dropdown">
                    <select onChange={this.handleCity}>
                        <option>----Select Your City----</option>
                        {this.renderCity(this.state.location)}
                    </select>
                    <select class="restSelect">
                        <option>----Select Your Restaurants----</option>
                        {this.renderRest(this.state.restaurants)}
                    </select>
                </div>
            </div>
        )
    }

    //api calling on page load
    componentDidMount(){
        fetch(lurl,{method: 'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({location:data})
        })
    }
}

export default Search