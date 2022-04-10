import React from "react";
import { StyledText } from "./styles";

export function Text({ content, color, size, type, weight, align }, ...props) {
  return (
    <StyledText
        color={color}
        size={size}
        type={type}
    >
        {content}
    </StyledText>
  )
}
