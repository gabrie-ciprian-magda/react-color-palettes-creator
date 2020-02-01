import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Link} from 'react-router-dom';
import chroma from 'chroma-js';
import { withStyles } from '@material-ui/core';
import styles from './styles/ColorBoxStyles';

class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            copied: false
        }

        this.changeCopyState = this.changeCopyState.bind(this);
    }

    changeCopyState() {
        this.setState({
            copied: true
        }, () => setTimeout(() => this.setState({ copied: false }), 2000)
    )};

    render() {
        const {name, background, moreUrl, showingFullPalette, classes} = this.props;
        const {copied} = this.state;
        const isLightColor = chroma(background).luminance() > 0.3;
        return ( 
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div style={{background}} className={classes.ColorBox}>
                    <div style={{ background }} className={`${classes.copyOverlay} ${copied && classes.showOverlay}`} />
                    <div className={`${classes.copyMessage} ${copied && classes.showMessage}`}>
                        <h1 className={isLightColor ? "dark-text" : undefined}>Copied</h1>
                        <p className={classes.copyText}>{background}</p>
                    </div>
                    <div>
                        <div className={classes.boxContent}>
                            <span className={classes.colorName}>{name}</span>
                        </div>
                        <button className={classes.copyButton}>Copy</button>
                    </div>
                    {showingFullPalette && (
                        <Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
                            <span className={classes.seeMore}>More</span>
                        </Link>
                    )}
                </div>
            </CopyToClipboard>
         );
    }
}
 
export default withStyles(styles)(ColorBox);