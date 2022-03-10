import {Component} from "react";

/**Компонент, отвечающий за отображение топ-новости,
 * является дочерним элементом компонента Header**/
export default class HeaderTopNewsCard extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <p className="placeholder-glow header-top-news-card">
                <span className="placeholder col-12">Header top news card component</span>
            </p>
        );
    }

}