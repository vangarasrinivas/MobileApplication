import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Ionic from 'react-native-vector-icons/Ionicons';
import {useIsFocused} from '@react-navigation/native';
import Loader from '../components/Loader';

const BrandsList = ({navigation}: any) => {
  const [brandsData, setBrandsData]: any = useState([]);
  const [loader, setLoader] = useState(false);
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      fetchData();
    }
  }, [isFocused]);

  const fetchData = () => {
    setLoader(true);
    try {
      fetch('http://10.0.2.2:3005/getallbrands')
        .then(res => res.json())
        .then(data => {
          setBrandsData(data);
          setLoader(false);
        });
    } catch (err) {
      setLoader(false);
      console.log(err);
    }
  };
  const deleteData = (id: any) => {
    setLoader(true);
    try {
      fetch(`http://10.0.2.2:3005/deletebrand/${id}`, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(data => {
          setBrandsData(data);
          setLoader(false);
        });
    } catch (err) {
      setLoader(false);
      console.log(err);
    }
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{}}>
          <Text style={styles.textStyle}>Welcome to your Application</Text>
          <View>
            <View
              style={{
                alignItems: 'flex-end',
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: 'green',
                  width: '15%',
                  marginTop: 3,
                }}
                onPress={() => navigation.navigate('Add')}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 20,
                    padding: 3,
                    textAlign: 'center',
                  }}>
                  Add
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={{fontSize: 25, textAlign: 'center'}}>
                Brands List
              </Text>
            </View>
            {loader ? (
              <Loader />
            ) : (
              <View
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  // justifyContent: 'center',
                  flexDirection: 'row',
                  padding: 6,
                }}>
                {brandsData &&
                  brandsData.map((v: any, i: any) => {
                    return (
                      <View
                        key={i}
                        style={{
                          width: '47%',
                          borderColor: 'silver',
                          borderWidth: 1,
                          margin: 5,
                          padding: 3,
                        }}>
                        <View
                          style={{
                            flexDirection: 'column',
                            alignItems: 'center',
                            paddingVertical: 10,
                          }}>
                          <Image
                            source={require('../assets/images/addidas.png')}
                            style={{
                              height: 70,
                              width: 70,
                              // borderRadius: 40,
                              marginBottom: 2,
                            }}
                          />
                        </View>
                        <Text>Vendor Name : {v?.vendor_name}</Text>
                        <Text>Vendor Phone : {v?.vendor_phone}</Text>
                        <Text>Brand Name : {v?.brandName}</Text>
                        <Text>Quantity : {v?.quantity}</Text>
                        <View
                          style={{
                            // alignItems: 'flex-',
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            marginVertical: 3,
                          }}>
                          <TouchableOpacity
                            style={{
                              backgroundColor: 'blue',
                              // width: '15%',
                              marginRight: 5,
                            }}
                            onPress={() =>
                              navigation.navigate('Add', {
                                id: v?._id,
                              })
                            }>
                            <Text
                              style={{
                                color: 'white',
                                fontSize: 15,
                                padding: 3,
                                textAlign: 'center',
                              }}>
                              View
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            style={{
                              backgroundColor: 'red',
                              // width: '15%',
                            }}
                            onPress={() => deleteData(v?._id)}>
                            <Text
                              style={{
                                color: 'white',
                                fontSize: 15,
                                padding: 3,
                                textAlign: 'center',
                              }}>
                              Delete
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    );
                  })}
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BrandsList;

export const styles = StyleSheet.create({
  // viewStyle: {
  //   height: '100%',
  //   backgroundColor: '#54CBFF',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  textStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 5,
    textAlign: 'center',
    backgroundColor: 'lightblue',
    paddingVertical: 8,
  },
});
