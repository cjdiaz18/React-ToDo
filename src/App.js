import React from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

/**
  Componentes en React
  1.- Stateful Components
    - Classes
    - State
    - Lifecycle Methods

  2.- Stateless Components (Functional Components):
    -Fuctions
    -No State
    -No Lifecycles Methods
 **/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      todos: []
    };
  }

  updateValue = event => {
    // this.state.value = value;
    this.setState({ value: event.target.value });
  };
  saveTodo = () => {
    if (this.state.value) {
      const todos = this.state.todos;
      todos.push(this.state.value);
      this.setState({ todos });
      this.clearValue();
    }
  };

  clearValue = () => {
    this.setState({
      value: ""
    });
  };

  render() {
    console.log(this.state);

    return (
      <React.Fragment>
        <Typography variant="h5" align="center" gutterBottom>
          ToDo App
        </Typography>

        <form
          onSubmit={e => {
            e.preventDefault();
            this.saveTodo();
          }}
        >
          <TextField
            type="text"
            placeholder="Start typing…"
            margin="normal"
            onChange={this.updateValue}
            value={this.state.value}
          />
        </form>
      </React.Fragment>
    ); // JSX
  }
}

export default App;
