import React from 'react';
import Search from './Components/Searchbar.js';
import VList from './Components/VideoList';
import VDetails from './Components/VideoDetails';
// import Youtube from './Tube';
import './App.css';

class App extends React.Component {
  state = { 
    videos:[],
    selected:null
   }
   handelSubmit=async(termFromSearchBar)=>{
    //  const res=await Youtube.get('./Search',{
    //    params:{
    //      r:termFromSearchBar
    //    }
    //  })
    //  this.setState({
    //    videos:res.data.items
    //  })
   };
   handelVideoSelected=(video)=>{
     this.setState({selected:video})

   }
  render() { 
    return (  
      <div className="ui container" style={{marginTop:'10px'}}>
        <Search handelFromSubmit={this.handelSubmit}/>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VDetails videos={this.state.selected}/>

            </div>
            <div className="five wide column">
              <VList handelVideoSelected={this.handelVideoSelected} videos={this.state.videos}/>

            </div>
             
          </div>

        </div>

      </div>
    );
  }
}
 
export default App;
