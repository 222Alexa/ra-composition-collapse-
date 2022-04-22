import React from "react";

import PropTypes from "prop-types";

/**Изображение со ссылкой */
export const LinkImg = (props) => {
  if (!props) {
    return null;
  }

  const classes = props.className + "-link link__" + props.type;
  return (
    <>
      <a className={classes} href={props.image} target="blanc">
        <img
          className={props.type + "-image " + props.className + "-image"}
          src={props.image}
          alt={props.name}
        />
      </a>
    </>
  );
};

LinkImg.propTypes = {
  props: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }),
};

/**Текстовая ссылка */

export const Link = (props) => {
  if (!props) {
    return null;
  }

  //console.log(props, "link");

  const classes = props.className + "-link";
  let result = React.createElement(
    props.tag,
    { className: props.className + "-text" },
    props.text
  );

  return (
    <>
      <a className={classes} href={props.url} target="blanc">
        {result}
      </a>
    </>
  );
};
Link.propTypes = {
  props: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
  }),
};

Link.defaultProps = {
  url: "#",
};

/**Кнопка */
export const Button = ({ ...data }) => {

  return (
    <React.Fragment>
      <button ref={data.btnRef} data-id={data.id} className={data.className + "__btn"}  onClick={data.onClick}>{data.name}</button>
    </React.Fragment>
  );
};

Button.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    btnRef: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  }),
};
