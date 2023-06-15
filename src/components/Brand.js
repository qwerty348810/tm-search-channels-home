import React from 'react';
import './Brand.css';

const Brand = ({previewText, filterText, listServer, phraseSorry, phraseReports}) => {

  if(filterText==='')
  return(
      <>
      {
        previewText.map((previewText, index) => {
          return (
            <a className="brand-item__content home" href={"getChannelUrl"+previewText.username} key={index}>
              <picture className="brand-item__picture">
                <img className="brand-item__img" src={"media"+previewText.username+"/"+previewText.logo_image} alt={previewText.username}></img>
              </picture>  
              <div className="brand-item__description" >
                <p className="grey-hook">{previewText.title}</p>          
                <p className="text-low">(<span className="blue-hook">subscribers: {previewText.participants_count}</span>)</p>
              </div>
            </a>
          )
        })
      }
      </>
  );

if(filterText!=='' && listServer.length>0)
return(
  <>
    {
      listServer.map((listServer, index) => {
        return (
          <a className="brand-item__content home" href={"getChannelUrl"+listServer.username} key={index}>
            <picture className="brand-item__picture">
              <img className="brand-item__img" src={"media"+listServer.username+"/"+listServer.logo_image} alt={listServer.username}></img>
            </picture> 
            <div className="brand-item__description" >
            <p className="grey-hook">{listServer.title}</p> 
            <p className="text-low">(<span className="blue-hook">subscribers: {listServer.participants_count}</span>)</p>
            </div>
          </a>
        )
      })
    }
  </>
);
if(filterText!=='' && listServer.length===0)
  return(
      <>
      {
          <div className="brand-item__content phrase-sorry home">
            <div className="brand-item__description" >
              <p className="grey-hook">{phraseSorry}</p>
            </div>
          </div> 
      }
      </>
  );





}
export default Brand;
