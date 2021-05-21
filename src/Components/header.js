import React from "react";
import "./style.css";
class HeaderComponent extends React.Component {
    constructor() {
        super();
        this.state = {

        };
    }

    render() {
        return <div className="headerCopm" style={{ paddingTop: "5px" }}>
            <div className="imgLogo" />
        </div>;
    }
}
export default HeaderComponent;

