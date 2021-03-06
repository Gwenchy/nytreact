import React from "react";

export const SearchButton = props =>
    <button {...props} style={{ float: "left", marginBottom: 10 }} className="btn btn-success">
        {props.children}
    </button>;