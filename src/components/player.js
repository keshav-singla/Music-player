import React from 'react'
import { withStyles, Paper } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Typography from '@material-ui/core/Typography';



const styles = {
    root: {
        width: '98%',
        padding: '1%',
    },

    playerFunction: {
        display: 'in-line'
    }
};


class Player extends React.Component {
    constructor(props) {
        super(props)
        this.setState = {

        }
    }

    playPause = () => {

    }

    render() {
        const { classes } = this.props;

        const PrettoSlider = withStyles({
            root: {
                color: "#52af77",
                height: 8
            },
            thumb: {
                height: 24,
                width: 24,
                backgroundColor: "#fff",
                border: "2px solid currentColor",
                marginTop: -8,
                marginLeft: -12,
                "&:focus,&:hover,&$active": {
                    boxShadow: "inherit"
                }
            },
            active: {},
            valueLabel: {
                left: "calc(-50% + 4px)"
            },
            track: {
                height: 8,
                borderRadius: 4
            },
            rail: {
                height: 5,
                borderRadius: 4
            }
        })(Slider);

        return (
            <div className={classes.root}>
                <Paper className={classes.root}>
                    <div>
                        <img
                            src={`https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw`}
                            alt='new'
                        />

                    </div>


                    <PrettoSlider
                        valueLabelDisplay="auto"
                        aria-label="pretto slider"
                        defaultValue={20}
                    />

                    <div className={classes.playerFunction}>
                        <SkipPreviousIcon />
                        <PlayArrowIcon onClick={this.playPause()} />
                        <SkipNextIcon />
                    </div>

                    <Grid container spacing={2}>
                        <Grid item>
                            <VolumeDown />
                        </Grid>
                        <Grid item xs>
                            <Slider aria-labelledby="continuous-slider" />
                        </Grid>
                        <Grid item>
                            <VolumeUp />
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        )
    }
}

export default withStyles(styles)(Player);