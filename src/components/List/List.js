import React, { Component } from 'react';

import './List.css';

class List extends Component {

  render() {

    return (
      <div className="List wrapper">

        <div className="Card">
          <div className="Card__title">Mozilla Developer Network (MDN)</div>
          <a className="Card__link"
             href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift">
            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
          </a>
          <div className="Card__actions" >
            <div className="Card__chips">            
              <div className="chip" data-value="javascript">Javascript</div>
            </div>
            <button className="Card__button">Read Documentation</button>
          </div>
        </div>

        <div className="Card">
          <div className="Card__title">Mozilla Developer Network (MDN)</div>
          <a className="Card__link"
             href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift">
            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
          </a>
          <div className="Card__actions" >
            <div className="Card__chips">            
              <div className="chip" data-value="css">CSS</div>
            </div>
            <button className="Card__button">Read Documentation</button>
          </div>
        </div>
      
      </div>
    );

  }

}

export default List;
