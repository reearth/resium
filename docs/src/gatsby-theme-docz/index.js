// Ref: https://github.com/doczjs/docz/blob/v2.2.0/core/gatsby-theme-docz/src/index.js
/** @jsx jsx */
import { jsx } from "theme-ui";
import { theme, useConfig, ComponentsProvider } from "docz";
import { Styled, ThemeProvider } from "theme-ui";

import defaultTheme from "gatsby-theme-docz/src/theme";
import defaultComponents from "gatsby-theme-docz/src/components";

import { InlineCode } from "./components/InlineCode";
import { Table } from "./components/Table";

const withNoClassName = Component => ({ className: _, ...props }) => <Component {...props} />;

const components = {
  ...defaultComponents,
  inlineCode: withNoClassName(InlineCode),
  table: withNoClassName(Table),
  thead: withNoClassName(props => <thead {...props} />),
  th: withNoClassName(props => <th {...props} />),
  td: withNoClassName(props => <td {...props} />),
};

const Theme = ({ children }) => {
  const config = useConfig();
  return (
    <ThemeProvider theme={config.themeConfig}>
      <ComponentsProvider components={{ ...components, table: Table }}>
        <Styled.root>{children}</Styled.root>
      </ComponentsProvider>
    </ThemeProvider>
  );
};

export default theme(defaultTheme)(Theme);
