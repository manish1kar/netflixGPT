const { createBrowserRouter } = require("react-router-dom");
const { default: Login } = require("../components/Login");
const { default: Browse } = require("../components/Browse");

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