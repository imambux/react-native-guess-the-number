import { StyleSheet, View } from 'react-native';
import Colors from '../../constants/colors';

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 36,
    marginHorizontal: 24,
    padding: 20,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 10,
    shadowColor: 'pink',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
