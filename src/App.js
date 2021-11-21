import React from "react";
// import url('https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css');
import "./bulma.min.css";
// import axios from "axios";
// import "./App.css";
     /* <p className="subtitle">{user.name}</p>
      <p>{user.email}</p>*/
const Users = ({ user }) => {
  return (
    <div className="box">
      <p className="subtitle"><img src={user.Image} width="100" height="50" /></p>
      <p>{user.name}</p>
      <p>{user.Id}</p>
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
    //fetch(`https://jsonplaceholder.typicode.com/users`)
    fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json')
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
//return <Users key={user.username} user={user} />;
  render() {
    const { isLoading, users } = this.state;
    return (
      <section className="section">
        <div className="container">
          {!isLoading ? (
            users.map(user => {
              return <Users key={user.name} user={user} />;
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
