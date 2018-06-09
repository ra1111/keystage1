const React = require('react-native');

const {Platform} = React;
export default {
  container: {
    width: '100%',
    height: 180,
    flexDirection: 'row',
    backgroundColor: '#2E3D48',
    alignItems: 'center'
  },
  profilePic: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: '#FFFF',
    marginLeft: 40
  },
  text: {
    marginLeft: 20,
    fontSize: 22,
    color: '#fff'
  }
};
