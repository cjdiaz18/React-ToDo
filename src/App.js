import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

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
        <Typography variant="h3" align="center" gutterBottom>
          ToDo App
        </Typography>

        <Grid container justify="center">
          <Grid item>
            <TodoForm
              value={this.state.value}
              updateValue={this.updateValue}
              saveTodo={this.saveTodo}
            />
          </Grid>
        </Grid>

        <Grid container justify="center">
          <Grid item md={8}>
            <TodoList todos={this.state.todos} />
          </Grid>
        </Grid>
      </React.Fragment>
    ); // JSX
  }
}

export default App;
