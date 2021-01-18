import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home, WrongPage } from "pages/"

const Routes = () => {

    return <Switch>
        <Route path="/" exact component={Home} />
        <Route exact component={WrongPage} />
    </Switch>
}

export default Routes;