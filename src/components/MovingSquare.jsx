import React, { useState, useEffect } from "react";

function MovingSquare() {
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);

  function handleKeyDown(e) {
    if (e.code === "ArrowDown") {
      setTop((prev) => prev + 10);
    }

    if (e.code === "ArrowUp") {
      setTop((prev) => prev - 10);
    }

    if (e.code === "ArrowRight") {
      setLeft((prev) => prev + 10);
    }

    if (e.code === "ArrowLeft") {
      setLeft((prev) => prev - 10);
    }

    if (e.code === "Space") {
      const movable = document.getElementById("movable");
      console.log(movable);
      const rect = movable.getBoundingClientRect();
      const x = rect.left + movable.offsetWidth / 2;
      const y = rect.top + movable.offsetHeight / 2;

      movable.style.visibility = "hidden";

      let selectedEle = document.elementFromPoint(x, y);

      selectedEle.style.borderStyle = "dotted";
      selectedEle.style.borderWidth = "2px";
      selectedEle.style.borderColor = "red";

      console.log(selectedEle);

      movable.style.visibility = "visible";

      console.log(selectedEle.tagName);

      if (selectedEle && selectedEle.tagName !== "svg") {
        selectedEle.click();
      }
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (left < 0) {
      setLeft(0);
    }

    if (top < 0) {
      setTop(0);
    }

    if (left > window.innerWidth) {
      setLeft(window.innerWidth);
    }

    if (top > window.innerHeight) {
      setTop(window.innerHeight);
    }
  }, [left, top]);

  return (
    <div
      id="movable"
      className="h-20 w-20 border-2 border-black absolute"
      style={{ top: `${top}px`, left: `${left}px` }}
    />
  );
}

export default MovingSquare;
