const { createBrowserRouter } = require("react-router-dom");
const { default: Login } = require("../Components/Login");
const { default: Browse } = require("../Components/Browse");

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <Login/>
    },
    {
        path : "/browse",
        element : <Browse/>
    }
]);

export default appRouter;