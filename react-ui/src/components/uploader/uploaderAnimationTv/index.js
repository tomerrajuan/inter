import axios from "axios";
import React from "react";

export default class UploaderAnimationTv extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    handleChange(e) {
        this.file = e.target.files[0];
        var me= this;
        var fd = new FormData();
        fd.append("file", this.file);
        axios
            .post("/upload-animation-tv", fd)
            .then(function(response) {
                console.log("upload image is done with id: ", response)

            })
            .catch(err => console.log("error in post upload", err));
    }
    render() {
        return (
            <div>
                <input
                    onChange= {e => this.handleChange(e)}
                    id="choosefile"
                    type="file"
                    name="file"
                    accept="image/*"
                />
            </div>
        );
    }
}
