import React from "react";
import marked from "marked";
//import DOMPurify from "dompurify";
import Markdown from "markdown-to-jsx";
import "./Post.css";

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postsrc: `../page/${props.postTitle}.md`,
            content: "",
        };
    }
    async componentDidMount() {
        const file = await import(`../page/${this.props.postTitle}.md`);
        const response = await fetch(file.default);
        const text = await response.text();
        const headerIdentifier = "---";
        const headerLast =
            text.lastIndexOf(headerIdentifier) + headerIdentifier.length;

        this.setState({
            content: text.substring(headerLast),
        });
    }
    render() {
        return (
            <div className="post">
                <Markdown children={this.state.content} />
            </div>
        );
    }
}

export default Post;
