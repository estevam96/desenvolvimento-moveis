import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import {Formik} from 'formik';
import HeroService from "@services/HeroServices";
import Hero from '@/models/Hero';
import { useNavigation } from '@react-navigation/native';
import { RegisterScreenNavigationProp } from '@/@types';

interface RegisterHero {
  name: string,
  urlImage: string,
  description: string
}

const Register: React.FC = () => {
  const navigate = useNavigation<RegisterScreenNavigationProp>();

  const initialValues = {
    name:'',
    urlImage:'',
    description:'',
  }

  function saveHero(values:RegisterHero) {
    const hero = new Hero(0,values.name, values.urlImage, values.description);
    HeroService.addHero(hero).then(() => {
      navigate.pop();
    }).catch((error) => {
      console.log(error);
      
    });
  }

  return (
    
      <Formik
        initialValues={initialValues}
        onSubmit={values => saveHero(values)}
      >
        {({handleChange, handleBlur, handleSubmit, values }) => (
          <View style={style.container}>
            <TextInput
              style={style.input}
              placeholder="Nome"
              placeholderTextColor="#7f8c8d"
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
              />
            <TextInput
              style={style.input}
              placeholder="URL da Imagem"
              placeholderTextColor="#7f8c8d"
              onChangeText={handleChange('urlImage')}
              onBlur={handleBlur('urlImage')}
              value={values.urlImage}
              />
            <TextInput
              style={style.textarea}
              placeholder="Descrição"
              placeholderTextColor="#7f8c8d"
              multiline={true}
              numberOfLines={4}
              onChangeText={handleChange('description')}
              onBlur={handleBlur('description')}
              value={values.description}
              />
              <TouchableOpacity style={style.button}  onPress={() => handleSubmit()}>
                <Text style={style.buttonText}>SALVA</Text>
              </TouchableOpacity>
          </View>
        )}
      </Formik>
   
  )
};

const style = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
    paddingHorizontal: 20,
  },
  input:{
    width: "100%",
    height: 50,
    margin: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor:"#bdc3c7",
    paddingHorizontal: 10
  },
  textarea:{
    width: "100%",
    margin: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor:"#bdc3c7",
    paddingHorizontal: 10
  },
  button:{
    width: "100%",
    height: 60,
    marginTop: 15,
    backgroundColor: "#3498db",
    borderRadius: 20,
    justifyContent:"center",
    alignItems:"center",
  },
  buttonText:{
    color: "#fff",
    fontSize: 20
  }
  
})
export default Register;
