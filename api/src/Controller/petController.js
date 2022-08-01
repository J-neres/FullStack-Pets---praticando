import {login} from '../Repository/petRepository.js'

import {Router} from 'express'; 
const server = Router();


server.post('/pet/login', async (req, resp) => {
       try{
        const  {id, nome} = req.body;
        const resposta = await login(id, nome);

        if (resposta) {resp.send(resposta)
        }
        else {
            resp.status(404).send("Ta retornando algo diferente ou nada")
        }
       } catch (err) {
        resp.status(401).send({
            erro:err.message
        });     
       }
})

export default server;