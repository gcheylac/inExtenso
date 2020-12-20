import React, {Component} from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core";
import i18n from "../js/i18n";

const styles = () => ({
    root: {
        width: "100%"
    }
});

/** Page de bievenue */
class Home extends Component {
    /**
   * React render implementation
   * @return {string} the DOM for the component
   */
    render() {
        const classes = this.props.classes;
        return (
            <div className={classes.root}>
                <h1>{i18n.t("home.bienvenue")}</h1>
                <p>{i18n.t("home.text1")}</p>
                <p>{i18n.t("home.algo")}</p>
                <p>{i18n.t("home.frontEnd")}</p>
                <br/>
                <p>{i18n.t("home.text2")}</p>
            </div>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object
};
export default withStyles(styles)(Home);
