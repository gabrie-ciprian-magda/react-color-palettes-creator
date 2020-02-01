import sizes from "./sizes";
import chroma from "chroma-js";

const styles = {
    root: {
        width       : '20%',
        height      : '25%',
        margin      : '0 auto',
        display     : 'inline-block',
        position    : 'relative',
        cursor      : 'pointer',
        marginBottom: '-5px',

        "&:hover svg": {
            color: 'white',
            transform: 'scale(1.5)'
        },
        [sizes.down("lg")]: {
            width: "25%",
            height: "20%"
        },
        [sizes.down("md")]: {
            width: "50%",
            height: "10%"
        },
        [sizes.down("sm")]: {
            width: "100%",
            height: "6%"
        }
    },
    boxContent: {
        position      : 'absolute',
        width         : '100%',
        left          : 0,
        bottom        : 0,
        padding       : 10,
        color: props =>
            chroma(props.color).luminance() <= 0.08 ? "white" : "black",
        letterSpacing : 1,
        textTransform : 'uppercase',
        fontSize      : 12,
        display       : 'flex',
        justifyContent: 'space-between'
    },
    deleteIcon: {
        transition: 'all 0.3s ease-in-out'
    }
}

export default styles;