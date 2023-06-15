import './App.css';
import Brand from './components/Brand';
import Show from './components/Show';
import ShowSvg from './components/ShowSvg';
import { React, useState } from 'react';

const App = () => {
  const phraseSorry = "Sorry! We couldn’t find it.";
  const phraseReports = "Reports in the last 48 hours";
  const phraseSearch = "Search telegram channels by username and title";
  const phraseButtonSearch ="Search";
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const [previewText, setPreviewText] = useState([]);
  const [filterText, setFilterText] = useState('');
  const [listServer, setlistServer] = useState([]);
  const clear = () => setFilterText('');
  //const valueBrand = (e) => {setFilterText(e.target.textContent); console.log('Yes')};
  //const valueBrand = () => setFilterText('1');



//console.log(filterText);
  async function somethingSend(){
    var data = new FormData(); 
    data.append("token", "token");
    data.append("q", filterText);
      //await fetch("https://playso.fun/test/", {
        await fetch("getSearchUrl", {
      method: "POST",
      body: data
    })
    .then(response => response.json())
    .then(response => {  
    setlistServer(response.rows);
    //console.log(listServer);
    }) 
  }
//console.log(filterText);

 async function previewGet(){
  var data = new FormData();
  data.append("token", "token");
  data.append("q", '');
  //await fetch("https://playso.fun/test/preview/", {
  await fetch("getSearchUrl", {
  method: "POST",
  body: data
})
.then(response => response.json())
.then(response => {  
setPreviewText(response.rows);
//console.log(previewText);
}) 
}
// console.log(previewText);


  return (
    <div className="search-brands__app home" onClick={() => {handleOpen(); previewGet()}} onMouseLeave={handleClose}>
      <form className="search-form home">
        <input
        className="form-control home" 
        type="text" 
        value={filterText} 
        placeholder={phraseSearch}
        //onFocus={() => {handleOpen(); previewGet()}}
        // onBlur={handleClose}
        // onMouseLeave={handleClose}
        onChange={(e)=>{setFilterText(e.target.value); somethingSend()}}
        />
      <button type="submit" class="search-button__home">{phraseButtonSearch}</button>
      </form>
      <ShowSvg onClick={clear} className={`button-search__svg home ${filterText==='' ? 'show' : 'hidden'}`}/>
      <Show className={`list-block home ${open ? 'show' : 'hidden'}`}>
        <Brand phraseSorry={phraseSorry} phraseReports={phraseReports} previewText={previewText} filterText={filterText} listServer={listServer}/>
      </Show>
      
    </div>
  );
}

export default App;
