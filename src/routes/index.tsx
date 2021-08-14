import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AppRoutes } from "./auth.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}

export default Routes;
