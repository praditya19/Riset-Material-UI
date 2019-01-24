import React, { Component } from 'react';
import Appbar1 from '../Components/Appbar/App bar with button/Appbar1';
import Appbar2 from '../Components/Appbar/Simple App Bar/Appbar2';
import Appbar3 from '../Components/Appbar/App bar with Primary/Appbar3';
import Appbar4 from '../Components/Appbar/App Bar with menu/Appbar4';
import Appbar5 from '../Components/Appbar/App Bar with search/Appbar5';
import Appbar6 from '../Components/Appbar/desktop only/Appbar6';
class Home extends Component {
  render() {
    return (
      <div>
        <Appbar1 />
        <br />
        <Appbar2 />
        <br />
        <Appbar3 />
        <br />
        <Appbar4 />
        <br />
        <Appbar5 />
        <br />
        <Appbar6 />
      </div>
    );
  }
}
export default Home;
