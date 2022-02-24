import React from "react";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import categories from "./data";
import "./header.css"


const Header = ({ word,setWord })=>{
    return(
        <div className="header">
            <span className="title">{word ? word : "dictionary"}</span>
            <div className="inputs">
                <TextField value={word} onChange={(e)=>setWord(e.target.value)} className="search" id="standard-basic" label="Search a Word" variant="standard" />
            </div>
        </div>
    )
}

export default Header;