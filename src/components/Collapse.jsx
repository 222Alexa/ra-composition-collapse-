import React, { useState, useRef, useEffect } from "react";
import SectionBlock from "./Sections/SectionBlock";
import SectionBlockItem from "./Sections/SectionBlockItem";
import { flowersData, bulletinData } from "../db/fakeData";
const USID = require("usid");
const usid = new USID();

export default function Collapse() {
  let currentRef = useRef();
  let cardRef = useRef();
  const text = {
    collapse: "Показать",
    expanded: "Скрыть",
  };

  const onClick = (e) => {
    e.preventDefault();

    currentRef.current = e.target;

    currentRef.current.textContent === text.collapse
      ? (currentRef.current.textContent = text.expanded)
      : (currentRef.current.textContent = text.collapse);

    cardRef.current = e.target.parentElement.previousSibling;

    currentRef.current.textContent === text.collapse
      ? cardRef.current.classList.remove("active")
      : cardRef.current.classList.add("active");
  };

  return (
    <React.Fragment>
      <SectionBlock
        key={usid.rand()}
        className={"flowers-guide"}
        ref={currentRef}
      >
        {flowersData.map((item) => {
          return (
            <SectionBlockItem
              key={item.id}
              {...item}
              type={item.type}
              className={"flowers"}
              onClick={onClick}
              buttonText={text.collapse}
            ></SectionBlockItem>
          );
        })}
      </SectionBlock>
      <SectionBlock
        key={usid.rand()}
        className={"bulletin-panel"}
        ref={currentRef}
      >
        {bulletinData.map((item) => {
          return (
            <SectionBlockItem
              key={item.id}
              {...item}
              type={item.type}
              className={"bulletin"}
              onClick={onClick}
              buttonText={text.expanded}
            ></SectionBlockItem>
          );
        })}
      </SectionBlock>
    </React.Fragment>
  );
}
