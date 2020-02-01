import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Slider from "rc-slider";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Tooltip from '@material-ui/core/Tooltip';
import { Link } from 'react-router-dom';
import styles from './styles/NavBarStyles';

import "rc-slider/assets/index.css";
import { withStyles } from '@material-ui/core';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            format: 'hex',
            open: false
        }

        this.handleFormatChange = this.handleFormatChange.bind(this);
        this.closeSnackbar = this.closeSnackbar.bind(this);
    }

    handleFormatChange(e) {
        this.setState({ format: e.target.value, open: true });
        this.props.handleChange(e.target.value);
    }
    closeSnackbar() {
        this.setState({ open: false });
    }

    render() { 
        const { level, changeLevel, showingAllColors, classes } = this.props;
        const { format, open } = this.state;
        return ( 
            <header className={classes.Navbar}>
                <div className={classes.logo}>
                    <Tooltip title="Go to palette list">
                        <Link to="/" alt="palette list">react color palette</Link>
                    </Tooltip>
                </div>
                {showingAllColors && ( 
                    <div>
                        <span>Level: {level}</span>
                        <div className={classes.slider}>
                            <Slider
                                defaultValue={level}
                                min={100}
                                max={900}
                                step={100}
                                onChange={changeLevel}
                            />
                        </div>
                    </div>
                )}
                <div className={classes.selectContainer}>
                    <Select onChange={ this.handleFormatChange } value={ format } >
                        <MenuItem value="hex">HEX - #ffffff</MenuItem>
                        <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
                        <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
                    </Select>
                    <Snackbar 
                        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                        open={open}
                        autoHideDuration={3000}
                        message={
                            <span id="message-id">
                                Format changed to {format.toUpperCase()}
                            </span>
                        }
                        ContentProps={{
                            "aria-describedby": "message-id"
                        }}
                        onClose={this.closeSnackbar}
                        action={[
                            <IconButton
                                onClick={this.closeSnackbar}
                                color='inherit'
                                key='close'
                                aria-label='close'
                            >
                                <CloseIcon />
                            </IconButton>
                        ]}
                    />
                </div>
            </header>
         );
    }
}
 
export default withStyles(styles)(Navbar);