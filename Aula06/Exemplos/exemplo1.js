import { Text, SafeAreaView } from 'react-native';
import TelaA from '../src/TelaA';
import TelaB from '../src/TelaB';
import TelaC from '../src/TelaC';

export default (comp) => (
    <SafeAreaView style={{ flex: 1 }}>
        <TelaA />
        <TelaB />
        <TelaC />
    </SafeAreaView>
);
