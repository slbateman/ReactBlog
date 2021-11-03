import { useState } from "react";

function ToTopButton() {
  const [topButton, setTopButton] = useState(<div></div>);
  window.onscroll = () => {
      console.log(document.documentElement.scrollTop)
    scrollFunction();
  };
  function scrollFunction() {
    if (
      document.documentElement.scrollTop > 300
    ) {
        console.log("True")
      setTopButton(
        <button
          className="top-button"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          ^ To Top ^
        </button>
      );
    } else {
        console.log("False")
        setTopButton(<div></div>)
    }
  }
  return <div>
      {topButton}
  </div>;
}

export default ToTopButton;
