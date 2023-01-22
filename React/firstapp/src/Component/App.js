import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import ProductDisplay from './productDisplay';
import JSON from './db.json';
class App extends Component {
    constructor(){
        super()

        this.state={
            products:JSON,
            filteredData:JSON
        }
    }
    
    filterData=(keyword)=>{
        let output = this.state.products.filter((item) => {
            return item.name.toLowerCase().indexOf(keyword.toLowerCase())>-1
        })

        this.setState({filteredData:output})
    }

    render(){
        return(
            <>
                <Header userText={(data)=>{this.filterData(data)}}/>
                <ProductDisplay prodData={this.state.filteredData}/>
                <Footer year="2023" month="Jan"/>
            </> 
        )
    }
}


export default App;
