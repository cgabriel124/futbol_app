import { StyleSheet } from 'react-native'
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
    activeTintColor: "#028037",
    inactiveTintColor: "gray",

};
//Estilo para los botones de las ventanas
export const buttonStyles = StyleSheet.create({
    container: {
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
        marginBottom: "15%",
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
        marginBottom: "20%",
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