import Knex from 'knex';

export async function seed(knex: Knex){
    await knex('items').insert([
        { title: 'Lâmpadas', path_image: 'lampadas.svg'},
        { title: 'Pilhas e Baterias', path_image: 'baterias.svg'},
        { title: 'Papéis e Papelão', path_image: 'papeis-papelao.svg'},
        { title: 'Resíduos Eletrônicos', path_image: 'eletronicos.svg'},
        { title: 'Resíduos Orgânicos', path_image: 'organicos.svg'},
        { title: 'Óleo de Cozinha', path_image: 'oleo.svg'},
    ])
}