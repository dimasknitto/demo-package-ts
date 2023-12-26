import express, { Express } from 'express';

export interface ExpressConfig {
    port: number
}

export { Express }

function startExpress({ port = 3000 }: ExpressConfig) {
    const app = express();
    app.listen(port, () => {

        console.log(`Express started ${port}`)
        return `Express started ${port}`
    })
}

export default startExpress

