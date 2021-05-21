import React from "react";
import "./style.css";
import { withRouter } from 'react-router-dom';
class CreateEmp extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            title: "",
            age: "",
            department: "",
            location: "",
            sal: "",
        };
    }
    handler = () => {
        this.props.history.push('/dashboard')
    }
    updateinput = (e, str) => {
        if (str == "name") this.setState({ name: e.target.value })
        if (str == "title") this.setState({ title: e.target.value })
        if (str == "age") this.setState({ age: e.target.value })
        if (str == "department") this.setState({ department: e.target.value })
        if (str == "location") this.setState({ location: e.target.value })
        if (str == "sal") this.setState({ sal: e.target.value })

    }
    render() {
        return <div className="" style={{ padding: "25px" }}>
            <h2>Create Employee <button type="submit" className="btn btn-primary"
                onClick={this.handler}> Save</button></h2>
            <div className="width30 border-right">

                <table>

                    <tr><td>name: </td> <td><input type="text" onChange={(e) => { this.updateinput(e, "name") }} /></td> </tr>
                    <tr><td>title:</td> <td><input type="text" onChange={(e) => { this.updateinput(e, "title") }} /></td></tr>
                    <tr><td>age:</td> <td><input type="text" onChange={(e) => { this.updateinput(e, "age") }} /></td></tr>
                    <tr><td>department:</td> <td><input type="text" onChange={(e) => { this.updateinput(e, "department") }} /></td> </tr>
                    <tr><td>location:</td> <td> <input type="text" onChange={(e) => { this.updateinput(e, "location") }} /> </td></tr>
                    <tr><td>sal:</td> <td><input type="text" onChange={(e) => { this.updateinput(e, "sal") }} /> </td></tr>
                </table>
            </div>
            <div className="width50">
                <table>

                    <tr><td>name: </td> <td>{this.state.name}</td> </tr>
                    <tr><td>title:</td> <td>{this.state.title} </td></tr>
                    <tr><td>age:</td> <td>{this.state.age} </td></tr>
                    <tr><td>department:</td> <td>{this.state.department}</td> </tr>
                    <tr><td>location:</td> <td>{this.state.location} </td></tr>
                    <tr><td>sal:</td> <td>{this.state.sal} </td></tr>
                </table>
            </div>
        </div>;
    }
}
export default withRouter(CreateEmp);

