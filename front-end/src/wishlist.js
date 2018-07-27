import React from 'react';

export default class Wishlist extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount(){
    fetch('http://localhost:3010/wishlist/')
      .then(res => console.log(res) || res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            isLoaded: true,
            items: result
          });

        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
      console.log(this.state)
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
        {items.map(item => (
          <li key={item['item']}>
            {item['item']}
          </li>
        ))}
        </ul>
      );
    }
  }
};
