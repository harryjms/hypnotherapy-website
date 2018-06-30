import React from 'react';

class IconMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { size, color, ...rest } = this.props;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || 24}
        height={size || 24}
        viewBox="0 0 24 24"
        {...rest}
      >
        <path d="M0 0h24v24H0z" fill={color || 'none'} />
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
      </svg>
    );
  }
}

export default IconMenu;
