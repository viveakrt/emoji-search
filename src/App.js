import React, {
  Component
} from "react";
import InputSearch from "./components/InputSearch"
import SearchEmoji from "./components/SearchEmoji"

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filteredEmoji: SearchEmoji("", 20)
    };
  }


  handleSearchChange = event =>{
    this.setState({
      SearchEmoji: SearchEmoji(event.target.value,20)
    });
  };

  render (){
    return (
      <InputSearch textChange={this.handleSearchChange} />
    );
  }
}

export default App;