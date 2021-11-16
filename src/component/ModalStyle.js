import {
    Text,
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    Dimensions,
  } from "react-native";
  
  const ModalStyle = StyleSheet.create({
    
    
  modalInnerContainer: {
    borderWidth: 1,
  flex: 1,
  paddingHorizontal: 40,
  paddingTop: 50,
},
modalCenter: {
   width: '100%',
   flexDirection: 'row',
   justifyContent: 'center',
   textAlign: 'center'
},

modalTitle: {
  color: "white",
  fontSize: 30,
  marginVertical: 5,
  fontWeight: '300'
},
modalDescription: {
  color: "white",
  fontSize: 19,
  textAlign: 'center',
  marginVertical: 5,
  fontWeight: '300'
},
modalButtonContainer: {
      width: 210,
      flex: 1,
      justifyContent: "center",
  },
  modalButton: {
      backgroundColor: "transparent",
      padding: 10,
      borderColor: "#FFF",
      borderWidth: 0.75,
      height: 44,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 15,
      width: "100%",
  },
  modalButtonText: {
      fontSize: 20,
      color: "#FFF",
  },
  modalDefualtButtonText: {
      fontSize: 14
  }
});
  
export default ModalStyle;
