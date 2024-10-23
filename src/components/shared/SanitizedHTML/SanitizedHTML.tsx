import { createElement, HTMLAttributes } from "react";
import sanitize from "sanitize-html";

type SanitizeHTMLPros = {
  children: string;
  tag: string;
} & HTMLAttributes<HTMLElement>;

export const SanitizeHTML = ({ children, tag, ...rest }: SanitizeHTMLPros) => {
  const sanitizedHTML = sanitize(children, {
    allowedTags: [],
  });

  return createElement(tag, { ...rest }, sanitizedHTML);
};
