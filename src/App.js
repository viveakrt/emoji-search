import React, {
  Component
} from "react";
import InputSearch from "./components/InputSearch"
import SearchEmoji from "./components/SearchEmoji"
import SearchResult from "./components/SearchResult"


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
      <div>
      <InputSearch textChange={this.handleSearchChange} />
      <SearchResult emojiData={this.state.SearchEmoji} />
      </div>
    );
  }
}

export default App;