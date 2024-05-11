import 'react-native-reanimated';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View } from 'react-native';
import { Redirect } from 'expo-router';

export default function HomeScreen() {
    return <Redirect href={'/(home)'} />
}
