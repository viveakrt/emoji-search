import PropTypes from "prop-types";
import React, {Component} from "react";

class EmojiBox extends Component {
    static propTypes = {
        title: PropTypes.string,
        Symbol:PropTypes.string
    };

    render() {
        const HexCode = this.props.symbol.codePointAt(0).toString(16);
        const src = `//cdn.jsdelivr.net/emojione/assets/png/${HexCode}.png`;
        return (
            <div className="emojiBox" >
                <img alt={this.props.title} src={src} />
                <span className="title">{this.props.title}</span>
            </div>
            );
    }
}

export default EmojiBox;