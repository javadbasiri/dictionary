import React from "react";
import "./def.css"
const Definition =({ word,meaning })=>{
    return(
        <div className="wrapper">
            {
                word === "" ? <span className="subtitle">try to search a word</span>:
                
                meaning.map(item=>(
                    item.meanings.map(mean=>(
                        mean.definitions.map(def=>(
                            <div className="single-meaning">
                                <p><span>word : </span>{item.word}</p>
                                <p><span>phonetic : </span>{item.phonetic}</p>
                                <p><span>part of speech : </span>{mean.partOfSpeech}</p>
                                <p><span>meaning : </span>{def.definition}</p>
                                {
                                    def.example && <p><span>exmaple : </span>{def.example}</p>
                                }
                                {
                                    def.synonyms && <p><span>synonyms : </span>{def.synonyms.map(s=>` ${s} ,`)}</p>
                                }
                            </div>
                        ))
                    ))
                ))

            }
        </div>
    )
}

export default Definition;