import { type RouteConfig, route } from "@react-router/dev/routes";

// export default [index("routes/home.tsx")] satisfies RouteConfig;
export default [route("routes/sales", "routes/sales.tsx")] satisfies RouteConfig;
