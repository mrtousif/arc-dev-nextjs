import React from 'react';
import Link from '../Link';
import { makeStyles, Grid, Hidden } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.primary.main,
        width: '100%',
        zIndex: 1302,
        position: 'relative',
    },
    adornment: {
        width: '25em',
        verticalAlign: 'bottom',
        [theme.breakpoints.down('md')]: {
            width: '21em',
        },
        [theme.breakpoints.down('xs')]: {
            width: '15em',
        },
    },
    mainContainer: {
        position: 'absolute',
    },
    link: {
        color: 'white',
        fontWeight: 400,
        fontSize: '0.8rem',
        textDecoration: 'none',
    },
    gridItem: {
        margin: '3em',
    },
    icon: {
        height: '3em',
        width: '3em',
        [theme.breakpoints.down('xs')]: {
            height: '2em',
            width: '2em',
        },
    },
    socialContainer: {
        position: 'absolute',
        marginTop: '-6em',
        right: '1.5rem',
        [theme.breakpoints.down('xs')]: {
            right: '0.6em',
        },
    },
}));

function Footer(props) {
    const classes = useStyles();
    const { setValue, setSelectedIndex } = props;

    return (
        <footer className={classes.footer}>
            <Hidden mdDown>
                <Grid
                    container
                    className={classes.mainContainer}
                    justify="center"
                >
                    <Grid item className={classes.gridItem}>
                        <Grid container spacing={1} direction="column">
                            <Grid
                                item
                                className={classes.link}
                                onClick={() => setValue(0)}
                                component={Link}
                                href="/"
                            >
                                Home
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container spacing={1} direction="column">
                            <Grid
                                item
                                className={classes.link}
                                onClick={() => {
                                    setValue(1);
                                    setSelectedIndex(0);
                                }}
                                component={Link}
                                href="/services"
                            >
                                Services
                            </Grid>
                            <Grid
                                item
                                className={classes.link}
                                onClick={() => {
                                    setValue(1);
                                    setSelectedIndex(1);
                                }}
                                component={Link}
                                href="/customsoftware"
                            >
                                Custom Software Development
                            </Grid>
                            <Grid
                                item
                                className={classes.link}
                                onClick={() => {
                                    setValue(1);
                                    setSelectedIndex(2);
                                }}
                                component={Link}
                                href="/mobileapp"
                            >
                                Android/iOS App Development
                            </Grid>
                            <Grid
                                item
                                className={classes.link}
                                onClick={() => {
                                    setValue(1);
                                    setSelectedIndex(3);
                                }}
                                component={Link}
                                href="/website"
                            >
                                Website Development
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container spacing={1} direction="column">
                            <Grid
                                item
                                className={classes.link}
                                onClick={() => setValue(2)}
                                component={Link}
                                href="/revolution"
                            >
                                The Revolution
                            </Grid>
                            <Grid
                                item
                                className={classes.link}
                                onClick={() => setValue(2)}
                                component={Link}
                                href="/revolution"
                            >
                                Vision
                            </Grid>
                            <Grid
                                item
                                className={classes.link}
                                onClick={() => setValue(2)}
                                component={Link}
                                href="/revolution"
                            >
                                Technology
                            </Grid>
                            <Grid
                                item
                                className={classes.link}
                                onClick={() => setValue(2)}
                                component={Link}
                                href="/revolution"
                            >
                                Process
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container spacing={1} direction="column">
                            <Grid
                                item
                                className={classes.link}
                                onClick={() => setValue(3)}
                                component={Link}
                                href="/about"
                            >
                                About us
                            </Grid>
                            <Grid
                                item
                                className={classes.link}
                                onClick={() => setValue(3)}
                                component={Link}
                                href="/about"
                            >
                                History
                            </Grid>
                            <Grid
                                item
                                className={classes.link}
                                onClick={() => setValue(3)}
                                component={Link}
                                href="/about"
                            >
                                Team
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container spacing={1} direction="column">
                            <Grid
                                item
                                className={classes.link}
                                onClick={() => setValue(4)}
                                component={Link}
                                href="/contact"
                            >
                                Contact us
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Hidden>
            <img
                alt="footer"
                src="/assets/footerAdornment.svg"
                className={classes.adornment}
            />
            <Grid
                container
                justify="flex-end"
                spacing={2}
                className={classes.socialContainer}
            >
                <Grid
                    item
                    component={'a'}
                    href="https://www.facebook.com"
                    rel="noopener noreferer"
                    target="_blank"
                >
                    <img
                        alt="facebook"
                        src="/assets/facebook.svg"
                        className={classes.icon}
                    />
                </Grid>
                <Grid
                    item
                    component={'a'}
                    href="https://www.instagram.com"
                    rel="noopener noreferer"
                    target="_blank"
                >
                    <img
                        alt="instagram"
                        src="/assets/instagram.svg"
                        className={classes.icon}
                    />
                </Grid>
                <Grid
                    item
                    component={'a'}
                    href="https://www.twitter.com"
                    rel="noopener noreferer"
                    target="_blank"
                >
                    <img
                        alt="twitter"
                        src="/assets/twitter.svg"
                        className={classes.icon}
                    />
                </Grid>
            </Grid>
        </footer>
    );
}

export default Footer;
