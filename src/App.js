import "./App.css";
import { useRef, useState } from "react";
import ContentScalingTool from "./components/ContentScalingTool";
import HighlightTool from "./components/HiglightTool";
import FontSizingTool from "./components/FontSizingTool";
import LineHeightTool from "./components/LineHeightTool";
import LetterSpacingTool from "./components/LetterSpacingTool";
import HOC from "./components/HOC";

function App() {
  const refTitle=useRef();
  const refPara=useRef();
  const refLink=useRef();
  const refArr=[refTitle, refPara, refLink]

  const [properties,setProperties]=useState({title:{zoom: 1,lineHeight: 1,fontSize: 30,letterSpacing: 0,textAlign: "left",},para:{zoom: 1,lineHeight: 1,fontSize: 14,letterSpacing: 0,textAlign: "left",},link:{zoom: 1,lineHeight: 1,fontSize: 16,letterSpacing: 0,textAlign: "left",}})

  const changeStyle=(operation,property)=>{
    console.log(operation,property)
    let target=refArr.find(value=>{return value.current.checked===true})
    if(target!==undefined){
      console.log(properties[target.current.id][property])
      var temp=properties[target.current.id];
      temp[property]++;
      console.log(temp)
      let obj = {[property]:temp[target.current.id][property]+1};
      console.log(temp)
      setProperties({...temp})
    }
  }

  const ContentScalingWithHOC = HOC(ContentScalingTool,"Readable Font",<i className="bi bi-file-text fs-5"></i>,changeStyle);
  const HighlightWithHOC = HOC(HighlightTool,"Text Magnifier",<i className="bi bi-zoom-in fs-4"></i>,changeStyle);
  const FontSizingWithHOC = HOC(FontSizingTool,"Align Center",<i className="bi bi-text-center fs-4"></i>,changeStyle);
  const LineHeightWithHOC = HOC(LineHeightTool,"Align Left",<i className="bi bi-text-left fs-4"></i>,changeStyle);
  const LetterSpacingWithHOC = HOC(LetterSpacingTool,"Align Right",<i className="bi bi-text-right fs-4"></i>,changeStyle);

  

  return (
    <div className="App p-4 container d-flex justify-content-between border my-3 rounded-2">
      <div className="container__tools text-center border p-3 rounded-2">
        <label className="mx-2">Select Element : </label>
        <div className="btn-group my-3" role="group" aria-label="Basic radio toggle button group">
           <input type="radio" className="btn-check" ref={refTitle} name="btnradio" id="title" autoComplete="off" />
           <label className="btn btn-outline-primary" htmlFor="title">Title</label>
           <input type="radio" className="btn-check" ref={refPara} name="btnradio" id="para" autoComplete="off"/>
           <label className="btn btn-outline-primary" htmlFor="para">Paragraph</label>
           <input type="radio" className="btn-check" ref={refLink} name="btnradio" id="link" autoComplete="off"/>
           <label className="btn btn-outline-primary" htmlFor="link">Link</label>
        </div>
        <ContentScalingWithHOC/>
        <HighlightWithHOC/>
        <FontSizingWithHOC/>
        <LineHeightWithHOC/>
        <LetterSpacingWithHOC/>
      </div>
      <div className="container__result border p-3 rounded-2">
        <h1 style={properties.title}>Title</h1>
        <p style={properties.para}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam id
          reprehenderit corrupti odio autem quibusdam in quaerat, explicabo
          optio dolore illum soluta enim amet. Autem provident necessitatibus
          repudiandae explicabo possimus! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dolor recusandae amet quisquam laudantium, culpa
          magni tenetur eligendi unde commodi sunt consequuntur ipsa, suscipit
          libero est corporis laborum nisi non doloremque?
        </p>
        <a style={properties.link}>Link Example</a>
      </div>
    </div>
  );
}

export default App;
