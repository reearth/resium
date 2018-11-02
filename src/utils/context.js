import React from "react";

const createContext = name => {
  const { Provider, Consumer } = React.createContext();

  const withContext = Component => {
    const WithContextComponent = (props, ref) => (
      <Consumer>{value => <Component {...{ ...props, ref, [name]: value }} />}</Consumer>
    );

    const componentName = name && name.length > 0 ? name[0].toUpperCase() + name.slice(1) : "";
    WithContextComponent.displayName = `with${componentName}`;

    return React.forwardRef(WithContextComponent);
  };

  return { Provider, Consumer, withContext };
};

export default createContext;
