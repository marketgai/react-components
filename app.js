// TODO

const GroceryList = (props) => <ul>{props.items.map((item) => <GroceryListItem item={item} />)}</ul>;

const App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList items={[ 'Cucumbers', 'kale' ]} />
  </div>
);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done  : false,
      hover : false
    };
  }

  onListItemClick() {
    this.setState({
      done : !this.state.done
    });
  }

  onMouseOver() {
    this.setState({
      hover : !this.state.hover
    });
  }

  render() {
    var style = {
      textDecoration : this.state.done ? 'line-through' : 'none',
      fontWeight     : this.state.hover ? 'bold' : 'normal'
    };

    return (
      <li
        style={style}
        onClick={this.onListItemClick.bind(this)}
        onMouseOver={this.onMouseOver.bind(this)}
        onMouseLeave={this.onMouseOver.bind(this)}
      >
        {this.props.item}
      </li>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

//todoList = GroceryList
