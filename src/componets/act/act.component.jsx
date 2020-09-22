import React from "react";
import POE_DATA from "../data/app-data";

import Grid from "@material-ui/core/Grid";

import ActSelect from "../act-select/act-select.component";

import "./act.component.styles.scss";
import CustomBtn from "../custom-buttons/custom-buttons";

class Act extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: POE_DATA,
      value: 0,
      click: false,
      hidden: false,
    };
  }

  render() {
    const { collections, value } = this.state;

    const test2 = collections.filter((a) => a.id === value);

    const actObjectives = test2.map((collection) =>
      collection.act.map((act, i) => (
        <div>
          <hr />
          <ActSelect key={i} act={act} />
        </div>
      ))
    );
    return (
      <div className="app-container">
        <Grid container justify="space-evenly" alignItems="center" spacing={4}>
          <Grid container item direction="row" justify="space-around">
            <CustomBtn
              actName="Act 1"
              clicks={() => {
                this.setState({
                  value: 1,
                  click: true,
                });
              }}
            />{" "}
            <CustomBtn
              actName="Act 2"
              clicks={() => {
                this.setState({
                  value: 2,
                });
              }}
            />{" "}
            <CustomBtn
              actName="Act 3"
              clicks={() => {
                this.setState({
                  value: 3,
                });
              }}
            />{" "}
            <CustomBtn
              actName="Act 4"
              clicks={() => {
                this.setState({
                  value: 4,
                });
              }}
            />{" "}
            <CustomBtn
              actName="Act 5"
              clicks={() => {
                this.setState({
                  value: 5,
                });
              }}
            />{" "}
          </Grid>{" "}
          <Grid container item direction="row" justify="space-around">
            <CustomBtn
              actName="Act 6"
              clicks={() => {
                this.setState({
                  value: 6,
                });
              }}
            />{" "}
            <CustomBtn
              actName="Act 7"
              clicks={() => {
                this.setState({
                  value: 7,
                });
              }}
            />{" "}
            <CustomBtn
              actName="Act 8"
              clicks={() => {
                this.setState({
                  value: 8,
                });
              }}
            />{" "}
            <CustomBtn
              actName="Act 9"
              clicks={() => {
                this.setState({
                  value: 9,
                });
              }}
            />{" "}
            <CustomBtn
              actName="Act 10"
              clicks={() => {
                this.setState({
                  value: 10,
                });
              }}
            />{" "}
          </Grid>{" "}
          <Grid container item direction="column">
            {" "}
            {actObjectives}{" "}
          </Grid>{" "}
        </Grid>{" "}
      </div>
    );
  }
}

export default Act;
