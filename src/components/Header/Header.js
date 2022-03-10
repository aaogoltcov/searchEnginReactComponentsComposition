import {Component} from "react";
import HeaderNews from "../HeaderNews/HeaderNews";
import HeaderTopNewsCard from "../HeaderTopNewsCard/HeaderTopNewsCard";

/**Компонент, отвечающий за реализацию верхней части страницы**/
export default class Header extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div className="header">
                <HeaderNews />
                <HeaderTopNewsCard />
            </div>
        );
    }

}