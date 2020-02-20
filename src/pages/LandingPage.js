import React, {Component, Suspense} from "react";
import "semantic-ui-css/semantic.min.css";
import { Input, Dropdown, Icon, Menu, Placeholder, Image } from "semantic-ui-react";
import { Pane, Text, Tooltip } from "evergreen-ui";
import ReactDOM from 'react-dom';
import "./LandingPage.css";
import FsaeIcon from "../assets/icon.png";
import Homepage from "./Homepage";
import AerodynamicsPage from "./AerodynamicsPage";
import ElectricalPage from "./ElectricalPage";
import VehicleDynamicsPage from "./VehicleDynamicsPage";
import ControlsPage from "./ControlsPage";
import AboutPage from "./AboutPage";
import EnginePage from "./EnginePage";
import ErrorPage from "./ErrorPage";

export default class LandingPage extends Component{
  state = { activeItem: 'Homepage' };
  render(){
    return (
      <div>
        {this.Menu()}
        {this.SideBar()}
        {this.DisplayedPage()}
      </div>
    );
  }
  SideBar(){

  }
  DisplayedPage(){
    switch(this.state.activeItem){
      case "Homepage":         return <Homepage/>;
      case "Aerodynamics":     return <AerodynamicsPage/>;
      case "Electrical":       return <ElectricalPage/>;
      case "Engine":           return <EnginePage/>;
      case "Vehicle Dynamics": return <VehicleDynamicsPage/>;
      case "Controls":         return <ControlsPage/>;
      case "About":            return <AboutPage/>;
      default:                 return <ErrorPage/>;
    }
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  Menu(){
    const {activeItem} = this.state;
    return(
      <Menu stackable>
        <Menu.Item
          name='Homepage'
          active={activeItem === 'Homepage'}
          onClick={this.handleItemClick}
        >
          <img src={FsaeIcon} />
        </Menu.Item>
        <Menu.Item
          name='Aerodynamics'
          icon='plane'
          active={activeItem === 'Aerodynamics'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Electrical'
          icon='plug'
          active={activeItem === 'Electrical'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Vehicle Dynamics'
          icon='truck'
          active={activeItem === 'Vehicle Dynamics'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Engine'
          icon='tachometer alternate'
          active={activeItem === 'Engine'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Controls'
          icon='cogs'
          active={activeItem === 'Controls'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='About'
          icon='question circle outline'
          position='right'
          active={activeItem === 'About'}
          onClick={this.handleItemClick}
        />
      </Menu>
    );
  }
}

//aero, electrical, vehicle dynamics, engine, controls


// const LandingPage = () => (
//   <Grid verticalAlign='middle' columns={5}>
//     {
//       Selection.map( function(Item, Index){
//         return SelectionItem(Item);
//       } )
//     }
//   </Grid>
// );
// export default class TeamMenu extends Component {
//   state = { activeItem: Selection[0] }

//   handleItemClick = (e, { name }) => this.setState({ activeItem: name })

//   SelectionItem( Item ){
//     return (
//       <Segment>
//         <Placeholder>
//           <Placeholder.Header/>
//         </Placeholder>
//         <Card.Content>
//           <Placeholder>
//             <Placeholder.Line />
//             <Placeholder.Line />
//             <Placeholder.Line />
//             <Placeholder.Line />
//             <Placeholder.Line />
//           </Placeholder>
//         </Card.Content>
//       </Segment>
//     )
//   }

//   render() {
//     const { activeItem } = this.state;
//     const MenuItems = Selection.map( Item => this.SelectionItem(Item) );
//     const Fallback = () => (
//       <Card>
//         <Placeholder>
//           <Placeholder.Image square/>
//         </Placeholder>
//         <Card.Content>
//           <Placeholder>
//             <Placeholder.Line />
//             <Placeholder.Line />
//             <Placeholder.Line />
//             <Placeholder.Line />
//             <Placeholder.Line />
//           </Placeholder>
//         </Card.Content>
//       </Card>
//     );

//     return (
//       <div>{MenuItems}</div>
//     )
//   }
// }