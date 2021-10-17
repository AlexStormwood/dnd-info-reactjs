import React from "react";
import { Link, Route, useRouteMatch, Switch } from "react-router-dom";
import BarbarianPage from "./characterClasses/barbarian";
import ClassNotFoundPage from "./characterClasses/ClassNotFound";
import WizardPage from "./characterClasses/wizard";


const ClassInfo = () => {
    const { url, path } = useRouteMatch();

    return (
        <div>
            <h2>Character Class Information</h2>
            <ul>
                <li>
                    <Link to={`${url}/wizard`}>Wizard</Link>
                </li>
                <li>
                    <Link to={`${url}/barbarian`}>Barbarian</Link>
                </li>
            </ul>

            <Switch>

                <Route path={`${path}/wizard`}>
                    <WizardPage />
                </Route>

                <Route path={`${path}/barbarian`}>
                    <BarbarianPage />
                </Route>

                <Route path={`${path}/:unsupported`}>
                    <ClassNotFoundPage /> 
                </Route>

            </Switch>

        </div>
    );
};

export default ClassInfo;