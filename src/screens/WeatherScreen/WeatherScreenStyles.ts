import { StyleSheet } from 'react-native';

const WeaterScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  temp: {
    fontSize: 50,
    color: 'white',
    marginBottom: 25,
  },
  lower: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 40,
    color: 'white',
    marginBottom: 10,
    fontWeight: '300',
  },
  subtitle: {
    fontSize: 25,
    color: 'white',
    marginBottom: 25,
  },
});

export default WeaterScreenStyles;
