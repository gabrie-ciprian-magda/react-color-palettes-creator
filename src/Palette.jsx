import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import { withStyles } from "@material-ui/styles";
import styles from "./styles/PaletteStyles";
import uuid from 'uuid';

class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 500,
            format: 'hex'
        };

        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }

    changeLevel(level) {
        this.setState({ level });
    }

    changeFormat(val) {
        this.setState({ format: val });
    }

    render() {
        const { colors, paletteName, emoji, id } = this.props.palette;
        const { classes } = this.props;
        const { level, format } = this.state;
        const colorBoxes = colors[level].map(c => (
            <ColorBox background={c[format]} key={uuid()} name={c.name} moreUrl={`/palette/${id}/${c.id}`} showingFullPalette />
        ));
        return ( 
            <div className={classes.Palette}>
                <Navbar handleChange={this.changeFormat} level={level} changeLevel={this.changeLevel} showingAllColors />
                <div className={classes.colors}>
                    { colorBoxes }
                </div>

                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
         );
    }
}
 
export default withStyles(styles)(Palette);