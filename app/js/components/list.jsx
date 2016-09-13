import React from "react";
import { ListItem } from "./list_item.jsx";
import { Search } from "./search.jsx";
import { BlankListItem } from "./blank_list_item.jsx";
import TodoStore from "../stores/todo_store.js";

class List extends React.Component {

  constructor(){
    super();
    this.state = {
      list: TodoStore.getList().list
    };
    this._onChange = this._onChange.bind(this);
    this._onSearch = this._onSearch.bind(this);
  }

  render () {
    let listItems = this._getListItems();
    listItems = (TodoStore.getList().list.length > 0) ? listItems : <BlankListItem />;
    
    return  <div>
              <ul className="collection with-header">
                <li className="collection-header">
                  <h4>Todo List</h4>
                </li>

                <Search />
                {listItems}

              </ul>
            </div>
  }

  componentDidMount(){
    TodoStore.addChangeListener(this._onChange);
    TodoStore.addSearchListener(this._onSearch);
  }

  _onChange(){
    this.setState({list: TodoStore.getList().list});
  }

  _onSearch(){
    this.setState({list: TodoStore.getSearchList()});
  }

  _getListItems(){
    return this.state.list
      .map(listItem => <ListItem key={listItem.id} info={listItem}/>);
  }
}

export { List };
