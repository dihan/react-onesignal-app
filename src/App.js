import React, { PureComponent } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends PureComponent {
  componentDidMount() {
    const tags = "some tag";
    const orderUuid = "someid";

    let OneSignal = window.OneSignal || [];
    OneSignal.push(function() {
      OneSignal.init(
        {
          appId: "you-onesignal-id-goes-here", // OneSignal ID
          notifyButton: {
            enable: false
          },
          welcomeNotification: {
            title: "Notifications Enabled",
            message: "Get instant notifications with progress of your order."
            // "url": "" /* Leave commented for the notification to not open a window on Chrome and Firefox (on Safari, it opens to your webpage) */
          }
        },
        OneSignal.setExternalUserId(orderUuid),
        OneSignal.sendTags({ tags }).then(function(tagsSent) {
          console.log("tagsSent: ", tagsSent);
        })
      );
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
