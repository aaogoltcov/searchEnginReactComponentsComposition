import {Component} from "react";

/**Компонент, отвечающий за отображение информации о фильмах**/
export default class FooterCinema extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <p className="placeholder-glow footer-cinema">
                <span className="placeholder col-12">Footer cinema widget component</span>
            </p>
        );
    }

}