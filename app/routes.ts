import {
  type RouteConfig,
  route,
  index,
  layout,
  prefix,
} from "@react-router/dev/routes";

export default [

  layout("./mainLayout/layout.tsx", [ 
    index("./routes/home.tsx"),
    
  ])
] satisfies RouteConfig;
