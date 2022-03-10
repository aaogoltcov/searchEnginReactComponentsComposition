import {Component} from "react";

/**Компонент, отвечающий за отображение информации о телевизионных программах**/
export default class FooterTelevision extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <p className="placeholder-glow footer-television">
                <span className="placeholder col-12">Footer television widget component</span>
            </p>
        );
    }

}