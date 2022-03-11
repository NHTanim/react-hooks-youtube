import React from 'react';
import NoteContext from './noteContext';

const NoteState = (props) => {

    const infoOne = {
        "name" : "Nazmul Hossain Tanim",
        "vrcty" : "DIU",
        "id" : 9153
    }

    // const infoTwo = {
    //     "name" : "Meem",
    //     "vrcty" : "DIU",
    //     "id" : 9097
    // }

    return (
      <NoteContext.Provider value = {infoOne}>

          {props.children}

      </NoteContext.Provider>
    );
};

export default NoteState;