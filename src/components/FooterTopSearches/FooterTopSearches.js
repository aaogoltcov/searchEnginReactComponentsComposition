import {Component} from "react";

/**Компонент, отвечающий за отображение информации о наиболее частых поисках**/
export default class FooterTopSearches extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <p className="placeholder-glow footer-top-searches">
                <span className="placeholder col-12">Footer top searches widget component</span>
            </p>
        );
    }

}