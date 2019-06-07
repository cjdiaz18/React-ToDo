import React from "react";
import { getThemeProps } from "@material-ui/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { element } from "prop-types";

const TodoList = props => {
  const { todos } = props;
  return (
    <List>
      <ListItem dense button>
        <Checkbox />
        <ListItemText primary="To-do Title" />
        <ListItemSecondaryAction>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
};

export default TodoList;

/**
const array = [1, 2, 3, 4];
array.map(element => element * 2);

array.filter(element => element % 2 === 0);

array.reduce((a, b) => a + b);

**/
