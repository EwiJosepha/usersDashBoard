import { useState } from "react";
import "./avatar.css";
function Avatar() {
  const [img, setImg] = useState();
  function imagehandle(event) {
    const fileName = event.target.files[0];
    if (fileName) {
      const loadimg = new FileReader();
      loadimg.onload = () => {
        const targetImg = loadimg.result;
        setImg(targetImg);
        localStorage.setItem("targetimg", targetImg);
      };
      loadimg.readAsDataURL(fileName);
    }
  }

  return (
    <>
      <div className="avatar">
        <input type="file" onChange={imagehandle} id="input" />
        <div className="fileimg">
          <img src={img} />
        </div>
      </div>
    </>
  );
}
export default Avatar;
