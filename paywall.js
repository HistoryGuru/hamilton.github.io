import { Purchases } from "@revenuecat/purchases-js";

// 1. Configure (This happens once at the root/top level)
Purchases.configure({
  apiKey: "test_PajAUOIeeVPpAXZaLdTjjPKUjXI",
});

// 2. Define the check (Step 3)
export const checkJuniorVarsityStatus = async () => {
  try {
    const customerInfo = await Purchases.getSharedInstance().getCustomerInfo();
    return customerInfo.entitlements.active["Junior Varsity"] !== undefined;
  } catch (e) {
    console.error("Failed to fetch status", e);
    return false;
  }
};
