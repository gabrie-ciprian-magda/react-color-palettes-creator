import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import { Link } from 'react-router-dom';
import uuid from 'uuid';
import styles from './styles/PaletteStyles';
import { withStyles } from "@material-ui/styles";

class SingleColorPalette extends Component {
    constructor(props) {
        super(props);
        this.state = {
            format: 'hex'
        }

        this.changeFormat = this.changeFormat.bind(this);

        this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    }
    gatherShades(palette, colorToFilterBy) {
        let shades = [];
        let allColors = palette.colors;
        for(let key in allColors) {
            shades = shades.concat(allColors[key].filter(color => color.id === colorToFilterBy));
        }
        // return all shades of given color
        return shades.slice(1);
    }
    changeFormat(val) {
        this.setState({ format: val });
    }
    render() {
        const {format} = this.state;
        const {id, emoji} = this.props.palette;
        const {classes, colorId} = this.props;
        const colorBoxes = this._shades.map(color => (
            <ColorBox key={uuid()} name={color.name} background={color[format]} showingFullPalette={false} />
        ));
        return (
            <div className={classes.Palette}>
                <Navbar handleChange={this.changeFormat} showingAllColors={false} />
                
                <div className={classes.colors}>
                    {colorBoxes}
                    <div className={classes.goBack}>
                        <Link to={`/palette/${id}`}>Go Back</Link>
                    </div>
                </div>

                <PaletteFooter paletteName={colorId} emoji={emoji} />
            </div>
         );
    }
}
 
export default withStyles(styles)(SingleColorPalette);