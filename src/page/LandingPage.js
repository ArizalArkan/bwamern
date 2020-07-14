import React, {Component} from 'react';
import Heder from 'part/Header';

export default class LandingPage extends Component {
    render() {
        return (
            <>
                <Heder {...this.props}></Heder>
            </>
        )
    }
}
