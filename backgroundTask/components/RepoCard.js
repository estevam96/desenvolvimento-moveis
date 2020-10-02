import React from 'react';
import { Card } from 'react-native-elements';
import { Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

const selectLanguage = (language) => (
  {
    "JavaScript": { icon: "language-javascript", color: "#ffde6c", backgroundColor: "#fffbec" },
    "Go": { icon: "language-go", color: "#567df4", backgroundColor: "#eef7fe" },
    "Java": { icon: "language-java", color: "#f45656", backgroundColor: "#feeeee" },
    "PHP": { icon: "language-php", color: "#34dede", backgroundColor: "#f0ffff" },
  }[language] || { icon: "code-braces", color: "#95a5a6", backgroundColor: "#e0e4e5" }
)


const CardRepo = ({ item }) => {
  const colors = selectLanguage(item.language)

  return (
    <Card containerStyle={[style.conatainer, { backgroundColor: colors.backgroundColor }]}>
      <MaterialCommunityIcons name={colors.icon} size={40} color={colors.color} />
      <Text
        style={[style.repoName, { color: colors.color }]}
        numberOfLines={1}
        ellipsizeMode="tail">
        {item.name}
      </Text>
    </Card>
  )

}

const style = StyleSheet.create({
  conatainer: {
    width: 148,
    height: 107,
    borderRadius: 20,
    backgroundColor: "#feeeee"
  },
  repoName: {
    width: "100%",
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 9,
  }
})
export default CardRepo;