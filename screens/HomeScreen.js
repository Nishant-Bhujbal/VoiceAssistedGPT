import { useState } from 'react';
import { View, Text, Platform , SafeAreaView, Image, ScrollView} from 'react-native'

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Features from '../components/Features';
import { dummyMessages } from '../constans/dummydata';


const HomeScreen = () => {
    const [messages,setMessages] = useState(dummyMessages);
  return (
    <View className="flex-1 bg-white">
        <SafeAreaView className="flex-1 flex mx-5" style={{marginTop : Platform.OS == 'android' ? 40 : 0}}>
            <View className="flex-row justify-center">
                <Image source={require('../assets/images/bot.png')} style={{
                    height : hp(15),
                    width : hp(15),
                }}/>
            </View>
            {
                messages.length > 0 ? (
                    <View className="space-y-2 flex-1">
                        <Text style={{fontSize : wp(5)}} className="text-gray-700 font-semibold ml-1">
                            Assistant
                        </Text>
                        <View style={{height : hp(60)}} className="bg-neutral-300 rounded-3xl p-4">
                            <ScrollView bounces={false} className="space-y-4" showsVerticalScrollIndicator={false}>
                                {
                                    messages.map((message,index)=>{
                                        return (
                                            <View>
                                                <Text>{message.content}</Text>
                                            </View>
                                        )
                                    })
                                }
                            </ScrollView>
                        </View>
                    </View>
                ) : (
                    <Features />
                )
            }
        </SafeAreaView>
    </View>
  )
}

export default HomeScreen