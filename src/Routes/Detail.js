import React from "react";

export default ({
  match: {
    params: { id }
  }
}) => `Detail ${id}`;
