import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/cart` | `/(tabs)/explore` | `/(tabs)/explore2` | `/_sitemap` | `/address` | `/cart` | `/change-password` | `/edit-profile` | `/explore` | `/explore2` | `/favorites` | `/login` | `/my-cards` | `/order-detail` | `/orders` | `/product-deail`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
