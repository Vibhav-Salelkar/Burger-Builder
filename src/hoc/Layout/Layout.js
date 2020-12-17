import React,{Component} from "react";

import Aux from "../Aux/Aux";
import classes from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component{
  state={
    showSideDrawer:false
  }
closseSideDrawerHandler=()=>{
  this.setState({
    showSideDrawer:false
  })
}
toggleSideDrawerHandler=()=>{
  this.setState((prevState)=>{
    return {showSideDrawer: !prevState.showSideDrawer}
  })
}
  render(){
  return (
    <Aux>
      <SideDrawer open={this.state.showSideDrawer} closed={this.closseSideDrawerHandler}></SideDrawer>
      <Toolbar clicked={this.toggleSideDrawerHandler}></Toolbar>
      <main className={classes.Content}>{this.props.children}</main>
    </Aux>
  );
}
}

export default Layout;
