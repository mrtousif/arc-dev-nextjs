import React from 'react';
import Link from '../src/Link';
import {
    Grid,
    Typography,
    Button,
    Card,
    CardContent,
    useMediaQuery,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Lottie from 'lottie-react';
import CallToAction from '../src/components/CallToAction';
import landingAnimation from '../public/animations/landinganimation/data.json';

const useStyles = makeStyles((theme) => ({
    animation: {
        maxWidth: '50em',
        minWidth: '19em',
        // marginTop: '2em',
        marginLeft: '10%',
        [theme.breakpoints.down('sm')]: {
            maxWidth: '25em',
        },
        [theme.breakpoints.down('xs')]: {
            maxWidth: '20em',
        },
    },
    button: {
        textTransform: 'none',
        borderRadius: '50px',
        marginRight: 10,
        marginBottom: 10,
    },
    estimate: {
        ...theme.typography.estimate,
        marginRight: 10,
        marginBottom: 10,
    },
    mainContainer: {
        marginTop: '5em',
        [theme.breakpoints.down('md')]: {
            marginTop: '3em',
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: '2em',
        },
    },
    heroTextContainer: {
        // minWidth: '21.5em',
        marginLeft: '1em',
        [theme.breakpoints.down('xs')]: {
            margin: 'auto',
        },
    },
    icon: {
        [theme.breakpoints.up('sm')]: {
            marginLeft: '2em',
        },
    },
    serviceContainer: {
        marginTop: '12em',
        [theme.breakpoints.down('sm')]: {
            padding: 16,
        },
    },
    specialText: {
        fontFamily: 'Pacifico',
        color: theme.palette.secondary.main,
    },
    revolutionBackground: {
        backgroundImage: `url('/assets/repeatingBackground.svg')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        width: '100%',
    },
    revolutionCard: {
        position: 'absolute',
        boxShadow: theme.shadows[10],
        padding: '10em',
        borderRadius: 15,
        [theme.breakpoints.down('sm')]: {
            paddingTop: '8em',
            paddingBottom: '8em',
            paddingLeft: 0,
            paddingRight: 0,
            borderRadius: 0,
            width: '100%',
        },
    },
    infoBackground: {
        backgroundImage: `url('/assets/infoBackground.svg')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        width: '100%',
    },
}));

export default function LandingPage(props) {
    const { setValue, setSelectedIndex } = props;
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

    // const defaultOptions = {
    //     loop: true,
    //     autoplay: false,
    //     animationData: landingAnimation,
    //     rendererSettings: {
    //         preserveAspectRatio: 'xMidYMid slice',
    //     },
    // };

    return (
        <Grid container direction="column" className={classes.mainContainer}>
            <Grid item>
                {/*------Hero Block--------*/}
                <Grid container justify="flex-end" alignItems="center">
                    <Grid item sm className={classes.heroTextContainer}>
                        <Typography
                            variant={matchesSM ? 'h5' : 'h4'}
                            align="center"
                            color="primary"
                            gutterBottom
                        >
                            Bringing west coast technology <br />
                            to the midwest
                        </Typography>

                        <Grid container justify="center">
                            <Button
                                variant="contained"
                                color="secondary"
                                className={classes.estimate}
                                component={Link}
                                href="/estimate"
                                onClick={() => setValue(5)}
                            >
                                Free Estimate
                            </Button>
                            <Button
                                variant="outlined"
                                color="primary"
                                className={classes.button}
                                component={Link}
                                href="/revolution"
                                onClick={() => setValue(2)}
                            >
                                Learn More
                                <ArrowForwardIosIcon fontSize="inherit" />
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid item sm className={classes.animation}>
                        <Lottie
                            animationData={landingAnimation}
                            // options={defaultOptions}
                            // height={'100%'}
                            // width={'100%'}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                {/*------Custom Software Block--------*/}
                <Grid
                    container
                    justify={matchesSM ? 'center' : undefined}
                    className={classes.serviceContainer}
                >
                    <Grid
                        item
                        style={{
                            marginLeft: matchesSM ? 0 : '5em',
                            textAlign: matchesSM ? 'center' : undefined,
                        }}
                    >
                        <Typography
                            variant="h5"
                            // align="center"
                            color="primary"
                        >
                            Custom Software Development
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom>
                            Save Energy. Save Time. Save Money
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            Complete digital solution from investigation to
                            <span className={classes.specialText}>
                                {' '}
                                celebration
                            </span>
                        </Typography>
                        <Button
                            variant="outlined"
                            color="primary"
                            className={classes.button}
                            component={Link}
                            href="/customsoftware"
                            onClick={() => {
                                setValue(1);
                                setSelectedIndex(1);
                            }}
                        >
                            Learn More
                            <ArrowForwardIosIcon fontSize="inherit" />
                        </Button>
                    </Grid>
                    <Grid item className={classes.icon}>
                        <img
                            alt="custom software"
                            src="/assets/customSoftwareIcon.svg"
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                {/*------Mobile App Block--------*/}
                <Grid
                    container
                    justify={matchesSM ? 'center' : 'flex-end'}
                    className={classes.serviceContainer}
                >
                    <Grid
                        item
                        style={{
                            textAlign: matchesSM ? 'center' : undefined,
                        }}
                    >
                        <Typography
                            variant="h5"
                            // align="center"
                            color="primary"
                        >
                            Android/iOS App Development
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom>
                            Extend functionality. Extend Access. Increase
                            Engagement.
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            Integrate your web experience or create standalone
                            app{matchesSM ? null : <br />} with either mobile
                            platform
                        </Typography>
                        <Button
                            variant="outlined"
                            color="primary"
                            className={classes.button}
                            component={Link}
                            href="/mobileapp"
                            onClick={() => {
                                setValue(1);
                                setSelectedIndex(2);
                            }}
                        >
                            Learn More
                            <ArrowForwardIosIcon fontSize="inherit" />
                        </Button>
                    </Grid>
                    <Grid
                        item
                        className={classes.icon}
                        style={{ marginRight: matchesSM ? 0 : '5em' }}
                    >
                        <img
                            alt="mobile app"
                            src="/assets/mobileIcon.svg"
                            width="220"
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                {/*------Website Block--------*/}
                <Grid
                    container
                    justify={matchesSM ? 'center' : undefined}
                    className={classes.serviceContainer}
                >
                    <Grid
                        item
                        style={{
                            marginLeft: matchesSM ? 0 : '5em',
                            textAlign: matchesSM ? 'center' : undefined,
                        }}
                    >
                        <Typography
                            variant="h5"
                            // align="center"
                            color="primary"
                        >
                            Website Development
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom>
                            Reach More. Discover More. Sell More
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            Optimized for search engines, built for speed
                        </Typography>
                        <Button
                            variant="outlined"
                            color="primary"
                            className={classes.button}
                            component={Link}
                            href="/website"
                            onClick={() => {
                                setValue(1);
                                setSelectedIndex(3);
                            }}
                        >
                            Learn More
                            <ArrowForwardIosIcon fontSize="inherit" />
                        </Button>
                    </Grid>
                    <Grid item className={classes.icon}>
                        <img alt="website" src="/assets/websiteIcon.svg" />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid
                    container
                    justify="center"
                    alignItems="center"
                    style={{ height: '60em', marginTop: '12em' }}
                >
                    <Card className={classes.revolutionCard}>
                        <CardContent>
                            <Grid
                                container
                                direction="column"
                                style={{ textAlign: 'center' }}
                            >
                                <Grid item>
                                    <Typography
                                        variant="h3"
                                        className={classes.specialText}
                                        gutterBottom
                                    >
                                        The Revolution
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography
                                        variant="subtitle1"
                                        gutterBottom
                                    >
                                        Visionary insights coupled with
                                        revolutionary technology is a recipe for
                                        revolution
                                    </Typography>
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        className={classes.button}
                                        component={Link}
                                        href="/revolution"
                                        onClick={() => setValue(2)}
                                    >
                                        Learn More
                                        <ArrowForwardIosIcon fontSize="inherit" />
                                    </Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <div className={classes.revolutionBackground} />
            </Grid>

            <Grid item>
                {/* -----Information Block */}
                <Grid
                    container
                    style={{ height: '50em' }}
                    alignItems="center"
                    className={classes.infoBackground}
                >
                    <Grid
                        item
                        container
                        style={{
                            textAlign: matchesXS ? 'center' : 'inherit',
                            color: 'white',
                        }}
                        direction={matchesSM ? 'column' : 'row'}
                    >
                        <Grid
                            item
                            sm
                            style={{
                                marginLeft: matchesXS
                                    ? '0'
                                    : matchesSM
                                    ? '2em'
                                    : '5em',
                                marginBottom: matchesXS ? '10em' : 0,
                            }}
                        >
                            <Grid container direction="column">
                                <Typography variant="h4">About us</Typography>
                                <Typography variant="subtitle2" gutterBottom>
                                    Let's get personal
                                </Typography>
                                <Grid item>
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        className={classes.button}
                                        component={Link}
                                        href="/about"
                                        onClick={() => setValue(3)}
                                    >
                                        Learn More
                                        <ArrowForwardIosIcon fontSize="inherit" />
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            sm
                            style={{
                                marginRight: matchesXS
                                    ? '0'
                                    : matchesSM
                                    ? '2em'
                                    : '5em',
                                textAlign: matchesXS ? 'center' : 'right',
                            }}
                        >
                            <Grid container direction="column">
                                <Typography variant="h4">Contact us</Typography>
                                <Typography variant="subtitle2" gutterBottom>
                                    Say Hello{' '}
                                    <span role="img" aria-label="waving hand">
                                        👋
                                    </span>
                                </Typography>
                                <Grid item>
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        className={classes.button}
                                        component={Link}
                                        href="/contact"
                                        onClick={() => setValue(4)}
                                    >
                                        Learn More
                                        <ArrowForwardIosIcon fontSize="inherit" />
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item>
                <CallToAction setValue={setValue} />
            </Grid>
        </Grid>
    );
}
