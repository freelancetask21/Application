import React from "react";
import "./style.css";
import { withRouter } from 'react-router-dom';
class Login extends React.Component {
    constructor() {
        super();
    }
    handler = () => {
        this.props.history.push('/dashboard')
    }
    render() {
        console.log(this.props.name)
        return <div className="loginscreen">

            <div className="container1">
                <h3 style={{ color: "#337ab7" }}>Login to Dashboard </h3><br />
                <table className="table">
                    <tr>
                        <td> <label for="uname"><b>Username </b></label></td>
                        <td><input type="text" placeholder="Enter Username" name="uname" required /></td>
                    </tr>
                    <tr>
                        <td>  <label for="psw"><b>Password </b></label></td>
                        <td><input type="password" placeholder="Enter Password" name="psw" required /></td>
                    </tr>
                    <tr>

                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>

                    <tr>
                        <td><button type="submit" className="btn btn-primary" onClick={this.handler}>Sign Up</button></td>
                        <td style={{ textAlign: "right" }}><button type="submit" onClick={this.handler} className="btn btn-primary">Login</button></td>

                    </tr>
                </table>
            </div>
        </div>;
    }
}

export default withRouter(Login);
