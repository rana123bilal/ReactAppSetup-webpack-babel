import React from "react";

class App extends React.Component {
  render() {
    return (
      <div>
        {process.env.NODE_ENV === 'development'? <h1>Hello dev World</h1> : <h1>Hello Production</h1>}
      </div>
    );
  }
}

export default App;
