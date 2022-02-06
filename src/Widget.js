import React from 'react';
import './Widget.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';


function Widget() {
    const newsArticles = (heading,subtitle)=>{
        return (<div className="widget__article">
            <div className="widget__articleLeft">
               <FiberManualRecordIcon/>
            </div>
            <div className="widget__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>)
    }
  return <div className='widgets'>
    <div className='widgets__header'>
        <h2>
            LinkedIn News
        </h2>
        <InfoIcon/>
    </div>
     {newsArticles("My first full stack website","Top News - 1200 readers")}
     {newsArticles("Corna Virus: UK Updates","Top News - 886 readers")}
     {newsArticles("Tesla hits new heighs","Cars and Auto  - 934 readers")}
     {newsArticles("Bitcoin breaks $22k","Crypto  - 847 readers")}{newsArticles("Is Redux too good?","Code  - 1032 readers")}

  </div>;
}

export default Widget;
