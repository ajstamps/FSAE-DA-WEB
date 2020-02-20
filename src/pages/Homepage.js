import React, {Component, Suspense} from "react";
import "semantic-ui-css/semantic.min.css";
import { Message, Button, Segment, Form, Header, Image, Grid, HeaderContent } from "semantic-ui-react";
import { Pane, Text, Dialog } from "evergreen-ui";
import ReactDOM from 'react-dom';
import "./LandingPage.css";
import FsaeIcon from "../assets/icon.png";

export default class Homepage extends Component{
    state = {isShown: false};
    render(){
        return (
            <Pane>
                <Dialog
                    isShown={this.state.isShown}
                    onCloseComplete={() => this.setState({ isShown: false })}
                    hasHeader={false}
                    >
                    <Header>FSAE</Header>
                </Dialog>

                <Button onClick={() => this.setState({ isShown: true })}>Show Dialog</Button>
            </Pane>
        );
    }
}
