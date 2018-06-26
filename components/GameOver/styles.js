export default {
  container: {
    backgroundColor: '#186da5',
    flex: 1,

    justifyContent: 'center'
  },
  score: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
    flex: 1
  },
  border: {
    height: 2,
    width: '100%',
    backgroundColor: 'black'
  },
  stats: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    flex: 1
  },
  statsContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginTop: 40
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 3,
    marginBottom: 100,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 10},
    shadowRadius: 1,
    elevation: 6,
    alignItems: 'center'
  },
  buttonText: {
    color: 'blue',
    textAlign: 'center',
    alignSelf: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8
  }
};
