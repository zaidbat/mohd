import {
    Text,
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    Dimensions,
  } from "react-native";
  
  const GlobalStyles = StyleSheet.create({
    
    
    buttonContainer: {
        width: 250,
        flex: 1,
        justifyContent: "center",
      },
    button: {
        backgroundColor: "transparent",
        padding: 10,
        borderColor: "#FFF",
        borderWidth: 0.75,
        height: 55,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        width: "100%",
      },
      buttonText: {
        fontSize: 20,
        color: "#FFF",
      },
      headingText: {
        color: "white",
        fontSize: 35,
      },
      

    input: {
        fontSize:20,
        width:"100%",
        color: '#FFF',
      borderBottomWidth:1,
      borderColor: '#FFF',
      paddingVertical:10,
      marginBottom: 40
    },
    titleBox: {
      color: "#fff",
      fontSize: 30,
      marginTop: 80,
    },
  });
  
  export default GlobalStyles;
  