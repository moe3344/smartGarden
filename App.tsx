import React, { useEffect, useState } from "react";
import { Button, View, StyleSheet, SafeAreaView, Text, TouchableOpacity } from "react-native";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react-native";
import { generateClient } from 'aws-amplify/api';
import { getCurrentUser } from 'aws-amplify/auth';

import * as mutations from "./graphql/mutations.ts";
import * as subs from "./graphql/subscriptions.ts";

const App = () => {
  const [userID, setUserID] = useState<string | null>(null);
  const [client, setClient] = useState<any>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 

  const initializeClientAndUser = async () => {
    try {
      const awsClient = generateClient();
      setClient(awsClient);

      const { userId } = await getCurrentUser();
      setUserID(userId);
    } catch (error) {
      console.error('Error initializing client or fetching user:', error);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      initializeClientAndUser();
    }
  }, [isLoggedIn]);

  // Set up the subscription after login and when client is initialized
  useEffect(() => {
    if (isLoggedIn && client) {
      const createSub = client
        .graphql({ query: subs.onCreatePlantModel })
        .subscribe({
          //@ts-ignore
          next: ({ data }) => {
            if (data.onCreatePlantModel) {
              console.log("New plant model added:", data.onCreatePlantModel);
            }
          },
          error: (error:any) => console.warn(error),
        });
  
      // Log when the subscription is successfully established
      console.log("Subscription established.");
  
      return () => {
        createSub.unsubscribe();
        console.log("Subscription unsubscribed.");
      };
    }
  }, [isLoggedIn, client]);
  

  const SaveChatMessage = async () => {
    try {
      if (!client || !userID) {
        console.error("Client or userID is not set yet");
        return;
      }

      const input = {
      
        plantName: "ato",
        description: "testing the stuff",
        pH: 9.5,
        temperature: 23.5,
        userId: userID, // Use the current logged-in user ID
      };
console.log("userrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",userID);
      const result = await client.graphql({
        query: mutations.createPlantModel,
        variables: { input },
      });
      console.log("Message saved:", result);

    } catch (error) {
      console.error("Error saving message:", error);
    }
  };

  const SignOutButton = () => {
    const { signOut } = useAuthenticator();
  
    return (
      
      <TouchableOpacity style={styles.button} onPress={signOut}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
   
    );
  };

  const SaveButton = () => {
    return (
      <View>
        <Button title="Save Message" onPress={SaveChatMessage} />
      </View>
    );
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const Welcome = ({ onLogin }: any) => {
    return (
      <View>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Welcome to Smart Garden</Text>
          <TouchableOpacity style={styles.button} onPress={onLogin}>
            <Text style={styles.buttonText}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {!isLoggedIn && (
        <Welcome onLogin={handleLogin} />
      )}

      {isLoggedIn && (
        <Authenticator.Provider>
          <Authenticator>
            <SafeAreaView>
              <SignOutButton />
              <SaveButton />
            </SafeAreaView>
          </Authenticator>
        </Authenticator.Provider>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: "#4CAF50",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  headerText: {
    fontSize: 18,
    color: 'white',
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default App;
