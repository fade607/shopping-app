import React from "react";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarHalfIcon from "@material-ui/icons/StarHalf";
function Stars({ stars }) {
  console.log(stars);
  return (
    <div className="stars">
      <span>
        {stars >= 1 ? (
          <StarIcon />
        ) : stars >= 0.5 ? (
          <StarHalfIcon />
        ) : (
          <StarBorderIcon />
        )}
      </span>
      <span>
        {stars >= 2 ? (
          <StarIcon />
        ) : stars >= 1.5 ? (
          <StarHalfIcon />
        ) : (
          <StarBorderIcon />
        )}
      </span>
      <span>
        {stars >= 3 ? (
          <StarIcon />
        ) : stars >= 2.5 ? (
          <StarHalfIcon />
        ) : (
          <StarBorderIcon />
        )}
      </span>
      <span>
        {stars >= 4 ? (
          <StarIcon />
        ) : stars >= 3.5 ? (
          <StarHalfIcon />
        ) : (
          <StarBorderIcon />
        )}
      </span>
      <span>
        {stars >= 5 ? (
          <StarIcon />
        ) : stars >= 4.5 ? (
          <StarHalfIcon />
        ) : (
          <StarBorderIcon />
        )}
      </span>
    </div>
  );
}

export default Stars;
