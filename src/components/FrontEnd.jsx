import React, {Component} from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import i18n from "../js/i18n";

import {controlCheckAll} from "../js/listFunction";

/**
 * Style de la page
 * @return {void}
 */
const styles = () => ({
    root: {
        width: "100%"
    }
});

/**
 *  FrontEnd represent l'interface de test de checkbox
 */
class FrontEnd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkBoxAll: false,
            listCheckBox: [
                {id: 1, label: i18n.t("frontEnd.checkBox1"), value: false},
                {id: 2, label: i18n.t("frontEnd.checkBox2"), value: false},
                {id: 3, label: i18n.t("frontEnd.checkBox3"), value: false},
                {id: 4, label: i18n.t("frontEnd.checkBox4"), value: false}
            ]
        };
    }

    /**
     * Changement case a cocher principale
     * @param {*} _event evenement de la case a coché principale
     * @return {void}
     */
    handleCheckedAll=(_event) => {
        // eslint-disable-next-line no-invalid-this
        const me = this;
        me.setState({checkBoxAll: !me.state.checkBoxAll});
        const list = me.state.listCheckBox;
        // eslint-disable-next-line no-return-assign
        list.forEach((_check) => _check.value = _event.target.checked);
        me.setState({listCheckBox: list});
    }

    /**
     * changement case a cocher
     * @param {*} _event evenement de la case a coché déclenché
     * @return {void}
     */
    handleChecked = (_event) => {
        // eslint-disable-next-line no-invalid-this
        const me = this;
        const list = me.state.listCheckBox;
        list.forEach((_check) => {
            if (_check.id === parseInt(_event.target.value, 10)) {
                _check.value = _event.target.checked;
            }
        });
        me.setState({listCheckBox: list});
        me.setState({checkBoxAll: controlCheckAll(me.state.listCheckBox)});
    }

    /**
     * React render implementation
     * @return {string} the DOM for the component
     */
    render() {
        const classes = this.props.classes;
        return (
            <div className={classes.root}>
                <List className={classes.root}>
                    <ListItem key="all" dense button>
                        <ListItemIcon>
                            <Checkbox
                                key="all"
                                value={this.state.checkBoxAll}
                                checked={this.state.checkBoxAll}
                                onChange={ this.handleCheckedAll}
                            />
                        </ListItemIcon>
                        <ListItemText key="all" primary={i18n.t("frontEnd.checkBoxAll")}/>
                    </ListItem>
                    { this.state.listCheckBox.map((_row) => {
                        return (
                            <ListItem key={_row.id} dense button>
                                <ListItemIcon>
                                    <Checkbox
                                        key={_row.id}
                                        value={_row.id}
                                        checked={_row.value}
                                        onChange={this.handleChecked}
                                    />
                                </ListItemIcon>
                                <ListItemText id={_row.id} primary={_row.label}/>
                            </ListItem>
                        );
                    })}
                </List>
            </div>
        );
    }
}

FrontEnd.propTypes = {
    classes: PropTypes.object
};
export default withStyles(styles)(FrontEnd);
