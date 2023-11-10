import {StyleSheet} from 'react-native'
//Estilo para los encabezados de todas las ventanas
export const headerStyles = {
    headerStyle: {
        backgroundColor: '#2FA632'
    },
    headerTitleStyle: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    headerTintColor: 'white',
    headerTitleAlign: 'center',
};

//Estilo para la barra inferior de navegacion
export const tabBarOptions = {
    activeTintColor: "#FF0000",
    inactiveTintColor: "gray",
    
};
//Estilo para los botones de las ventanas
export const buttonStyles = StyleSheet.create({
    container :{
      flex: 1,
      marginTop: 16,
      justifyContent: 'center',
    },
    body: {
      justifyContent: 'center',
      alignItems: 'center',
  
    },
    contentInput: {
      justifyContent: 'center',
      width: '80%',
      height: 40,
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 100,
      paddingLeft: 15,
      paddingRight: 15,
      marginBottom: "10%",
    },
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'red',
      width: 200,
      height: 40,
      borderColor: 'black',
      marginHorizontal: 16,
      borderWidth: 1,
      borderRadius: 100,
      marginBottom: "40%",
      paddingVertical: 20,
    },
    textButton: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    }
  })