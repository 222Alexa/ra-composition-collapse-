import React from "react";
import { Link, LinkImg, Button } from "../Atoms/Atoms";

const USID = require("usid");
const usid = new USID();

const SectionBlockItem = React.forwardRef((props, ref) => {
  
  return (
    <div key={usid.rand()} className={props.className + "-card"}>
      <div key={usid.rand()} className={props.className + "-header"}>
        {props.image && <LinkImg key={props.id} {...props} className="image" />}
        <Link
          key={usid.rand()}
          {...props}
          text={props.name}
          tag="h5"
          className={props.className + "-title"}
        ></Link>
        <Link
          key={usid.rand()}
          {...props}
          text={props.unitName}
          tag="h5"
          className={props.className + "-unit-title"}
        ></Link>
      </div>
      <div key={usid.rand()} className={props.className + "-wrapper-content"}>
        <div
          key={usid.rand()}
          ref={ref}
          className={
            props.expanded && props.type === "bulletin-card"
              ? props.className +
                "-content " +
                props.type +
                "__content-row active"
              : props.className + "-content " + props.type + "__content-row"
          }
        >
          <Link
            key={usid.rand()}
            {...props}
            text={props.description}
            tag={"p"}
            className={
              props.type + "-text-link " + props.className + "-content-item"
            }
          ></Link>
        </div>
        <div className={props.type + "__button-block"}>
          <Button
            id={props.id}
            key={usid.rand()}
            name={props.buttonText}
            className={props.type + "-toggle-description"}
            onClick={props.onClick}
          />
        </div>
      </div>
    </div>
  );
});

export default SectionBlockItem;
SectionBlockItem.defaultProps = {
  collapse: false,
  expanded: true,
};
