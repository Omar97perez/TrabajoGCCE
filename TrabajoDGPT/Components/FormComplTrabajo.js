import React from 'react';
import {Icon} from 'react-native-elements'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class FormularioCompletarTrabajo extends React.Component {
    static navigationOptions = {
      title: 'Holaaaa',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
          <View style={styles.body}>
            <Text style={styles.Titulo}>Completar Trabajo (Alberto)</Text>
            <Button
            title="Inicio"
            onPress={() => navigate('Inicio')}
          />
          </View>
      );
    }
  }
  
  export default FormularioCompletarTrabajo;  