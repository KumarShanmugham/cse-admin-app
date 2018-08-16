import * as React from 'react';
import { Jumbotron } from 'react-bootstrap';

export class HomePage extends React.PureComponent {
    public render() {
        return (
            <Jumbotron>
                <h1>CSE Web Admin Tool</h1>
                <small><p>
                    Use application to configure, maintain, search canceled tickets
                    and generate cancelted ticket reports and monitor batch job
                    owned by CSE portfolio.
                </p>
                </small>
            </Jumbotron>
        );
    }
}