import React, { Component } from 'react';
import './App.css';

class Otp extends Component {
    collectRefs = (element, pinDigits ) => {
        this[pinDigits] = element;
    }
    onChangeHandler = (fieldName) => {
        this[fieldName].focus()
    }
  render() {
    return (
      <div className="otp">
        <input  type="text"
                className="border" 
                maxLength="1" 
                ref = {(element) => this.collectRefs(element, "firstPinDigit")}
                onChange = {() => this.onChangeHandler("secondPinDigit")} />
        <input  type="text" 
                className="border" 
                maxLength="1"
                ref = {(element) => this.collectRefs(element, "secondPinDigit")}
                onChange = {() => this.onChangeHandler("thirdPinDigit")} />
        <input  type="text" 
                className="border" 
                maxLength="1"
                ref = {(element) => this.collectRefs(element, "thirdPinDigit")}
                onChange = {() => this.onChangeHandler("fourthPinDigit")} />
        <input  type="text" 
                className="border" 
                maxLength="1" 
                ref = {(element) => this.collectRefs(element, "fourthPinDigit")} />
      </div>
    );
  }
}

export default Otp;
