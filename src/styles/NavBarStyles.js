import sizes from "./sizes";

export default {
    Navbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '6vh'
    },

    logo: {
        marginRight: 30,
        padding: '0 2rem',
        fontSize: 18,
        backgroundColor: '#eceff1',
        fontWeight: '700',
        height: '100%',
        display: 'flex',
        alignItems: 'center',

        '& a': {
            textDecoration: 'none',
            color: 'black'
        },
        [sizes.down("xs")]: {
            display: "none"
        }
    },

    slider: {
        width: '340px',
        margin: '0 20px',
        display: 'inline-block',

        '& .rc-slider-rail': {
            height: 8,
            backgroundColor: '#cfdbe3'
        },

        '& .rc-slider-track': {
            backgroundColor: 'transparent'
        },

        '& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover': {
            backgroundColor: '#130e3a',
            outline: 'none',
            border: '2px solid #130e3a',
            boxShadow: 'none',
            width: 16,
            height: 16,
            marginLeft: '-7px',
            marginTop: '-4px'
        },
        [sizes.down("sm")]: {
            width: 150
        }
    },

    selectContainer: {
        marginLeft: 'auto',
        marginRight: '2rem'
    }
}