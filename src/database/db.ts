import { AppDataSource } from '../datasource';

async function conn() {
    await AppDataSource.initialize()
        .then(() => console.log("Conectado ao banco!"))
        .catch(() =>console.log("Não conectado ao banco"))
}
conn()