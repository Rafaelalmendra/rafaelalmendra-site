import React, { Component } from "react";

export class Comments extends Component {
  constructor(props) {
    super(props);
    this.commentBox = React.createRef();
  }

  componentDidMount() {
    let scriptEl = document.createElement("script");
    scriptEl.setAttribute("src", "https://utteranc.es/client.js");
    scriptEl.setAttribute("crossorigin", "anonymous");
    scriptEl.setAttribute("async", true);
    scriptEl.setAttribute("repo", "Rafaelalmendra/utterances-comments-blog"),
      scriptEl.setAttribute("issue-term", "url"),
      scriptEl.setAttribute("theme", "dark-blue"),
      this.commentBox.current.appendChild(scriptEl);
  }

  render() {
    return (
      <div style={{ width: "100%" }} id="comments">
        <div ref={this.commentBox}></div>
      </div>
    );
  }
}
