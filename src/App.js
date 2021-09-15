import React from "react";
// import url('https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css');
// import axios from "axios";
import "./App.css";

const Users = ({ user }) => {
  return (
    <div className="box">
      <p className="subtitle">{user.name}</p>
      <p>{user.email}</p>
    </div>
  );
};

class App extends React.Component {
  state = {
    users: [],
    isLoading: true,
    errors: null
  };

  fetchUsers() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          users: data,
          isLoading: false
})
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchUsers();
  }

  render() {
    const { isLoading, users } = this.state;
    return (
      <section className="section">
        <div className="container">
          {!isLoading ? (
            users.map(user => {
              return <Users key={user.username} user={user} />;
            })
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </section>
    );
  }
}

export default App;    
