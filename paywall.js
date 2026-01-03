import { Purchases } from "@revenuecat/purchases-js";

// 1. Configure (This happens once at the root/top level)
Purchases.configure({
  apiKey: "test_PajAUOIeeVPpAXZaLdTjjPKUjXI",
});

// 2. Check Junior Varsity status
export const checkJuniorVarsityStatus = async () => {
  try {
    const customerInfo = await Purchases.getSharedInstance().getCustomerInfo();
    return customerInfo.entitlements.active["Junior Varsity"] !== undefined;
  } catch (e) {
    console.error("Failed to fetch JV status", e);
    return false;
  }
};

// 3. Check Varsity status
export const checkVarsityStatus = async () => {
  try {
    const customerInfo = await Purchases.getSharedInstance().getCustomerInfo();
    return customerInfo.entitlements.active["Varsity"] !== undefined;
  } catch (e) {
    console.error("Failed to fetch Varsity status", e);
    return false;
  }
};

// 4. Show subscription paywall (if you have this function)
export const showSubscriptionPaywall = () => {
  // Your existing paywall display logic here
  console.log("Showing subscription paywall...");
  // Example: You might open a modal, redirect to a payment page, etc.
};
