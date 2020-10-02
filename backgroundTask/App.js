import React, { useEffect, useState } from 'react';
import * as BackgroundFetch from 'expo-background-fetch';
import * as TaskManager from 'expo-task-manager';
import { StatusBar } from 'expo-status-bar';
import { Avatar } from 'react-native-elements';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Card from './components/Card';
import CardRepo from './components/RepoCard';
import axios from 'axios';


const taskName = "myTask";
let setStateAux = () => { };

BackgroundFetch.setMinimumIntervalAsync(10);

export default function App() {
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);

  setStateAux = setRepos;

  const registerTask = async () => {
    await BackgroundFetch.registerTaskAsync(taskName, { minimumInterval: 10 });

    const status = await BackgroundFetch.getStatusAsync();
    switch (status) {
      case BackgroundFetch.Status.Restricted:
        console.log('Task Registrada');
        break;
      case BackgroundFetch.Status.Denied:
        console.log('Task em execução');
        break;

      case BackgroundFetch.Status.Available:
        console.log('Disponivel');
        break;

      default: {
        console.log('Execução em segundo plano permitida');

        let tasks = await TaskManager.getRegisteredTasksAsync();
        if (tasks.find(f => f.taskName === taskName) == null) {
          console.log('registrando tarefa');
          await BackgroundFetch.registerTaskAsync(taskName, { minimumInterval: 10 });

          tasks = await TaskManager.getRegisteredTasksAsync();
          console.log('tarefa', tasks);
        } else {
          console.log(`Tarefa ${taskName} já registrada, pulando`);
        }

        await BackgroundFetch.setMinimumIntervalAsync(10);

        break;
      }
    }
  }

  useEffect(() => {
    registerTask();
  }, [user])

  useEffect(() => {
    axios.get('https://api.github.com/users/estevam96')
      .then(({ data }) => {
        setUser(data)
      })
  }, [])

  const renderItem = ({ item }) => {
    return (
      <CardRepo item={item} />
    )
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {!!user && (
        <>
          <Card>
            <Avatar rounded size="large" source={{ uri: user.avatar_url }} />
            <Text style={styles.textUserName}>{user.name}</Text>
            <Text style={styles.textUserLogin}>{user.login}</Text>
            <Text style={styles.textUserBio}>{user.bio}</Text>
          </Card>
          <View style={styles.reposTitlecontainer}>
            <Text style={styles.textTitleMyRepos}>My Repositories</Text>
          </View>
          {repos.length > 0 ? (
            <FlatList
              contentContainerStyle
              horizontal={false}
              data={repos}
              keyExtractor={item => item.id.toString()}
              renderItem={renderItem}
              numColumns={2}
            />
          ) : (
              <View style={styles.emptyReposContainer}>
                <Text style={styles.textEmpytRepos}>your repositores</Text>
              </View>
            )}
        </>
      )}
    </View>
  );
}

TaskManager.defineTask(taskName, async () => {
  try {
    let user;
    axios.get('https://api.github.com/users/estevam96/repos')
      .then(res => {
        user = res.data;
        setStateAux(res.data)
        console.log("repos obtidos");
      })
    console.log("Em Segundo plano")
    return user ? BackgroundFetch.Result.NewData : BackgroundFetch.Result.NoData
  } catch (error) {
    console.log(error);
    return BackgroundFetch.Result.Failed;
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textUserName: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  textUserLogin: {
    color: "#fff",
    fontSize: 13,
    marginBottom: 10,
  },
  textUserBio: {
    color: "#fff",
    fontSize: 13,
    marginBottom: 10,
  },
  reposTitlecontainer: {
    paddingHorizontal: 20,
    justifyContent: "flex-start",
    marginTop: 20
  },
  textTitleMyRepos: {
    fontSize: 15,
    color: "#22215b",
    fontWeight: "bold",
  },
  emptyReposContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textEmpytRepos: {
    fontSize: 20,
    fontWeight: "normal",
    color: "#a0aeaf"
  }
});
