import { Component } from "react";

class FormTest extends Component {

    state = {
        patFormData: {

            name: ""
        }

    }

    handleInputChange = (event) => {
        console.log(event.target)

        this.setState(
            {
                patFormData: {

                    name: event.target.value
                }
            }
        )
    }




    render() {
        return (
            <div className="FormTest">
                <form>
                    <label>Name:</label>
                    <input type="text" name="name" onChange={this.handleInputChange} value={this.state.patFormData.name} />
                    <button type="submit" >shit ass</button>
                </form>
            </div>



        )
    }
}

export default FormTest;