

class App extends React.Component{
    state = {
      search:''
    }
    onChange = (evt) => {
      this.setState({search:evt.target.value})
    }
  }