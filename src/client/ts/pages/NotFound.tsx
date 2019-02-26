import * as React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

export default function NotFound({ staticContext = {} as any }) {
    staticContext.status = 404;
    return (
        <div>
            <h1>{`ERROR 404 :-(`}</h1>
        </div>
    );
}
