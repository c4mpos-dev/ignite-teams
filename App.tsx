import { StatusBar } from 'react-native';
import { Groups } from '@screens/Groups';
import { ThemeProvider } from 'styled-components';
import theme from 'src/theme/'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Groups/>
    </ThemeProvider>
  );
}