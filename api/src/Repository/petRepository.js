import {con} from './connection.js'

export async function login (id, nome) {
    const comando = `
    select id_pet,
            nm_pet
        from tnb_animais
        where id_pet = ?
        and nm_pet = ?`;

        const [resposta] = await (await con).query(comando, [id, nome] );
        return resposta[0];
}