import {cpus} from 'os';
import process from 'process';
process.env.UV_THREADPOOL_SIZE = cpus().length;

import { assert } from 'chai';
import { request } from 'undici';
import axios from 'axios';

async function handleCeps(ceps) {
    return axios.all(ceps.map(getCepJson));
}

async function getCepJson(cep) {
    const response = await request(`https://viacep.com.br/ws/${cep}/json`);
    return response.body.json();
}

describe("Tests", () => {

    it("getCepJson Test", async () => {
        const cep = 62900000;

        assert.deepStrictEqual(await getCepJson(cep),
            {
                cep: '62900-000',
                logradouro: '',
                complemento: '',
                bairro: '',
                localidade: 'Russas',
                uf: 'CE',
                ibge: '2311801',
                gia: '',
                ddd: '88',
                siafi: '1537'
            }
        );
    });

    it("handleCeps Test", async () => {
        const ceps = [
            62980000,
            63960000,
            62900000,
            63800000,
            60025110,
            62014102,
            76870631,
            53416420,
            59084145,
            60175551,
            69104368,
            51170901,
            73005522,
            76876702,
            11702160,
        ];


        assert.deepStrictEqual(await handleCeps(ceps),
            [
                {
                    cep: '62980-000',
                    logradouro: '',
                    complemento: '',
                    bairro: '',
                    localidade: 'Iracema',
                    uf: 'CE',
                    ibge: '2306009',
                    gia: '',
                    ddd: '88',
                    siafi: '1421'
                },
                {
                    cep: '63960-000',
                    logradouro: '',
                    complemento: '',
                    bairro: '',
                    localidade: 'Banabuiú',
                    uf: 'CE',
                    ibge: '2301851',
                    gia: '',
                    ddd: '88',
                    siafi: '1233'
                },
                {
                    cep: '62900-000',
                    logradouro: '',
                    complemento: '',
                    bairro: '',
                    localidade: 'Russas',
                    uf: 'CE',
                    ibge: '2311801',
                    gia: '',
                    ddd: '88',
                    siafi: '1537'
                },
                {
                    cep: '63800-000',
                    logradouro: '',
                    complemento: '',
                    bairro: '',
                    localidade: 'Quixeramobim',
                    uf: 'CE',
                    ibge: '2311405',
                    gia: '',
                    ddd: '88',
                    siafi: '1529'
                },
                {
                    cep: '60025-110',
                    logradouro: 'Rua Santa Maria',
                    complemento: '',
                    bairro: 'José Bonifácio',
                    localidade: 'Fortaleza',
                    uf: 'CE',
                    ibge: '2304400',
                    gia: '',
                    ddd: '85',
                    siafi: '1389'
                },
                {
                    cep: '62014-102',
                    logradouro: 'Rua São Luiz I',
                    complemento: '',
                    bairro: 'Sumaré',
                    localidade: 'Sobral',
                    uf: 'CE',
                    ibge: '2312908',
                    gia: '',
                    ddd: '88',
                    siafi: '1559'
                },
                {
                    cep: '76870-631',
                    logradouro: 'Avenida Guaporé',
                    complemento: 'de 2663 a 3153 - lado ímpar',
                    bairro: 'Setor 05',
                    localidade: 'Ariquemes',
                    uf: 'RO',
                    ibge: '1100023',
                    gia: '',
                    ddd: '69',
                    siafi: '0007'
                },
                {
                    cep: '53416-420',
                    logradouro: 'Rua Paulista',
                    complemento: '',
                    bairro: 'Artur Lundgren II',
                    localidade: 'Paulista',
                    uf: 'PE',
                    ibge: '2610707',
                    gia: '',
                    ddd: '81',
                    siafi: '2513'
                },
                {
                    cep: '59084-145',
                    logradouro: 'Rua Abaeté',
                    complemento: 'lado par',
                    bairro: 'Neópolis',
                    localidade: 'Natal',
                    uf: 'RN',
                    ibge: '2408102',
                    gia: '',
                    ddd: '84',
                    siafi: '1761'
                },
                {
                    cep: '60175-551',
                    logradouro: 'Rua Luís Tibúrcio',
                    complemento: '',
                    bairro: 'Mucuripe',
                    localidade: 'Fortaleza',
                    uf: 'CE',
                    ibge: '2304400',
                    gia: '',
                    ddd: '85',
                    siafi: '1389'
                },
                {
                    cep: '69104-368',
                    logradouro: 'Rua Araújo Costa',
                    complemento: '',
                    bairro: 'Jauari II',
                    localidade: 'Itacoatiara',
                    uf: 'AM',
                    ibge: '1301902',
                    gia: '',
                    ddd: '92',
                    siafi: '0241'
                },
                {
                    cep: '51170-901',
                    logradouro: 'Avenida Marechal Mascarenhas de Moraes',
                    complemento: '2056',
                    bairro: 'Imbiribeira',
                    localidade: 'Recife',
                    uf: 'PE',
                    ibge: '2611606',
                    gia: '',
                    ddd: '81',
                    siafi: '2531'
                },
                {
                    cep: '73005-522',
                    logradouro: 'Quadra 8 Bloco 22',
                    complemento: '',
                    bairro: 'Sobradinho',
                    localidade: 'Brasília',
                    uf: 'DF',
                    ibge: '5300108',
                    gia: '',
                    ddd: '61',
                    siafi: '9701'
                },
                {
                    cep: '76876-702',
                    logradouro: 'Avenida Capitão Sílvio',
                    complemento: 'de 2290 a 2600 - lado par',
                    bairro: 'Grandes Áreas',
                    localidade: 'Ariquemes',
                    uf: 'RO',
                    ibge: '1100023',
                    gia: '',
                    ddd: '69',
                    siafi: '0007'
                },
                {
                    cep: '11702-160',
                    logradouro: 'Rua Antilhas',
                    complemento: '',
                    bairro: 'Guilhermina',
                    localidade: 'Praia Grande',
                    uf: 'SP',
                    ibge: '3541000',
                    gia: '5587',
                    ddd: '13',
                    siafi: '6921'
                }
            ]
        );
    });
});
