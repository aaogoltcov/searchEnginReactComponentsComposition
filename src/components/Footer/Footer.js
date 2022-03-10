import {Component} from "react";
import FooterWeatherWidget from "../FooterWeatherWidget/FooterWeatherWidget";
import FooterMap from "../FooterMap/FooterMap";
import FooterCinema from "../FooterCinema/FooterCinema";
import FooterTopSearches from "../FooterTopSearches/FooterTopSearches";
import FooterTelevision from "../FooterTelevision/FooterTelevision";

/**Компонент, отвечающий за отображение элементов footer**/
export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div className="footer">
                <FooterWeatherWidget />
                <FooterMap />
                <FooterCinema />
                <FooterTopSearches />
                <FooterTelevision />
            </div>
        );
    }

}