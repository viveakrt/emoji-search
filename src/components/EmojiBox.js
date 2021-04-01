import PropTypes from "props-types";
import React, {Component} from "react";

class EmojiBox extends Component {
    static propTypes = {
        title: PropTypes.string,
        Symbol:PropTypes.string
    };

    render() {
        const HexCode = this.props.symbol.codePointAt(0).toString(6);
        const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
        return (
            <div className="emojiBox" >
                <img alt={this.props.title} src={src} />
                <span className="title">{this.props.title}</span>
            </div>
            );
    }
}

export default EmojiBox;