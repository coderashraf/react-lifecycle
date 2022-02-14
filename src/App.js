import "./App.css";
import Unmounting from "./Unmounting";
import Mounting from "./Mounting";
import { useState } from "react";
import Updating from "./Updating";
function App() {
  let [showComp, setComp] = useState(true);
  return (
    <div className="App">
      <h1>React Lifecycle</h1>
      React component Lifecycle consists of four lifecycle phases :
      <pre>
        1.Initialization phase 2.Mounting phase 3.Updating Phase 4.Unmounting
        Phase
      </pre>
      <div>
        <img src="https://www.cuelogic.com/wp-content/uploads/2020/12/Reactjs-lifecycle-components-1.png" />
      </div>
      <strong>Initialization Phase</strong>:In this phase we initialise all the
      state variable and all the props which your component might be receiving
      will also get assigned with the proper values.
      <div>
        <strong>Mounting Phase</strong> :In this phase your component will be
        mounted on the screen for the very first Time. THis contain functions
        like constructor, render and componentDidMount.
        <p>
          constructor: In this function we can create the state variables also
          if we want access the props before the component gets mounted so we
          can access in the constructor function. Before ES6 we also used to
          bind the functions in this function to access them throughout the
          component.
        </p>
        <p>
          render:This function is the most impoertant one,since it is
          responsible to return HTML and styling part of the component.In this
          we do not write normal HTML instead we will be writing JSX in the
          component,which is writing HTML inside JS. This JSX gets transpiled
          using babel to convert it from ES6 to ES5 so that browser can
          understand.
        </p>
        <p>
          componentDidMount: this function will be running just after render
          function. we dont have to call this function, we just need to define
          it, it will be called automatically. This function is the place where
          we shoild write all the server calls. So that your html ffrom render
          function will be loaded first and then the data will be coming from
          the server and will be rendered on the screen.
        </p>
        <Mounting />
      </div>
      <div>
        <strong>Updating phase</strong> : This phase comes when the component
        gets updated because of any changes made by user like any click on any
        button, or if user is giving any input or any event which we want to
        handle. So in that case the component has to be updated. In react, we do
        not update the Real DOM directly instead we use Virtual DOM to update
        the component, this makes react component efficient.
        <p>
          render : This function is the most important one, since it is
          responsible to return the HTML and styling part of the component. In
          this we do not write normal HTML instead we will be writing JSX in the
          component, which is writing HTML inside JS. This JSX gets transpiled
          using babel to convert it from ES6 to ES5 so that your browser can
          understand.
        </p>
        <p>
          componentDidUpdate : This function will be called after the component
          is updated.
        </p>
        <Updating />
      </div>
      <div>
        <strong>Unmounting phase</strong> : In this phase only
        componentWillUnmount will be called, because over here we are removing
        the component from the DOM so no render n constructor function will be
        called.
        <p>
          componentWillUnmount : This function will be called after the removing
          ths component from the DOM
        </p>
        {showComp && <Unmounting />}
        <button
          onClick={() => {
            setComp(false);
          }}
        >
          Remove Component
        </button>
      </div>
    </div>
  );
}

export default App;
