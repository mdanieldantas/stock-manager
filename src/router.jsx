import { createBrowserRouter  } from "react-router-dom";
import Home from "./pages/Home";
import ItemsLayout from "./pages/ItemsLayout";
import ListItems from "./pages/ListItems";
import CreateItem from "./pages/CreateItem";
import UpdateItem from "./pages/UpdateItem";
import ShowItem from "./pages/ShowItem";
import RootLayout from "./pages/RootLayout";

const router = createBrowserRouter ([
    {
        path: "/",
        element: <RootLayout />,
        children:[
            {
                index: true,
                element:<Home/>
            },
            {
                path:"items",
                element:<ItemsLayout/>,
                children:[
                    {index:true,element:<ListItems/>},
                    {path:"new",element:<CreateItem />},
                    {path:":id",element:<ShowItem/>},
                    {path:":id/update",element:<UpdateItem />},
                ]
            }
        ]
    }
])

export default router;