export default {
  container: {
    height: 50,
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    flexDirection: 'column'
  },
  toolbar: {
    height: 80,
    width: '100%',
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  channelTitle: {
    color: 'white',
    paddingBottom: 14,
    fontWeight: 'bold'
  },
  messagesContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  messages: {
    flex: 1,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  message: {
    fontSize: 16,
    paddingBottom: 8,
    paddingLeft: 16
  },
  messageBox: {
    height: 60,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingTop: 10,
    paddingLeft: 8,
    paddingRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageBoxContainer: {
    width: '100%',
    flexDirection: 'row',
    height: 120,
    alignItems: 'flex-start',
    justifyContent: 'center',
  }
};
