import React, { Component, useEffect, useState } from 'react';
import { SafeAreaView, View, Text, ScrollView, Image } from 'react-native';
import HTML from 'react-native-render-html';

export default function App() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://blog.dankicode.com/wp-json/wp/v2/posts`)
      .then((response) => response.json())
      .then(responseJson => {
        setPosts(responseJson)
      })
      .catch((error) => console.log(error))
  }, [setPosts])

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          {posts.map((item, index) => (

            <View key={item.id}>
              <Text style={{ fontWeight: 'bold', fontSize: 24 }}>{item.title.rendered}</Text>
              <HTML html={item.content.rendered}>

              </HTML>
            </View>

          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
