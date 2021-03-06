import React from "react";

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import Navigation from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) =>(
    <header className={classes.Toolbar}>
        <DrawerToggle open={props.open} />
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <Navigation/>
        </nav>
    </header>
);

export default toolbar;