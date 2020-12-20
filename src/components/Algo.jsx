import React, {Component} from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core";
import {Button, TextField} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import i18n from "../js/i18n";

import {getText} from "../js/listFunction";

const styles = () => ({
    form: {
        textAlign: "center"
    },
    result: {
        marginTop: "20px"
    },
    field: {
        marginRight: "20px",
        width: "200px"
    }
});

/** Algo represent l'interface de test de checkbox*/
class Algo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            value: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.setData = this.setData.bind(this);
    }

    /**
   * MAJ data
   * @param {array} _data liste de données
   * @return {void}
   */
    setData(_data) {
        this.setState({data: _data});
    }

    /**
   * changement de nombre
   * @param {*} event évènement de changement
   * @return {void}
   */
    handleChange = (event) => {
        // eslint-disable-next-line no-invalid-this
        const me = this;
        me.setData([]);
        // eslint-disable-next-line prefer-const
        let {value, min, max} = event.target;
        value = Math.max(Number(min), Math.min(Number(max), Number(value)));
        me.setState({value: value});
    }

    /**
    * Lance le traitement
    * @return {void}
    */
    handleClick() {
        const list = [];
        for (let i = 1; i <= this.state.value; i++) {
            const test = getText(i);
            list.push({entier: i, text: test});
        }
        this.setData(list);
    }

    /**
     * React render implementation
     * @return {string} the DOM for the component
     */
    render() {
        const classes = this.props.classes;
        return (
            <div>
                <div className={classes.form}>
                    <TextField
                        id="standard-number"
                        className={classes.field}
                        label= {i18n.t("algo.selectNb")}
                        type="number"
                        InputLabelProps={{
                            shrink: true
                        }}
                        InputProps={{inputProps: {min: 0, max: 250}}}
                        value={this.state.value}
                        onChange={this.handleChange}/>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleClick}>
                        {i18n.t("algo.valider")}
                    </Button>
                    {this.state.data.length !== 0 &&
                        <TableContainer component={Paper} className={classes.result}>
                            <Table className={classes.table}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>{i18n.t("algo.nombre")}</TableCell>
                                        <TableCell>{i18n.t("algo.resultat")}</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.state.data.map((_row) =>
                                        <TableRow key={_row.entier}>
                                            <TableCell component="th" scope="row">
                                                {_row.entier}
                                            </TableCell>
                                            <TableCell>{_row.text}</TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    }
                </div>
            </div>
        );
    }
}

Algo.propTypes = {
    classes: PropTypes.object
};
export default withStyles(styles)(Algo);
