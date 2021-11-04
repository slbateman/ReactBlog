import { useState } from "react";

function ToTopButton() {
  const [topButton, setTopButton] = useState(<div></div>);
  window.onscroll = () => {
    scrollFunction();
  };
  function scrollFunction() {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
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
        setTopButton(<div></div>)
    }
  }
  return <div>
      {topButton}
  </div>;
}

export default ToTopButton;
