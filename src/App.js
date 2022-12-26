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
  const refBtnTitle=useRef();
  const refBtnPara=useRef();
  const refBtnLink=useRef();
  const refBtnArr=[refBtnTitle, refBtnPara, refBtnLink]

  const [properties,setProperties]=useState({title:{zoom: 1,lineHeight: 1,fontSize: 30,letterSpacing: 0,textAlign: "left",},para:{zoom: 1,lineHeight: 1,fontSize: 14,letterSpacing: 0,textAlign: "left",},link:{zoom: 1,lineHeight: 1,fontSize: 16,letterSpacing: 0,textAlign: "left",}})
  const [isMagnify,setIsMagnify]=useState(false)

  const changeStyle=(operation,property,e)=>{
    if(operation==='highlight'){
      if(property==='title'){
        refTitle.current.classList.toggle('highlight')
      }
      else if(property==='link'){
        refLink.current.classList.toggle('highlight')
      }
    }
    else if(operation==='readable'){
      setProperties({title:{zoom: 1,lineHeight: 1,fontSize: 30,letterSpacing: 0,textAlign: "left",},para:{zoom: 1,lineHeight: 1,fontSize: 14,letterSpacing: 0,textAlign: "left",},link:{zoom: 1,lineHeight: 1,fontSize: 16,letterSpacing: 0,textAlign: "left",}})
    }
    else if(operation==='magnify'){
      setIsMagnify(!isMagnify)
      refTitle.current.classList.toggle('magnify')
      refPara.current.classList.toggle('magnify')
      refLink.current.classList.toggle('magnify')
    }
    else{
    let target=refBtnArr.find(value=>{return value.current.checked===true})
    if(target!==undefined){
      var temp=[]
      Object.entries(properties[target.current.id]).forEach(x=>{temp[x[0]]=x[1]});
      if(operation==='increase'){
        if(property==='fontSize'){
          temp[property]++;
        }
        else{
           temp[property]+=0.1;
        }
      }
      else if(operation==='decrease'){
        if(property==='fontSize'){
         temp[property]--;
        }
        else{
          temp[property]-=0.1;
        }
      }
      else if(operation==='left' || operation==='center' || operation==='right'){
        temp[property]=operation;
      }
      properties[target.current.id]=temp;
      setProperties({...properties})
    }
    }
  }

  const ContentScalingWithHOC= HOC(ContentScalingTool,"Readable Font",<i className="bi bi-file-text fs-5"></i>,changeStyle,()=>changeStyle('readable'));
  const HighlightWithHOC = HOC(HighlightTool,"Text Magnifier",<i className="bi bi-zoom-in fs-4"></i>,changeStyle,(e)=>changeStyle('magnify','on',e),isMagnify);
  const FontSizingWithHOC = HOC(FontSizingTool,"Align Center",<i className="bi bi-text-center fs-4"></i>,changeStyle,(e)=>changeStyle('center','textAlign',e),);
  const LineHeightWithHOC = HOC(LineHeightTool,"Align Left",<i className="bi bi-text-left fs-4"></i>,changeStyle,(e)=>changeStyle('left','textAlign',e),);
  const LetterSpacingWithHOC = HOC(LetterSpacingTool,"Align Right",<i className="bi bi-text-right fs-4"></i>,changeStyle,(e)=>changeStyle('right','textAlign',e),);

  

  return (
    <div className="App p-4 container d-flex flex-column flex-lg-row align-items-center align-items-lg-stretch justify-content-lg-between border my-3 rounded-2">
      <div className="container__result border p-3 rounded-2 me-2 mb-2">
        <h1 style={properties.title} ref={refTitle}>Title</h1>
        <p style={properties.para} ref={refPara}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam id
          reprehenderit corrupti odio autem quibusdam in quaerat, explicabo
          optio dolore illum soluta enim amet. Autem provident necessitatibus
          repudiandae explicabo possimus! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dolor recusandae amet quisquam laudantium, culpa
          magni tenetur eligendi unde commodi sunt consequuntur ipsa, suscipit
          libero est corporis laborum nisi non doloremque?
        </p>
        <a className='d-block' style={properties.link} ref={refLink}>Link Example</a>
      </div>
      <div className="container__tools text-center border p-3 rounded-2">
        <label className="mx-2">Select Element : </label>
        <div className="btn-group my-3" role="group" aria-label="Basic radio toggle button group">
           <input type="radio" className="btn-check" ref={refBtnTitle} name="btnradio" id="title" autoComplete="off" />
           <label className="btn btn-outline-primary" htmlFor="title">Title</label>
           <input type="radio" className="btn-check" ref={refBtnPara} name="btnradio" id="para" autoComplete="off"/>
           <label className="btn btn-outline-primary" htmlFor="para">Paragraph</label>
           <input type="radio" className="btn-check" ref={refBtnLink} name="btnradio" id="link" autoComplete="off"/>
           <label className="btn btn-outline-primary" htmlFor="link">Link</label>
        </div>
        <ContentScalingWithHOC/>
        <HighlightWithHOC/>
        <FontSizingWithHOC/>
        <LineHeightWithHOC/>
        <LetterSpacingWithHOC/>
      </div>
    </div>
  );
}

export default App;
