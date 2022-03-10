import {Component} from "react";

/**Компонент, отвечающий за отображение новостей,
 * является дочерним элементом компонента Header**/
export default class HeaderNews extends Component{
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <p className="placeholder-glow header-news">
                <span className="placeholder col-12">Header news component</span>
            </p>
        );
    }

}
