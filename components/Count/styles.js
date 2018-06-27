export default {
  container: {
    backgroundColor: '#186da5',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between'
  },
  questionWrapper: {
    justifyContent: 'space-around',
    backgroundColor: '#fbf0e5',
    height: 140,
    borderRadius: 8,
    alignSelf: 'center',
    marginHorizontal: 25,
    width: '100%'
  },
  optionWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: 20
  },
  life: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  button: {
    backgroundColor: '#fbf0e5',
    borderRadius: 3,
    height: 50,
    width: '50%',
    marginTop: 40,
    shadowColor: 'rgba(0,0,0, .4)',
    shadowOffset: {height: 1, width: 1},
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 6,
    alignItems: 'center'
  },
  buttonText: {
    color: '#1062a4',
    fontWeight: '700',
    fontSize: 18,
    marginTop: 15,
    textAlign: 'center',
    alignSelf: 'center'
  },
  questionText: {
    alignSelf: 'center',
    flex: 1,
    resizeMode: 'contain'
  },
  question: {
    alignSelf: 'center',
    shadowColor: 'rgba(0,0,0, .4)',

    flexDirection: 'row',
    justifyContent: 'center',
    shadowOffset: {height: 1, width: 1},
    shadowOpacity: 1,
    shadowRadius: 1,
    backgroundColor: 'orange',
    height: 60,
    width: '100%',
    borderRadius: 10
  },
  coin: {
    textAlign: 'center',
    fontWeight: '800'
  },
  timer: {
    backgroundColor: '#023667',
    width: '100%',
    // height:'100%',
    zIndex: 100
  }
};
