
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  return knex('library')
    .then(function () {
      // Inserts seed entries
      return knex('library').insert([
        {book: 'SAI FORA, coronavírus!', path: './library/book1', image: './library/img1', synopsis: 'Livro1', type: 'pdf'},
        {book: 'Cabelo bom é o quê?', path: './library/book2', image: './library/img2', synopsis: 'Livro2', type: 'pdf'},
        {book: 'Mínimos contos', path: './library/book3', image: './library/img3', synopsis: 'Livro3', type: 'pdf'},
        {book: 'O desvaneio no jardim', path: './library/book4', image: './library/img4', synopsis: 'Livro4', type: 'pdf'},
        
      ]);
    });
};
