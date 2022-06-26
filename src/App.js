import React from "react";
import {
    View, 
    Text, 
    Image, 
    StyleSheet, 
    SafeAreaView, 
    StatusBar, 
    Pressable,
    Linking,
 } from 'react-native';

const colorGitHub = "#010409";
const colorFontGitHub = '#c9D1D9';
const colorDarkFontGitHub = '#4F565E';

const imageProfileGitHub = 'https://avatars.githubusercontent.com/u/106713684?v=4';

const urlToMyGitHub = 'https://github.com/MMagnun'; 

const App = () => {
    const handlePressGoToGitHub = async () => {
        console.log('Verificando link')
        const res = await Linking.canOpenURL(urlToMyGitHub);
        if (res){
            console.log('Link aprovado');
            console.log('Abrindo link....');
           await Linking.openURL(urlToMyGitHub);
        }
    };
    
    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGitHub} barStyle='light-content'/>         
            <View style={style.content}>
                    <Image accessibilityLabel="Marcelo no meio do arrozal" style={style.avatar} source={{uri: imageProfileGitHub }}/>

                    <Text accessibilityLabel="Nome Marcelo Magnun" style={[style.defaultText, style.name/*{color: 'green'} */]}>Marcelo Magnun</Text>
                    <Text accessibilityLabel="Nome Marcelo Magnun" style={[style.defaultText, style.nickname]}>MMagnun</Text>
                    <Text accessibilityLabel="Nome Marcelo Magnun" style={[style.defaultText, style.description]}></Text>
                
                <Pressable onPress={handlePressGoToGitHub}>
                    <View style={style.button}>
                        <Text style={[style.defaultText, style.textButton]}>Open on GitHub</Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default App; 

const style = StyleSheet.create({
    container: {
        //column
        backgroundColor: colorGitHub, 
        flex: 1, // Expandir a para a tela inteira
        justifyContent: 'center',
        alignItems: 'center',
       // flexDirection: 'row', 
    },

    content: {
        alignItems: 'center',
        padding: 20,
    },
     
    avatar: {
        height: 200, 
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2, 
    }, 
    defaultText: {
        color: colorFontGitHub,
    }, 
    name: {
        marginTop: 20, 
        fontSize: 24, 
        fontWeight: 'bold',
      }, 
    nickname: {
        fontSize: 18,
        color: colorDarkFontGitHub
    },
    description: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    button: {
        marginTop: 20, 
        backgroundColor: colorDarkFontGitHub, 
        borderRadius: 10, 
        padding: 20,
    },
    
    textButton: {
        fontSize: 14,
        fontWeight: 'bold',
        color: colorFontGitHub,
    },
    
});
