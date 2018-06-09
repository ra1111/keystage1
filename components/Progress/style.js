export default {
  container: {
    width: '90%',
    height: 160,
    backgroundColor: '#fff',
    borderRadius: 6,
    margin: 10,
    justifyContent: 'space-around',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 1
  },
  progress: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginHorizontal: 10
  },
  completed: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    marginHorizontal: 10
  },
  completedBar: {},
  PendingBar: {},
  onGoingBar: {},
  text: {
    fontSize: 12,
    flex: 1,
    fontWeight: '400'
  },
  header: {
    fontSize: 18,
    fontWeight: '600'
  },
  wrapper: {
    marginTop: 10
  },
  bar: {
    flex: 3,
    backgroundColor: 'transparent'
  }
};
