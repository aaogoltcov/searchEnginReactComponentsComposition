import {Component} from "react";

/**Компонент, отвечающий за отображение информации о картах**/
export default class FooterMap extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <p className="placeholder-glow footer-map">
                <span className="placeholder col-12">Footer map widget component</span>
            </p>
        );
    }

}