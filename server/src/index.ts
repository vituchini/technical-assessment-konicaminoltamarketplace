declare const app: any;

const start = (app: any): void => {
    console.log('START')
    app.ports.request.subscribe((message: string) => {
        const payload: any = JSON.parse(message);
        console.log(payload);
    });
}

start(app);