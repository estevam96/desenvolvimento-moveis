import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Formik, FormikProps } from 'formik';
import { FontAwesome } from '@expo/vector-icons'; 
import HeroService from "@services/HeroServices";
import Hero from '@/models/Hero';
import { ShowScreenNavigationProp, ShowScreenRouterProp } from '@/@types';


interface Props {
  route: ShowScreenRouterProp,
  navigation: ShowScreenNavigationProp,
}

interface FormikValues {
  name: string
  urlImage: string
  description: string
}

interface RegisterHero {
  name: string,
  urlImage: string,
  description: string
}

const Show: React.FC<Props> = ({ route, navigation }) => {
  const [hero, setHero] = React.useState<Hero>({});
  const { heroId } = route.params;

  function getHero() {
    HeroService.findById(heroId).then(({ _array }) => {   
      setHero(_array[0]);
    }) 
  };

  function updateHero(values: RegisterHero) {
    const hero = new Hero(heroId, values.name, values.urlImage, values.description);
    HeroService.updateHero(hero).then(() => {
      navigation.pop();
    }).catch(error => {
      console.log(error)
    });
  };

  function deleteHero(heroId: number) {
    HeroService.deleteHero(heroId).then(() => {
      navigation.pop();
    }).catch(error => {
      console.log(error)
    });
  }
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: hero.name,
      headerRight: () => (
        <TouchableOpacity
          style={style.buttonPlus}
          onPress={() => deleteHero(heroId)}
        >
          <FontAwesome name="trash-o" size={30} color="black" />
        </TouchableOpacity>
      ),
    })
  });
  React.useEffect(() => {
    getHero();
  },[]);

  return (
    <Formik
      initialValues={{
        name: hero.name,
        urlImage: hero.urlImage,
        description: hero.description
      }}
      onSubmit={values => updateHero(values)}
      enableReinitialize
    >
      {({ handleChange, handleBlur, handleSubmit, values }: FormikProps<FormikValues>) => (
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

  );
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  input: {
    width: "100%",
    height: 50,
    margin: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#bdc3c7",
    paddingHorizontal: 10
  },
  textarea: {
    width: "100%",
    margin: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#bdc3c7",
    paddingHorizontal: 10
  },
  button: {
    width: "100%",
    height: 60,
    marginTop: 15,
    backgroundColor: "#3498db",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20
  },
  buttonPlus: {
    paddingHorizontal: 20,
  }

})
export default Show;