const Button = (properties) => {
  console.log(properties);

  return (
    <button onClick={properties.handleClick}>{properties.children}</button>
  );
};
export default Button;

// { default: Button, Button }
