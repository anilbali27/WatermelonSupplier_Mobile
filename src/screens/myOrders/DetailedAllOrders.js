/** @format */

import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  Pressable,
  ScrollView,
  Button,
  FlatList,
} from "react-native";

import GlobalStyles from "../../../assets/css/styles";
import CrossMark from "../../../assets/images/icons/CrossMark";
import AllOrdersCard from "./AllOrdersCard";
import RequiredIcon from "../../../assets/images/icons/Required";
import { Ionicons } from "@expo/vector-icons";
import OrderDetailCard from "./OrderDetailCard";
import moment from "moment";

const DetailedOrderPage = ({ route, navigation }) => {
  const {
    id,
    status,
    orderNumber,
    titleOne,
    outlet,
    emailStatus,
    deliveryaddress,
    billingAddress,
    payments,
    deliveryData,
    totalPayableAmount,
    orderDateTime,
    estimatedSubtotal,
    estimatedDeliveryFee,
    vatAmount,
    moneyStatus,
    items,
    productInfo,
  } = route.params;

  const date = moment(orderDateTime).format("DD MMMM YYYY");
  console.log(date, "ooooo9");
  console.log(productInfo, "llllllllllll");

  const ItemSepartorView = () => {
    return <View style={{ height: 10, width: "100%" }} />;
  };

  return (
    <ScrollView>
      <SafeAreaView style={GlobalStyles.orderContainer}>
        {/* <StatusBar animated={true} backgroundColor='#1F9CEF' /> */}
        <View style={GlobalStyles.headerDetailOrderView}>
          <Pressable
            onPress={() => {
              navigation.navigate("Orders");
            }}>
            <CrossMark />
          </Pressable>

          {moneyStatus == 10 ? (
            <View
              style={[
                GlobalStyles.orderDetailPaidStatus,
                GlobalStyles.orderDetailPaidStatusColor,
              ]}>
              <Text style={GlobalStyles.paidTextOrderDetail}>UnPaid</Text>
            </View>
          ) : (
            <View style={GlobalStyles.orderDetailPaidStatus}>
              <Text style={GlobalStyles.paidTextOrderDetail}>Paid</Text>
            </View>
          )}
          <Text style={GlobalStyles.orderNumberText}>
            Order No : {orderNumber}
          </Text>
          <Text style={GlobalStyles.orderTitle}>
            {/* Unibic Dubai International */}
            {titleOne}
          </Text>
          <Text style={GlobalStyles.orderOutlet}>Outlet : {outlet}</Text>
        </View>

        <View
          style={{
            paddingLeft: 19,
            paddingRight: 19,
            paddingTop: 71,
            width: "100%",
            // backgroundColor: "red",
            marginBottom: 60,
          }}>
          <View
            style={[
              GlobalStyles.positionalAbsoluteCard,
              GlobalStyles.orderDetailCardOneHeight,
            ]}>
            <View style={GlobalStyles.positionalAbsoluteCardView}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}>
                <View style={{ marginTop: 22 }}>
                  <Text style={GlobalStyles.orderDetailPositionText}>
                    Items
                  </Text>
                  <Text
                    style={[
                      GlobalStyles.orderDetailCardHeading,
                      GlobalStyles.paddingFour,
                    ]}>
                    {items}
                  </Text>
                  <Text
                    style={[
                      GlobalStyles.orderDetailPositionText,
                      GlobalStyles.marginTopFive,
                    ]}>
                    Email Status
                  </Text>
                  <Text
                    style={[
                      GlobalStyles.orderDetailCardHeading,
                      GlobalStyles.paddingFour,
                    ]}>
                    {emailStatus}
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: "#F2F7FC",
                    width: 149,
                    height: 93,
                    borderRadius: 9,
                    marginTop: 13,
                    paddingTop: 14.5,
                    paddingLeft: 14.5,
                    paddingRight: 14.5,
                  }}>
                  <Text style={GlobalStyles.orderDetailPositionText}>
                    Amount
                  </Text>
                  <Text style={GlobalStyles.orderAmountText}>
                    AED {totalPayableAmount}
                  </Text>
                  <Text
                    style={[
                      GlobalStyles.orderDetailPositionText,
                      GlobalStyles.colorBlue,
                    ]}>
                    Ordered On {date}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <FlatList
            data={productInfo}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={ItemSepartorView}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <OrderDetailCard
                title={item?.product_name}
                costPriceperUnit={item?.cost_price_per_unit}
                displayskuName={item?.display_sku_name}
              />
            )}
          />

          {/* <OrderDetailCard /> */}

          <View
            style={[
              GlobalStyles.orderDetailCardGlobalView,
              GlobalStyles.marginTopFive,
            ]}>
            <View style={GlobalStyles.cardThreeView}>
              <Text style={GlobalStyles.orderDetailCardHeading}>
                Billing Address
              </Text>
              <Text
                style={[
                  GlobalStyles.orderDetailCardText,
                  GlobalStyles.marginTopSeven,
                ]}>
                {billingAddress}
              </Text>
            </View>
          </View>
          <View
            style={[
              GlobalStyles.orderDetailCardGlobalView,
              GlobalStyles.marginTopFive,
            ]}>
            <View style={[GlobalStyles.cardThreeView]}>
              <View style={GlobalStyles.bottomLineOrderCared1}>
                <View style={GlobalStyles.justifyContentCenter}>
                  <Text style={GlobalStyles.orderDetailCardHeading}>
                    Delivery Address
                  </Text>
                </View>

                <View style={GlobalStyles.justifyContentCenter}>
                  <Pressable onPress={() => {}}>
                    <View style={GlobalStyles.editView}>
                      <Text style={GlobalStyles.editText}>Edit</Text>
                    </View>
                  </Pressable>
                </View>
              </View>
              <View style={GlobalStyles.marginTopSeven}>
                <Text style={GlobalStyles.orderDetailCardText}>
                  {deliveryaddress}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={[
              GlobalStyles.orderDetailCardGlobalView,
              GlobalStyles.marginTopFive,
            ]}>
            <View style={[GlobalStyles.cardThreeView]}>
              <View style={GlobalStyles.bottomLineOrderCared1}>
                <View style={GlobalStyles.justifyContentCenter}>
                  <Text style={GlobalStyles.orderDetailCardHeading}>
                    Order Notes
                  </Text>
                </View>

                <View style={GlobalStyles.justifyContentCenter}>
                  <Pressable onPress={() => {}}>
                    <View style={GlobalStyles.editView}>
                      <Text style={GlobalStyles.editText}>Edit</Text>
                    </View>
                  </Pressable>
                </View>
              </View>
              <View style={GlobalStyles.marginTopSeven}>
                <Text style={GlobalStyles.orderDetailCardText}>{}</Text>
              </View>
            </View>
          </View>
          <View
            style={[
              GlobalStyles.orderDetailCardGlobalView,
              GlobalStyles.marginTopFive,
            ]}>
            <View style={[GlobalStyles.cardThreeView]}>
              <View style={GlobalStyles.bottomLineOrderCared1}>
                <View style={GlobalStyles.justifyContentCenter}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}>
                    <View>
                      <Text style={GlobalStyles.orderDetailCardHeading}>
                        Delivery Date
                      </Text>
                    </View>
                    <View style={GlobalStyles.requiredIconPadding}>
                      <Ionicons
                        name='information-circle-outline'
                        size={14}
                        color='red'
                      />
                    </View>
                  </View>
                </View>

                <View style={GlobalStyles.justifyContentCenter}>
                  <Pressable onPress={() => {}}>
                    <View style={GlobalStyles.editView}>
                      <Text style={GlobalStyles.editText}>Edit</Text>
                    </View>
                  </Pressable>
                </View>
              </View>
              <View style={GlobalStyles.marginTopSeven}>
                <Text style={GlobalStyles.orderDetailCardText}>
                  {deliveryData}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={[
              GlobalStyles.orderDetailCardGlobalView,
              GlobalStyles.marginTopFive,
            ]}>
            <View style={[GlobalStyles.cardThreeView]}>
              <View style={GlobalStyles.bottomLineOrderCared1}>
                <View style={GlobalStyles.justifyContentCenter}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}>
                    <View>
                      <Text style={[GlobalStyles.orderDetailCardText]}>
                        Estimated Subtotal
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={GlobalStyles.justifyContentCenter}>
                  <Text style={GlobalStyles.orderDetailCardText}>
                    AED{estimatedSubtotal}
                  </Text>
                </View>
              </View>
              <View
                style={[
                  GlobalStyles.bottomLineOrderCared1,
                  GlobalStyles.paddingThree,
                ]}>
                <View style={GlobalStyles.justifyContentCenter}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}>
                    <View>
                      <Text style={[GlobalStyles.orderDetailCardText]}>
                        Estimated Delivery Fee
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={GlobalStyles.justifyContentCenter}>
                  <Text style={GlobalStyles.orderDetailCardText}>
                    AED {estimatedDeliveryFee}
                  </Text>
                </View>
              </View>
              <View
                style={[
                  GlobalStyles.bottomLineOrderCared1,
                  GlobalStyles.paddingThree,
                ]}>
                <View style={GlobalStyles.justifyContentCenter}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}>
                    <View>
                      <Text style={[GlobalStyles.orderDetailCardText]}>
                        VAT(5%)
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={GlobalStyles.justifyContentCenter}>
                  <Text style={GlobalStyles.orderDetailCardText}>
                    AED {vatAmount}
                  </Text>
                </View>
              </View>
              <View
                style={[
                  GlobalStyles.bottomLineOrderCared1,
                  GlobalStyles.marginTopSeven,
                ]}>
                <View style={GlobalStyles.justifyContentCenter}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}>
                    <View>
                      <Text
                        style={[
                          GlobalStyles.orderDetailCardHeading,
                          GlobalStyles.colorRed,
                        ]}>
                        Estimated total
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={GlobalStyles.justifyContentCenter}>
                  <Text
                    style={[
                      GlobalStyles.orderDetailCardHeading,
                      GlobalStyles.colorRed,
                    ]}>
                    AED {totalPayableAmount}
                  </Text>
                </View>
              </View>
            </View>
            <View style={{ flex: 1, height: 1, backgroundColor: "#DCDCDC" }} />
            <View style={[GlobalStyles.cardThreeView]}>
              <View
                style={[
                  GlobalStyles.bottomLineOrderCared1,
                  GlobalStyles.marginTopSeven,
                ]}>
                <View style={GlobalStyles.justifyContentCenter}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}>
                    <View>
                      <Text
                        style={[
                          GlobalStyles.orderDetailCardHeading,
                          GlobalStyles.colorRed,
                        ]}>
                        Payment Status
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={GlobalStyles.justifyContentCenter}>
                  {moneyStatus == 10 ? (
                    <Text
                      style={[
                        GlobalStyles.orderDetailCardHeading,
                        GlobalStyles.colorRed,
                      ]}>
                      UnPaid
                    </Text>
                  ) : (
                    <Text
                      style={[
                        GlobalStyles.orderDetailCardHeading,
                        GlobalStyles.colorRed,
                      ]}>
                      Paid
                    </Text>
                  )}
                </View>
              </View>
            </View>
          </View>

          {status === 0 ||
          status === 30 ||
          status === 70 ||
          status === 80 ||
          status === 32 ||
          status === 60 ? (
            <View
              style={[
                GlobalStyles.marginTopSix,
                GlobalStyles.onPressMarkReceived,
              ]}>
              <Pressable onPress={() => {}}>
                <Text style={GlobalStyles.onPressedOrderText}>
                  Download Invoice
                </Text>
              </Pressable>
            </View>
          ) : null}
          {status === 35 || status === 33 ? (
            <View>
              <View
                style={[
                  GlobalStyles.marginTopSix,
                  GlobalStyles.onPressMarkReceived,
                ]}>
                <Pressable onPress={() => {}}>
                  <Text style={GlobalStyles.onPressedOrderText}>
                    Mark As Reaceived
                  </Text>
                </Pressable>
              </View>
              <View
                style={[
                  GlobalStyles.marginTopSix,
                  GlobalStyles.onPressMarkReceived,
                ]}>
                <Pressable onPress={() => {}}>
                  <Text style={GlobalStyles.onPressedOrderText}>
                    Download Invoice
                  </Text>
                </Pressable>
              </View>
            </View>
          ) : null}
          {status === 50 ? (
            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}>
                <View
                  style={[
                    GlobalStyles.marginTopSix,
                    GlobalStyles.onPressReceived,
                  ]}>
                  <Pressable onPress={() => {}}>
                    <Text style={GlobalStyles.onPressedOrderText}>
                      Order Returned
                    </Text>
                  </Pressable>
                </View>
                <View
                  style={[
                    GlobalStyles.marginTopSix,
                    GlobalStyles.onPressReceived,
                  ]}>
                  <Pressable onPress={() => {}}>
                    <Text style={GlobalStyles.onPressedOrderText}>
                      Mark as Complated
                    </Text>
                  </Pressable>
                </View>
              </View>
              <View
                style={[
                  GlobalStyles.marginTopSix,
                  GlobalStyles.onPressMarkReceived,
                ]}>
                <Pressable onPress={() => {}}>
                  <Text style={GlobalStyles.onPressedOrderText}>
                    Download Invoice
                  </Text>
                </Pressable>
              </View>
            </View>
          ) : null}

          {moneyStatus == 10 ? (
            <View
              style={[
                GlobalStyles.marginTopSix,
                GlobalStyles.onPressMarkReceived,
              ]}>
              <Pressable onPress={() => {}}>
                <Text style={GlobalStyles.onPressedOrderText}>Pay Now</Text>
              </Pressable>
            </View>
          ) : null}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default DetailedOrderPage;
