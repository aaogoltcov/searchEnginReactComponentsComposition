import {Component} from "react";

/**Компонент, отвечающий за отображение информации о погоде**/
export default class FooterWeatherWidget extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <p className="placeholder-glow footer-weather-widget">
                <span className="placeholder col-12">Footer weather widget component</span>
            </p>
        );
    }

}