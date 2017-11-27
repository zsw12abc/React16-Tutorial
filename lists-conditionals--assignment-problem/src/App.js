import React, {Component} from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent';
import CharComponent from './CharComponent';

class App extends Component {
    state = {
        inputs: {id: "asd1", input: "", length: "", output: "Text too short"},
        inputsArray: [],
    };

    textChangedHandler = (event) => {
        const textInputObject = {...this.state.inputs};
        textInputObject.input = event.target.value;
        textInputObject.length = event.target.value.length;
        textInputObject.output = event.target.value.length > 10 ? "Text long enough" : "Text too short";
        this.setState({
            inputs: textInputObject
        })
    };

    deleteInputTextHandler = (index) => {
        const textInputObject = {...this.state.inputs};
        const textInputArray = textInputObject.input.split("");
        textInputArray.splice(index, 1);
        textInputObject.input = textInputArray.join("");
        textInputObject.length = textInputObject.input.length;
        textInputObject.output = textInputObject.length > 10 ? "Text long enough" : "Text too short";
        this.setState({inputs: textInputObject});
    };

    render() {
        const style = {
            display: "inline-block",
            padding: "16px",
            textAlign: "center",
            margin: "16px",
            border: "1px solid black"
        }
        let inputs = {...this.state.inputs};
        let outputs = null;
        if (inputs.length > 0) {
            let outputArray = this.state.inputs.input.split("");
            // this.setState({inputsArray: outputArray});
            outputs = (
                <div>
                    {outputArray.map((t, index) => {
                        return <CharComponent click={() => this.deleteInputTextHandler(index)}
                                              text={t} style={style} key={index}
                        />
                    })}
                </div>
            )
        }

        return (
            <div className="App">
                <ol>
                    <li>Create an input field (in App component) with a change listener which outputs the length of the
                        entered text below it (e.g. in a paragraph).
                    </li>
                    <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
                    <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending
                        on the text length (e.g. take 5 as a minimum length)
                    </li>
                    <li>Create another component (=> CharComponent) and style it as an inline box (=> display:
                        inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).
                    </li>
                    <li>Render a list of CharComponents where each CharComponent receives a different letter of the
                        entered text (in the initial input field) as a prop.
                    </li>
                    <li>When you click a CharComponent, it should be removed from the entered text.</li>
                </ol>
                <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
                <ValidationComponent input={this.state.inputs.input}
                                     changed={(event) => this.textChangedHandler(event)}
                                     len={this.state.inputs.output}/>
                {outputs}

            </div>
        );
    }
}

export default App;
