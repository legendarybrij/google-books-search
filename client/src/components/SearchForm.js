import React from "react";

function SearchForm(props) {
    return(
        <div id="searchContainer">
            <h3 id="searchInfo">Book Search</h3>
            <form id="bookSearch">
                <label htmlFor="bookInput" id="searchInfo" form="bookSearch">Enter a book to search:</label>
                <br></br>
                <input type="text" name="bookInput" id="bookInput" form="bookSearch" onChange={(e) => props.handleChange(e)} placeholder="Book Title" required/>
                <br></br>
                <button type="submit" onClick={(e) => props.handleSearchClick(e)}>Search</button>
            </form>
        </div>
    );
}

export default SearchForm;