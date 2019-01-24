import React, { Component } from 'react';
import Appbar1 from '../Components/Appbar/App bar with button/Appbar1';
import Appbar2 from '../Components/Appbar/Simple App Bar/Appbar2';
import Appbar3 from '../Components/Appbar/App bar with Primary/Appbar3';
class Home extends Component {
  render() {
    return (
      <div>
        <Appbar1 />
        <br />
        <Appbar2 />
        <br />
        <Appbar3 />
      </div>
    );
  }
}
export default Home;
