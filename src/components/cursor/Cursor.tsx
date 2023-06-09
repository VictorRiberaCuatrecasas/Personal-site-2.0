import { useEffect } from "react";
import styles from "./Cursor.module.scss";

export default function Cursor() {
  useEffect(() => {
    const cursor = document.querySelector<HTMLElement>("#cursor");
    const cursorBorder = document.querySelector<HTMLElement>("#cursor-border");
    const cursorPos = { x: 0, y: 0 };
    const cursorBorderPos = { x: 0, y: 0 };

    document.addEventListener("mousemove", (e) => {
      cursorPos.x = e.clientX;
      cursorPos.y = e.clientY;

      if (cursor) {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    });

    requestAnimationFrame(function loop() {
      const easting = 2;
      cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / easting;
      cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / easting;

      if (cursorBorder) {
        cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;
      }
      requestAnimationFrame(loop);
    });

    if (cursorBorder) {//need to find a way to make it go back to normal
      document.body.onmousedown = function () {
        cursorBorder.style.backgroundColor = "rgba(255, 255, 255, .6)";
        cursorBorder.style.setProperty("--size", "40px");
      };
      document.body.onmouseup = function () {
        cursorBorder.style.backgroundColor = "unset";
        cursorBorder.style.mixBlendMode = "unset";
        cursorBorder.style.setProperty("--size", "30px");
      };
    }

    document.querySelectorAll<HTMLElement>("[data-cursor]").forEach((item) => {
      let styleCursor = function () {
        if (item.dataset.cursor === "pointer") {
          if (cursorBorder) {
            cursorBorder.style.backgroundColor = "rgba(255, 255, 255, .6)";
            cursorBorder.style.setProperty("--size", "20px");
          }
        }
        if (item.dataset.cursor === "pointer2") {
          if (cursorBorder) {
            cursorBorder.style.backgroundColor = "white";
            cursorBorder.style.mixBlendMode = "difference";
            cursorBorder.style.setProperty("--size", "50px");
          }
        }
      };
      item.addEventListener("mouseover", styleCursor);
      item.addEventListener("mousedown", styleCursor);

      item.addEventListener("mouseout", (e) => {
        if (cursorBorder) {
          cursorBorder.style.backgroundColor = "unset";
          cursorBorder.style.mixBlendMode = "unset";
          cursorBorder.style.setProperty("--size", "30px");
        }
      });
    });
  }, []);

  return (
    <>
      <div id="cursor" className={styles.cursor}></div>
      <div id="cursor-border" className={styles.cursorBorder}></div>
      <input type="button" value="Hover Me!" data-cursor="pointer"></input>
      <input type="button" value=":-D" data-cursor="pointer2"></input>
    </>
  );
}
