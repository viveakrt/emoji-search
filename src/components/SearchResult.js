import React , {} from 'react';                
import PropTypes from 'prop-types';

import EmojiBox from '../components/EmojiBox'

class EmojiBox extends components {
    static propTypes = {
        emojiData: PropTypes.array
    };

    render(){
        return (
            <div className = "emojiResult">
                {this.props.emojiData.map(emojiData => (
                    <EmojiResultRow
                    key={emojiData.title}
                    symbol={emojiData.symbol}
                    title={emojiData.title}
                />
                ))}
            </div>
        );
    }
}

export default EmojiBox