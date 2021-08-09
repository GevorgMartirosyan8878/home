import { getApp, PORT } from "./app";



const server = (): void => {
    const app = getApp();

    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    })
}

export default server();