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

    document.querySelectorAll<HTMLElement>("[data-cursor]").forEach((item) => {
      if (item.dataset.cursor === "pointer") {
        if (cursorBorder && cursor) {
          item.addEventListener("mouseover", (e) => {
            cursorBorder.style.setProperty("--size", "50px");
            cursor.style.setProperty("display", "none");
          });
          item.addEventListener("mouseout", (e) => {
            cursorBorder.style.setProperty("--size", "30px");
            cursor.style.setProperty("display", "unset");
          });
          item.addEventListener("mousedown", (e) => {
            cursorBorder.style.setProperty("--size", "30px");
            cursor.style.setProperty("display", "none");
          });
          item.addEventListener("mouseup", (e) => {
            cursorBorder.style.setProperty("--size", "50px");
            cursor.style.setProperty("display", "unset");
          });
        }
      }

      if (item.dataset.cursor === "pointer2") {
        if (cursorBorder && cursor) {
          item.addEventListener("mouseover", (e) => {
            cursorBorder.style.backgroundColor = "white";
            cursorBorder.style.mixBlendMode = "difference";
            cursorBorder.style.setProperty("--size", "50px");
            cursor.style.setProperty("display", "none");
          });
          item.addEventListener("mouseout", (e) => {
            cursorBorder.style.backgroundColor = "unset";
            cursorBorder.style.mixBlendMode = "unset";
            cursorBorder.style.setProperty("--size", "30px");
            cursor.style.setProperty("display", "unset");
          });
          item.addEventListener("mousedown", (e) => {
            cursorBorder.style.setProperty("--size", "30px");
            cursor.style.setProperty("display", "none");
          });
          item.addEventListener("mouseup", (e) => {
            cursorBorder.style.backgroundColor = "white";
            cursorBorder.style.mixBlendMode = "difference";
            cursorBorder.style.setProperty("--size", "50px");
            cursor.style.setProperty("display", "unset");
          });
        }
      }
    });
  }, []);

  return (
    <>
      <div id="cursor" className={styles.cursor}></div>
      <div id="cursor-border" className={styles.cursorBorder}></div>
    </>
  );
}
