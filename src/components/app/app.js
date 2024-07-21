import { v4 as uuidv4 } from "uuid";

import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "Leto J.",
          salary: 3000,
          increase: true,
          id: uuidv4(),
          like: false,
        },
        {
          name: "Nick K.",
          salary: 2000,
          increase: false,
          id: uuidv4(),
          like: true,
        },
        {
          name: "Stanislav K.",
          salary: 1231000,
          increase: true,
          id: uuidv4(),
          like: false,
        },
      ],
    };
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      id: uuidv4(),
    };

    this.setState(({ data }) => {
      const adding = [...data, newItem];
      return {
        data: adding,
      };
    });
  };

  render() {
    return (
      <div className="app">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployeesList data={this.state.data} onDelete={this.deleteItem} />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
