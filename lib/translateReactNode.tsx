import React from 'react';

export type TranslationDict = Record<string, string>;

function normalizeLookupKey(raw: string) {
  return raw.replace(/\s+/g, ' ').trim();
}

export function translateStringPreserveWhitespace(input: string, dict: TranslationDict) {
  if (!input) return input;

  const match = input.match(/^(\s*)([\s\S]*?)(\s*)$/);
  if (!match) return input;

  const leading = match[1];
  const core = match[2];
  const trailing = match[3];

  const normalized = normalizeLookupKey(core);
  if (!normalized) return input;

  const translated = dict[normalized];
  if (!translated) return input;

  return `${leading}${translated}${trailing}`;
}

const TRANSLATABLE_PROPS = ['alt', 'title', 'placeholder', 'aria-label'] as const;

export function translateReactNode(node: React.ReactNode, dict: TranslationDict): React.ReactNode {
  if (typeof node === 'string') {
    return translateStringPreserveWhitespace(node, dict);
  }

  if (node === null || node === undefined || typeof node === 'number' || typeof node === 'boolean') {
    return node;
  }

  if (Array.isArray(node)) {
    return React.Children.map(node, (child) => translateReactNode(child, dict));
  }

  if (!React.isValidElement(node)) {
    return node;
  }

  if (typeof node.type === 'string' && (node.type === 'script' || node.type === 'style')) {
    return node;
  }

  const props: Record<string, unknown> = node.props ?? {};
  const nextProps: Record<string, unknown> = {};

  for (const propName of TRANSLATABLE_PROPS) {
    const value = props[propName];
    if (typeof value === 'string') {
      nextProps[propName] = translateStringPreserveWhitespace(value, dict);
    }
  }

  if ('dangerouslySetInnerHTML' in props && props.dangerouslySetInnerHTML) {
    return React.cloneElement(node, nextProps);
  }

  const children = (props as { children?: React.ReactNode }).children;
  const nextChildren = translateReactNode(children, dict);

  return React.cloneElement(node, nextProps, nextChildren);
}
