import React from "react";

class ListItem extends React.Component {
    render(){
        return  <li className="collection-item">
                  <div className="visible-content">
                    <span className="item-text">Alvin</span>
                    <a href="#!" className="secondary-content">
                      <div className="switch">
                        <label>
                          <input type="checkbox" />
                          <span className="lever"></span> Done
                        </label>
                      </div>
                    </a>
                  </div>
                  <div className="invisible-content">
                    <a className="left-btn btn-flat">
                      View
                    </a>
                    <a className="right-btn btn-flat">
                      Delete
                    </a>
                  </div>
                </li>
    }
}

export {ListItem};