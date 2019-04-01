import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1> Register </h1>
        <form>
          <label for="firstname"> First Name: </label>
          <input id="firstname" type="text" placeholder="John"/>
          <label for="lastname"> Last Name: </label>
          <input id="lastname" type="text" placeholder="Smith"/>
          <br/>
          <label for="female"> Female </label>
          <input name="gender" id="female" type="radio" value="female"/>
          <label for="male"> Male </label>
          <input name="gender" id="male" type="radio" value="male"/>
          <label for="other"> Other </label>
          <input name="gender" id="other" type="radio" value="other"/>
          <br/>
          <label for="email"> Email: </label>
          <input id="email" type="text" placeholder="your email"/>
          <label for="password"> Password: </label>
          <input id="password" type="text" placeholder="your password" />
          <br/>
          <select name="month">
            <option> January </option>
            <option> February </option>
          </select>
          <select name="Day">
            <option> 1 </option>
            <option> 2</option>
          </select>
          <select name="Year">
            <option> 1996 </option>
            <option> 2000 </option>
          </select>
          <br/>
          <label for="term"> I agree to the terms and conditions </label>
          <input id="term" type="radio"/>

          <input type="submit"/>
        </form>
        <br/>


          <h3> Do you prefer a Bulbasaur or a Charmander </h3>

          <form>

            <label for="dogs"> Dogs: </label>
            <input name="pet" id="dogs" type="radio" value="DOGS"/>
            <label for="cats"> Cats: </label>
            <input name="pet" id="cats" type="radio" value="CATS"/>
            <button> Go! </button>

            <p> Favorite Color </p>
            <select name="color">
              <option> Red </option>
              <option > Orange </option>
              <option> Yellow </option>

            </select>
          </form>

        <table border="1">
        <th> Image </th>
        <th> Name </th>
        <th> Type </th>
        <th> Evolves Into </th>

        <tr>
          <td> <img src="http://img4.wikia.nocookie.net/__cb20140328190757/pokemon/images/thumb/2/21/001Bulbasaur.png/200px-001Bulbasaur.png"/> </td>
          <td> Bulbasaur </td>
          <td> Grass/Poison </td>
          <td> Ivysaur </td>
        </tr>
        <tr>
          <td> <img src="http://img4.wikia.nocookie.net/__cb20140724195345/pokemon/images/thumb/7/73/004Charmander.png/200px-004Charmander.png"/></td>
          <td> Charmander </td>
          <td> Fire </td>
          <td> Charmeleon </td>
        </tr>
      </table>
      </div>
    );
  }
}

export default App;
