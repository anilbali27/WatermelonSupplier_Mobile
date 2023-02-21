/** @format */

import React, { useState, useRef, useEffect } from "react";
import {
  Alert,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Pressable,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Appbar, Searchbar } from "react-native-paper";

import { FONTS } from "../../constant/Font";
import GlobalStyles from "../../../assets/css/styles";
import MenuIcon from "../../../assets/images/icons/MenuIcon";
import AllOrdersCard from "./AllOrdersCard";
import PendingAcceptanceCard from "./PendingAcceptanceCard";
import Bell from "../../../assets/images/icons/Bell";
import { endPoint } from "../Services/API/ApiConstants";
import api from "../Services/API/CallingApi";
import SettingIcon from "../../../assets/images/icons/Setting";
import SearchIcon from "../../../assets/images/icons/Search";

const MyorderScreen = ({ navigation }) => {
  const [allOrders, setAllOrders] = useState(true);
  const [pendingAcceptance, setPendingAcceptance] = useState(false);
  const [list, setList] = useState([]);

  const [filterdData, setfilterData] = useState([]);
  const [masterData, setmasterData] = useState([]);
  const [search, setSearch] = useState("");
  const [myList, setMyList] = useState();

  const Loader = () => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size='large' />
    </View>
  );

  // useEffect(() => {
  //   handleSubmit();
  // }, []);

  useEffect(() => {
    handleSubmit();
  }, []);

  const handleSubmit = async (data) => {
    let token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvc3RhZ2luZ2FwaS53YXRlcm1lbG9uLm1hcmtldFwvaW5kZXgucGhwXC9hcGlcL3YxXC9sb2dpbiIsImlhdCI6MTY3NjEwMzQxMiwiZXhwIjoxNzA3NjM5NDEyLCJuYmYiOjE2NzYxMDM0MTIsImp0aSI6IkpDQW9mT3Job09EdjdYYmciLCJzdWIiOiI2MWE0ODY5YTM5NTkwZTJlZmM0NjM0MjUiLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.CG4SnXNK37yvz7JA2wr57VGwDfLjYLBfSyL0g9lYM8E";

    const result = await api.CreateMasterData(endPoint.Order_List, token);
    // const List = await result;
    setMyList(result);
    setList(result.data?.orders);
    setfilterData(result.data?.orders);
    setmasterData(result.data?.orders);

    // console.log(
    //   result.data?.orders?.supplier_info?.supplier_name,
    //   "1111111111111111111111111111111"
    // );
  };

  const title = list?.supplier_info?.supplier_name;

  console.log(list.data, "66666");

  const onPressofOrders = () => {
    setPendingAcceptance(false);
    setAllOrders(true);
  };

  const onPressofAcceptance = () => {
    setAllOrders(false);
    setPendingAcceptance(true);
  };

  //search function
  const searchFilterFunction = (text) => {
    if (text) {
      const newData = masterData.filter((item) => {
        const itemData = item.supplier_info?.supplier_name
          ? item.supplier_info?.supplier_name.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setfilterData(newData);
      setSearch(text);
    } else {
      setfilterData(masterData);
      setSearch(text);
    }
  };

  //TO Give padding between the flatlist
  const ItemSepartorView = () => {
    return <View style={{ height: 0, width: "100%" }} />;
  };

  return (
    <View style={GlobalStyles.orderContainer}>
      <View style={GlobalStyles.headerContainer}>
        <View style={GlobalStyles.headerAligment}>
          <View style={[GlobalStyles.headerDirection]}>
            <View style={GlobalStyles.changeFlexDirection}>
              <View style={{ justifyContent: "center" }}>
                <MenuIcon />
              </View>
              <Text style={GlobalStyles.menuText}>My Orders</Text>
            </View>
            <View style={{ alignContent: "flex-end" }}>
              <Bell />
            </View>
          </View>
        </View>
        <View style={GlobalStyles.orderTabDirection}>
          <Pressable onPress={() => onPressofOrders()}>
            {allOrders ? (
              <View style={GlobalStyles.allOrderView}>
                <Text style={GlobalStyles.allOrderOnpressText}>ALL ORDERS</Text>
              </View>
            ) : (
              <View>
                <Text style={GlobalStyles.allOrderText}>ALL ORDERS</Text>
              </View>
            )}
          </Pressable>

          <View style={GlobalStyles.prendingAccecptance}>
            <Pressable onPress={() => onPressofAcceptance()}>
              {pendingAcceptance ? (
                <View style={GlobalStyles.pendingAcceptanceOnpressView}>
                  <Text style={GlobalStyles.pendingOnPressText}>
                    PENDING ACCEPTANCE
                  </Text>
                </View>
              ) : (
                <View style={GlobalStyles.pendingAcceptanceView}>
                  <Text style={GlobalStyles.pendingText}>
                    PENDING ACCEPTANCE
                  </Text>
                </View>
              )}
            </Pressable>
          </View>
        </View>
      </View>

      {allOrders ? (
        <View
          style={{
            width: "100%",
          }}>
          <View
            style={{
              height: 38,
              width: "100%",
              paddingLeft: 19,
              paddingRight: 18,
              marginTop: 19,
            }}>
            <Searchbar
              inputStyle={GlobalStyles.searchInput}
              style={GlobalStyles.searchContainer}
              placeholderTextColor={"#0F141A"}
              placeholder='Search'
              value={search}
              onChangeText={(text) => searchFilterFunction(text)}
            />
            {/* <View style={[GlobalStyles.orderDetailCardGlobalView]}>
              <View style={[GlobalStyles.cardThreeView]}>
                <View
                  style={{
                    justifyContent: "space-between",
                    flexDirection: "row",
                  }}>
                  <View style={{ justifyContent: "center" }}>
                    <SearchIcon />
                  </View>
                  <View style={{ justifyContent: "center" }}>
                    <SettingIcon />
                  </View>
                </View>
              </View>
            </View> */}
          </View>
          <View
            style={{
              paddingLeft: 18,
              paddingRight: 19,
              paddingTop: 19,
              width: "100%",
              // backgroundColor: "red",
              marginBottom: 260,
            }}>
            {!myList ? (
              <View>
                <ActivityIndicator color={"#1F9CEF"} size='large' />
              </View>
            ) : (
              <FlatList
                data={filterdData}
                keyExtractor={(item) => item._id}
                ItemSeparatorComponent={ItemSepartorView}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                  <Pressable
                    style={{ flex: 1 }}
                    onPress={() =>
                      navigation.navigate("DetailedOrderPage", {
                        id: item?._id,
                        status: item?.status,
                        orderNumber: item?.unique_name,
                        titleOne: item?.supplier_info?.supplier_name,
                        outlet: item?.outlet_info.name,
                        emailStatus: item?.status_name,
                        deliveryaddress: item?.delivery_address,
                        billingAddress: item.billing_address,
                        payments: item?.payments,
                        deliveryData: item.delivery_requested.delivery_date,
                        totalPayableAmount: item.total_payable_amount,
                        orderDateTime: item.Order_date_time,
                        estimatedSubtotal: item.total_cost_amount,
                        estimatedDeliveryFee: item.delivery_fee,
                        vatAmount: item.vat_amount,
                        moneyStatus: item?.paid_status,
                        items: item?.products_info.length,
                        productInfo: item?.products_info,
                      })
                    }>
                    <AllOrdersCard
                      title={item?.supplier_info?.supplier_name}
                      // title={title}
                      outlet={item?.outlet_info.name}
                      amount={item?.total_payable_amount}
                      timing={item?.Order_date_time}
                      // status={item?.paid_status_name}
                      moneyStatus={item?.paid_status}
                      emailStatus={item?.status_name}
                      image={item?.supplier_profile}
                      rating={item?.products_info[0]?.r_qty}
                    />
                  </Pressable>
                )}
                // onRefresh={handleRefresh}
                // refreshing={isRefreshing}
              />
            )}

            {/* <FlatList
              numColumns={2}
              data={this.state.notesObj}
              keyExtractor={(item) => item.id}
              extraData={this.state.refresh}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={{ flex: 1 }}
                  onPress={() =>
                    this.props.navigation.navigate("UpdateNote", {
                      id: item.id,
                      title: item.title,
                      description: item.description,
                    })
                  }>
                  <NoteCard title={item.title} description={item.description} />
                </TouchableOpacity>
              )}
              refreshControl={
                <RefreshControl
                  refreshing={this.state.refresh}
                  onRefresh={onRefresh}
                />
              }
            /> */}
          </View>
        </View>
      ) : null}
      {pendingAcceptance ? (
        <View
          style={{
            width: "100%",
          }}>
          <View
            style={{
              height: 38,
              width: "100%",
              paddingLeft: 19,
              paddingRight: 18,
              marginTop: 19,
            }}>
            <Searchbar
              // icon={() => <SearchIcon />}
              inputStyle={GlobalStyles.searchInput}
              style={GlobalStyles.searchContainer}
              placeholderTextColor={"#0F141A"}
              placeholder='Search'
              onChangeText={() => {}}
            />
          </View>
          <View
            style={{
              paddingLeft: 18,
              paddingRight: 19,
              paddingTop: 19,
              width: "100%",
            }}>
            <PendingAcceptanceCard />
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default MyorderScreen;
