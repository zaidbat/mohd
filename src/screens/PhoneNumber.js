import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import CodeInput from "react-native-code-input";

import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Modal,
} from "react-native";
import GlobalStyles from "../component/GlobalStyle";
import ModalStyle from "../component/ModalStyle";


export default function RegisterUser() {
  const [name, setName] = useState("");
  const [modalVisable, setModalVisable] = useState(false);
  const spaceHandler = (text) => {
    setName(text.replace(/\s/g, ""));
  };

  const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );

  return (
    <View style={styles.content}>
      <View style={styles.header}></View>
      <View style={styles.locationImageContainer}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            paddingHorizontal: 15,
            paddingVertical: 25,
            bottom: -40,
            backgroundColor: "#27323F",
            borderRadius: 50,
          }}
        >
          <Image
            style={styles.locationImage}
            source={require("../../assets/location.png")}
          />
        </View>
      </View>
      <DismissKeyboard>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.body}
          enabled = {!modalVisable}

        >
          <View
            style={{
              flex: 1,

              alignItems: "center",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            <View style={styles.heading}>
              <Text style={GlobalStyles.headingText}>Book a Truck!</Text>
            </View>
            <View style={{ height: 100, width: "100%" }}>
              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View style={{ flexDirection: "row", marginTop: 20 }}>
                  <View style={styles.countryFlagContainer}>
                    <Image
                      style={styles.countryFlag}
                      source={{
                        uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Flag_of_Jordan.svg/1200px-Flag_of_Jordan.svg.png",
                      }}
                    />
                  </View>
                  <View style={{ marginRight: 8 }}>
                    <Text style={styles.countryCode}>+962 7</Text>
                  </View>
                </View>
                <View>
                  <CodeInput
                    borderType={"underline"}
                    space={4}
                    size={15}
                    codeInputStyle={{
                      fontWeight: "500",
                      fontSize: 25,
                      height: 30,
                    }}
                    inputPosition="left"
                    activeColor="rgb(225, 225, 225)"
                    inactiveColor="rgba(225, 225, 225, 1.3)"
                    codeLength={8}
                    autoFocus={!true}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={GlobalStyles.buttonContainer}>
            <View style={GlobalStyles.button}>
              <TouchableOpacity
                onPress={() => {
                  setModalVisable(true);
                }}
              >
                <Text style={GlobalStyles.buttonText}>Continue</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </DismissKeyboard>
      <Modal visible={modalVisable} transparent={true} 
      animationType="slide"
      >
         
        <View
          style={{
            width: "100%",
            height: "100%",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#000000CC",
          }}
        >
            <KeyboardAvoidingView style={{width:"100%",justifyContent:"center", flexDirection:"row"}}>
          <View
            style={{
              width: "80%",
              height: 370,
              backgroundColor: "#7040F6",
              borderRadius: 25,
              position: "relative",
            }}
          >
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                position: "absolute",
                top: -20,
                right: -20,
                zIndex: 10,
                width: 70,
                height: 70,
                backgroundColor: "#7040F6",
                borderRadius: 50,
                borderWidth: 5,
                borderColor: "#000000BB",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                setModalVisable(false);
              }}
            >
              <Text style={{ fontSize: 25, color: "#FFF" }}>X</Text>
            </TouchableOpacity>
            <View style={ModalStyle.modalInnerContainer}>
                <View style={ModalStyle.modalCenter}>
                    <Text style={ModalStyle.modalTitle}>Verivication Code!</Text>
                </View>
                <View style={ModalStyle.modalCenter}>
                     <Text style={ModalStyle.modalDescription}>Please enter the verivication code sent to you via SMS!</Text>
                </View>
                <View style={[ModalStyle.modalCenter , {marginTop: 20}]}>
                    <View style={{marginLeft: 20}}>
                    <CodeInput
                        borderType={"underline"}
                        space={25}
                        size={20}
                        codeInputStyle={{
                        fontWeight: "500",
                        fontSize: 25,
                        height: 30,
                        }}
                        inputPosition="left"
                        activeColor="#fff"
                        inactiveColor="rgba(256, 256, 256, 1.3)"
                        codeLength={4}
                        autoFocus={!true}
                    />
                    </View>
                </View>
                <View style={[ModalStyle.modalCenter, {marginTop: 70 , paddingHorizontal: 20}]}>
                    <View style={ModalStyle.modalButtonContainer}>
                        <TouchableOpacity
                            onPress={() => {
                            setModalVisable(false);
                            }}
                        >
                            <View style={ModalStyle.modalButton}>
                                <Text style={ModalStyle.modalButtonText}>Submit Code</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[ModalStyle.modalCenter, {marginTop: 20 , paddingHorizontal: 30}]}>
                    <TouchableOpacity>
                        <Text style={ModalStyle.modalDefualtButtonText}>Resend Code</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
          </View>
          </KeyboardAvoidingView>
        </View>
        
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  content: { flex: 1, backgroundColor: "#27323F" },
  header: {
    flex: 1,

    backgroundColor: "#27323F",
  },
  body: {
    flex: 6,
    alignItems: "center",
    justifyContent: "space-around",
    zIndex: 1,
    backgroundColor: "#152023",
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    paddingTop: 30,
  },
  locationImage: {
    width: 55,
    height: 80,
  },
  locationImageContainer: {
    zIndex: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  fieldBox: {
    width: "50%",
    height: 50,
  },

  headingText: {
    color: "white",
    fontSize: 35,
  },
  countryFlagContainer: {
    width: 40,
    height: 25,

    marginRight: 10,
  },
  countryFlag: {
    width: "100%",
    height: "100%",
    borderRadius: 4,
  },
  countryCode: {
    fontWeight: "500",
    fontSize: 25,
    color: "#FFF",
  },

  // Modal

  
});
