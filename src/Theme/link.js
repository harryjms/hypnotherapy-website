import colours from './colours';
export default {
  color: colours.primaryLink,
  textDecoration: 'none',
  transition: 'all 0.2s ease-in-out',
  position: 'relative',
  '&:after': {
    content: "' '",
    display: 'block',
    position: 'absolute',
    bottom: -3,
    left: 0,
    right: 0,
    borderBottom: '1px solid ' + colours.primaryLink,
    opacity: 0,
    transition: 'all 0.2s ease-in-out',
  },
  '&:hover': {
    // color: colours.primaryLinkHover,
    '&:after': {
      opacity: 1,
      bottom: -1,
    },
  },
  '&:active': {
    color: colours.lightPink,
    '&:after': {
      borderColor: colours.lightPink,
    },
  },
};
