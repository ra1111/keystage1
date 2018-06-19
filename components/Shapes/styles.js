export default {
  square: {
    width: 100,
    height: 100,
    backgroundColor: 'red'
  },
  rectangle: {
    width: 100 * 2,
    height: 100,
    backgroundColor: 'red'
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    backgroundColor: 'red'
  },
  oval: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'red',
    transform: [{scaleX: 2}]
  },
  hexagon: {
    width: 100,
    height: 55
  },
  hexagonInner: {
    width: 100,
    height: 55,
    backgroundColor: 'red'
  },
  hexagonAfter: {
    position: 'absolute',
    bottom: -25,
    left: 60,
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderLeftWidth: 50,
    borderLeftColor: 'transparent',
    borderRightWidth: 50,
    borderRightColor: 'transparent',
    borderTopWidth: 25,
    borderTopColor: 'red'
  },
  hexagonBefore: {
    position: 'absolute',
    top: -25,
    left: 60,
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderLeftWidth: 50,
    borderLeftColor: 'transparent',
    borderRightWidth: 50,
    borderRightColor: 'transparent',
    borderBottomWidth: 25,
    borderBottomColor: 'red'
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderBottomWidth: 100,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'red'
  },
  trapezoid: {
    width: 200,
    height: 0,
    borderBottomWidth: 100,
    borderBottomColor: 'red',
    borderLeftWidth: 50,
    borderLeftColor: 'transparent',
    borderRightWidth: 50,
    borderRightColor: 'transparent',
    borderStyle: 'solid'
  },
  parallelogram: {
    width: 150,
    height: 100
  },
  parallelogramInner: {
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: 'red',
    width: 150,
    height: 100
  },
  parallelogramRight: {
    top: 0,
    right: -50,
    position: 'absolute',
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderBottomWidth: 100,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'red'
  },
  parallelogramLeft: {
    top: 0,
    left: -50,
    position: 'absolute',
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderBottomWidth: 100,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'red',
    transform: [{rotate: '180deg'}]
  },
  octagonBar: {
    width: 42,
    height: 100,
    backgroundColor: 'red'
  },
  octagonUp: {},
  octagonFlat: {
    position: 'absolute',
    top: 0,
    left: 0,
    transform: [{rotate: '90deg'}]
  },
  octagonLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    transform: [{rotate: '-45deg'}]
  },
  octagonRight: {
    position: 'absolute',
    top: 0,
    left: 0,
    transform: [{rotate: '45deg'}]
  },
  parallelogram: {
    width: 150,
    height: 100
  },
  parallelogramInner: {
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: 'red',
    width: 150,
    height: 100
  }
};
