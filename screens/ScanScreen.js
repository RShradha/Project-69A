import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Alert,
  TouchableOpacity
} from "react-native";
import * as Permissions from "expo-permissions";
import { BarCodeScanner } from "expo-barcode-scanner";

getCameraPermissions = async id => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);

    this.setState({
      hasCameraPermissions: status === "granted",
      buttonState: id,
      scanned: false
    });
  };

  handleBarCodeScanned = async ({ type, data }) => {
    const { buttonState } = this.state;

    if (buttonState === "BookId") {
      this.setState({
        scanned: true,
        scannedBookId: data,
        buttonState: "normal"
      });
    } else if (buttonState === "StudentId") {
      this.setState({
        scanned: true,
        scannedStudentId: data,
        buttonState: "normal"
      });
    }
  };

export default class ScanScreen extends React.Component {
    constructor(){
        super();
        this.state={
            hasCameraPermissions : null,
            scanned : false,
            scannedData : '',
            buttonState : 'normal'

        }
      }
      render() {
        return(
          <TouchableOpacity
        onPress={this.getCameraPermissions}
        style={styles.scanButton}
        title= 'Bar Code Scanner'
        >
        <Text
        style={styels.buttonText}> Scan QR code</Text>
        </TouchableOpacity>
        )
      }
        
        


    }

