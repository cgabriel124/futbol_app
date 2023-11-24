import { Platform, StyleSheet } from 'react-native'
//Estilo para los encabezados de todas las ventanas
export const headerStyles = {
    headerStyle: {
        backgroundColor: '#028037'
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
    "tabBarActiveTintColor": "#028037",
    "tabBarInactiveTintColor": "gray",
    "tabBarStyle": [
      {
        "display": "flex"
      },
      null
    ]
  }
//Estilo para los botones de las ventanas
export const buttonStyles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      //marginVertical: 20, // Ajusta según sea necesario
     // paddingHorizontal: 16, // Ajusta según sea necesario

    },
    body: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Platform.OS === 'web' ? '0%' : '10%',
    },
    contentInput: {
        justifyContent: 'center',
        width: 300,
        height: 50,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 100,
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: "10%",

        //sombras
        backgroundColor: "#e0e0e0",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        
        elevation: 8,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#028037',
        width: 200,
        height: 50,
        borderColor: '#000',
        marginHorizontal: 16,
        //borderWidth: 1,
        borderRadius: 100,
        marginTop: Platform.OS === 'web' ? '7%' : '20%',
        //sombras
        shadowColor: "#028037",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        
        elevation: 8,

        //end sombras
    },
    textButton: {
        
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    }


})

export const tableStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 30,
      },
      tableHeader: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
        backgroundColor: 'green',
        padding: 8,
        borderWidth: 1,
        borderColor: 'black',
        borderColor: 'black',
      },
      headerText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'white',
        
      },
      RowStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', // Alinea verticalmente los elementos en la fila
        marginBottom: 8,
        borderWidth: 1,
        borderColor: 'black',
      },
      playerColumn: {
        flex: 1,
        padding: 8,

      },
      teamColumn: {
        marginLeft: 16,
        padding: 8,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
      },
      text: {
        margin: 6,
      },
      teamName: { 
        fontSize: 18, 
        fontWeight: 'bold', 
        marginBottom: 10,
        textAlign: 'center',
      },
      teamContainer: { 
        marginBottom: 20 },

})