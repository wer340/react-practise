import React,{Component} from 'react'
import Actress from "./list"
import ImageList from "./imaglist"
import SearchBox from "./searchbox"

class App extends Component{
constructor(){
    super()
    this.state={
        list:Actress,
        searchField:''
    }
}
onSearchChange=(event)=>{
    
this.setState({searchField:event.target.value});

}
render(){
    const filterList=this.state.list.filter(item =>{
       return item.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })
    return(
<div> 
<SearchBox searchText={this.onSearchChange}/>
<div className='grid-template'><ImageList list={filterList} /></div>
</div>
    )
       
}




}

export default App;