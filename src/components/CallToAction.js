import React from 'react';
import Link from '../Link';
import { Grid, Typography, Button, useMediaQuery } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
        textTransform: 'none',
        borderRadius: '50px',
        marginRight: 10,
        marginBottom: 10,
    },
    background: {
        backgroundImage: `url('/assets/background.jpg')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        height: '60em',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            backgroundImage: `url('/assets/mobileBackground.jpg')`,
            backgroundAttachment: 'inherit',
        },
    },
    estimate: {
        ...theme.typography.estimate,
        marginRight: '5em',
        marginLeft: '2em',
        [theme.breakpoints.down('sm')]: {
            marginRight: 0,
            marginLeft: 0,
        },
        fontSize: '1.5em',
        width: 200,
    },
}));

function CallToAction(props) {
    const { setValue } = props;
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Grid
            container
            alignItems="center"
            className={classes.background}
            justify={matchesSM ? 'center' : 'space-between'}
            direction={matchesSM ? 'column' : 'row'}
        >
            <Grid
                item
                style={{
                    marginLeft: matchesSM ? 0 : '5em',
                    textAlign: matchesSM ? 'center' : 'inherit',
                }}
            >
                <Grid container direction="column">
                    <Grid item>
                        <Typography variant="h4" color="primary">
                            Simple Software <br /> Revolutionary Results
                        </Typography>
                        <Typography variant="h6" color="initial" paragraph>
                            Take advantage of 21st century
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            component={Link}
                            href="/revolution"
                        >
                            Learn More
                            <ArrowForwardIosIcon fontSize="inherit" />
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.estimate}
                    component={Link}
                    href="/estimate"
                    onClick={() => {
                        setValue(5);
                    }}
                >
                    Free Estimate
                </Button>
            </Grid>
        </Grid>
    );
}

export default CallToAction;
