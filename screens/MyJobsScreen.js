import { StyleSheet, Text, View } from 'react-native';

export default function MyJobsScreen() {
  return (
    <View style={styles.container}>
      <Text> My Jobs Screen </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});