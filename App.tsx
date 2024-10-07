import { StatusBar } from 'react-native';
import { Groups } from '@screens/Groups';

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Groups/>
    </>
  );
}