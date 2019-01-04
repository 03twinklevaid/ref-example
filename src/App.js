import React, { Component } from 'react';
import './App.css';

class App extends Component {
  jumpToDivs = (element, sectionName) => {
    this[sectionName] = element;
  }

  jumpHandler = (sectionName) => {
    const section  = this[sectionName]
    console.log(section.offsetTop,"#####")
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth'
    });
  }
  render() {
    return (
      <div className="App">
        <nav className="navigation">
          <ul>
            <li onClick = {() => this.jumpHandler("sectionName1")}>
                Div-1
            </li>
            <li onClick = {() => this.jumpHandler("sectionName2")}>
                Div-2
            </li>
            <li onClick = {() => this.jumpHandler("sectionName3")}>
                Div-3
            </li>
            <li onClick = {() => this.jumpHandler("sectionName4")}>
                Div-4
            </li>
            <li onClick = {() => this.jumpHandler("sectionName5")}>
                Div-5
            </li>
          </ul>
        </nav>
        <div className="sections">
          <div className="section green" ref = {(element) => this.jumpToDivs(element, "sectionName1")}>
          <h2>Div-1</h2>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
          </div>
          <div className="section yellow" ref = {(element) => this.jumpToDivs(element, "sectionName2")}>
          <h2>Div-2</h2>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
          </div>
          <div className="section red" ref = {(element) => this.jumpToDivs(element, "sectionName3")}>
          <h2>Div-3</h2>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
          </div>
          <div className="section pink" ref = {(element) => this.jumpToDivs(element, "sectionName4")}>
          <h2>Div-4</h2>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
          </div>
          <div className="section blue" ref = {(element) => this.jumpToDivs(element, "sectionName5")}>
          <h2>Div-5</h2>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
          </div>
        </div>
      </div>
    );
  }
}

export default App;
