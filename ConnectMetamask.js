import {
    ActivityIndicator,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import React, { useEffect, useState, useMemo } from "react";
import {
    WalletConnectModal,
    useWalletConnectModal,
} from "@walletconnect/modal-react-native";


const projectId = "801b302fd99f8b54bc7db7fa08c2d3c3";

const providerMetadata = {
    name: 'React Native V2 dApp',
    description: 'RN dApp by WalletConnect',
    url: 'https://walletconnect.com/',
    icons: ['https://avatars.githubusercontent.com/u/37784886'],
    redirect: {
        native: 'w3msample://',
    },
};

const sessionParams = {
    namespaces: {
        eip155: {
            methods: [
                'eth_sendTransaction',
                'eth_signTransaction',
                'eth_sign',
                'personal_sign',
                'eth_signTypedData',
            ],
            chains: ['eip155:1'],
            events: ['chainChanged', 'accountsChanged'],
            rpcMap: {},
        },
    },
};

const ConnectMetamask = () => {
    const { close, open, isConnected, provider, address, signer } = useWalletConnectModal()

    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <TouchableOpacity
                onPress={() => {
                    console.log("aaaaa");
                    open()
                        .then(() => {
                            console.log("Opennnnnnnn");
                        })
                        .catch((error) => {
                            console.log("errrorrrrrrrrrr");
                            console.log(error);
                        });
                }}
                style={styles.button}
            >
                <Text>Connect</Text>
            </TouchableOpacity>
            <View style={{ alignItems: 'center' }}>
                <Text> Address : {address}</Text>
                <TouchableOpacity style={styles.buttonReload} onPress={() => {
                    if (isConnected) {
                        return provider?.disconnect();
                    }
                }}>
                    <Text>disconnect</Text>
                </TouchableOpacity>
            </View>
            <WalletConnectModal
                projectId={projectId}
                providerMetadata={providerMetadata}
                sessionParams={sessionParams}
            />
        </View>
    );
};

export default ConnectMetamask;

const styles = StyleSheet.create({

    button: {
        backgroundColor: "#0074f9",
        padding: 15,
        marginBottom: 20,
        alignItems: "center",
        borderRadius: 20,
        marginHorizontal: 40
    },
    text: {
        color: "#333333",
    },
    buttonReload: {
        backgroundColor: "#de0261",
        padding: 10,
        marginBottom: 20,
        alignItems: "center",
        borderRadius: 20,
        width: 200,
        marginTop: 20
    },
});