export default {
  container: {
    flex: 1,
    backgroundColor: '#186da5',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  questionWrapper: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  optionWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: 20
  },
  button: {
    backgroundColor: '#fbf0e5',
    borderRadius: 3,
    height: 50,
    width: '50%',
    marginTop: 80,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 10},
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
  }
};
