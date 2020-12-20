import React, {Component} from "react";
import PropTypes from "prop-types";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Container from "@material-ui/core/Container";
import {withStyles, Tabs, Tab, AppBar} from "@material-ui/core";

import Home from "./components/Home.jsx";
import Algo from "./components/Algo.jsx";
import FrontEnd from "./components/FrontEnd.jsx";

/**
* Style général
* @return {object} style de page
*/
const styles = () => ({
    root: {
        backgroundColor: "white",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        padding: "0px"
    },
    header: {
        backgroundColor: "white",
        height: "60px",
        width: "100%",
        textAlign: "center",
        borderBottomColor: "rgba(173, 176, 182, 0)",
        borderBottomWidth: 2
    },
    container: {
        flexGrow: 1,
        overflow: "auto",
        padding: "20px"
    }
});


/**
 * Class principale
 */
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0
        };
    }

    /**
    * Changement de page
    * @param {*} event evenement
    * @param {*} value valeur
    * @return {void}
    */
    handleChange = (event, value) => {
        // eslint-disable-next-line no-invalid-this
        this.setState({activeTab: value});
    }

    /**
   * React render implementation
   * @return {string} the DOM for the component
   */
    render() {
        const classes = this.props.classes;
        return (
            <Container maxWidth="lg" className={classes.root}>
                <div className={classes.header}>
                    <h2>In Extenso Digital</h2>
                </div>
                <Router>
                    <AppBar position="static" >
                        <Tabs onChange={this.handleChange} value={this.state.activeTab}>
                            <Tab value={0} label="Accueil" to="/" component={Link}/>
                            <Tab value={1} label="Algo" to="/Algo" component={Link}/>
                            <Tab value={2} label="FrontEnd" to="/FrontEnd" component={Link}/>
                        </Tabs>
                    </AppBar>
                    <div className={classes.container}>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/Algo" component={Algo} />
                            <Route path="/FrontEnd" component={FrontEnd} />
                        </Switch>
                    </div>
                </Router>
            </Container>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object
};
export default withStyles(styles)(App);
