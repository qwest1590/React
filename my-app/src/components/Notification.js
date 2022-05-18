import React from "react";
import PropTypes from "prop-types";
export default function Notification({ props: { icon, title, type } }) {
  return (
    <div className={`notification ${type}`}>
      {type && (
        <h1>
          {icon} {title}
        </h1>
      )}
    </div>
  );
}

Notification.propTypes = {
  props: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string,
  }),
};
Notification.defaultProps = {
  props: {
    icon: "Default",
    title: "Message",
    type: "No type",
  },
};
