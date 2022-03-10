import {Component} from "react";

/**Компонент, отвечающий за отображение баннера под компонентом поиска**/
export default class Banner extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <p className="placeholder-glow banner">
                <span className="placeholder col-12">Banner component</span>
            </p>
        );
    }

}