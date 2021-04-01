import React , {Component} from 'react';                
import PropTypes from 'prop-types';
import EmojiBox from './EmojiBox'

class SearchResult extends Component {
    static propTypes = {
        emojiData: PropTypes.array
    };

    render(){
        return (
            <div className = "emojiResult">
                {this.props.emojiData.map(data => (
                <EmojiBox
                    key={data.title}
                    symbol={data.symbol}
                    title={data.title}
                />
                ))}

            </div>
        );
    }
}

export default SearchResult