import { View, Text, TextInput } from "react-native";
import React from "react";
import ThemedText from "../ThemedText/ThemedText";
import { colors } from "../../constants/Colors";
import Icon from "../Icons/Icon";

const Search = () => {
  return (
    <View style={{ padding: 20 }}>
      {/* <ThemedText text={'Looking for a plant?'} size={25}  /> */}
      <View style={{backgroundColor:colors.white,padding:15,borderRadius:100,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <TextInput placeholder="Find a plant..." style={{fontFamily:'regular',fontSize:18,width:'90%'}} cursorColor={'black'}/>
        <Icon name={'Search'} size={25} stroke={2}/>
      </View>
    </View>
  );
};

export default Search;
