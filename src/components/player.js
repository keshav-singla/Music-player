import React from 'react'
import { withStyles, Paper } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Axios from 'axios';

const styles = {
    root: {
        width: '96%',
        margin: '1%',
        padding: '20px'    },

    playerFunction: {
        display: 'in-line'
    }
};

const ID = '31w52sxrma5d6x5zubmd4ozshm5i';
const OAuthToken = 'BQBS_BcVMCxdmzreUnVgSW-Bu3foRIdd6HzsOTni_7_n2w5sMqso-9iRwMk6x97WziqITUi3fDg3wCg2sUUanzXCOakEJ7vQAbpQPvhdz5mYV4cAMYnmB6crAzP2ycml0updNep74meXF9TPFdlPxe-Ja4Zkpdi0U8EdKA';

class Player extends React.Component {
    constructor(props) {
        super(props)
        this.setState = {

        }
    }

    playPause = () => {

    }

    componentDidMount = () => {
        Axios.get(`https://api.spotify.com/v1/search?q=ed%20sheeran&type=artist Accept: application/json Content-Type: application/json Authorization: Bearer${OAuthToken}`)
            .then(res => {
                const data = res.data;
                // this.setState({ data });
            }
            )
    }

    render() {
        console.log(this.data);

        const { classes } = this.props;

        const PrettoSlider = withStyles({
            root: {
                color: "#52af77",
                height: 8,
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
                borderRadius: 4,
            },
            rail: {
                height: 5,
                borderRadius: 4,
            }
        })(Slider);

        return (
            <div>
                <Paper className={classes.root} >
                    <div>
                        <Grid container >
                            <Grid item xs={12}>
                                <img
                                    src={`https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw`}
                                    alt='new'
                                />
                            </Grid>
                        </Grid>
                    </div>

                    <PrettoSlider
                        valueLabelDisplay="auto"
                        aria-label="pretto slider"
                        defaultValue={20}
                    />

                    <div className={classes.playerFunction}>
                        <SkipPreviousIcon fontSize="large" />
                        <PlayArrowIcon onClick={this.playPause()} fontSize="large" />
                        <SkipNextIcon fontSize="large" />
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