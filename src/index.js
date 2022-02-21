import React from "react";
import ReactDom from "react-dom";
import CardDetails from "./card";
const App = () =>{
    return (
        <div class="ui three column grid">
            <div className="row">
                <CardDetails name="Jane" phno="986574124" email="aasdc@gmail.com"/>
                <CardDetails name="Alice" phno="987531457" email="alice@gmail.com"/>
                <CardDetails name="jofra" phno="9653214785" email="jofra@gmail.com"/>
            </div>
        </div>
       
    );

}

ReactDom.render(<App />, document.querySelector('#root'));