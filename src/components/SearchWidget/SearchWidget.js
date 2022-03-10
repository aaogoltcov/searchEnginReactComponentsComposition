import {Component} from "react";

/**Центральный компонент, отвечающий за поиск**/
export default class SearchWidget extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <p className="placeholder-glow search-engine">
                <span className="placeholder col-12">Search engine component</span>
            </p>
        );
    }

}