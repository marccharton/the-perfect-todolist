import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import ListItem from './components/ListItem';
import './App.css';

class App extends React.Component {
 
  componentDidMount(){
    const items = this.state.items;
    this.setState({items : this.sortItems(items)});
  }

  constructor() {
    super();

    this.handleNewTask = this.handleNewTask.bind(this);
    this.handleSubmitNewTask = this.handleSubmitNewTask.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    
    this.state = {
      items: [
        {
          id: uuidv4(),
          label: 'Coucou les copains',
          isChecked: false
        },
        {
          id: uuidv4(),
          label: 'Pouet pouet les amis',
          isChecked: true
        },
        {
          id: uuidv4(),
          label: 'Ta boite à camembert je suis pas tombé dans le camembert',
          isChecked: false
        },
      ],
      text: ''
    };
  }

  handleNewTask(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmitNewTask() {
    console.log("lets go j'ajoute une tâche ! dont le texte est '" + this.state.text + "'");
    
    const items = this.state.items;
    items.push({
      id: uuidv4(),
      label : this.state.text, 
      isChecked : true
    });

    this.setState({ items });
  }

  sortItems(items) {
    return items.sort((a, b) => a.isChecked < b.isChecked ? -1 : 1);
  }

  handleCheck(id) {
    const items = this.state.items;
    items.forEach((item) => {
      if (item.id === id) {
        item.isChecked = !item.isChecked;
      }
    });

    this.setState({ items : this.sortItems(items) });
  }

  render() {
    return (
      <div className="App">
        
        <input type="text" value={this.state.text} onChange={this.handleNewTask} />
        <button onClick={this.handleSubmitNewTask}> Ajouter une nouvelle tâche </button>

        {
          this.state.items.map((item) => {
            return <ListItem key={item.id} id={item.id} isChecked={item.isChecked} label={item.label} handleCheck={this.handleCheck}/>;
          })
        }
        
      </div>
    );
  }
}

export default App;
