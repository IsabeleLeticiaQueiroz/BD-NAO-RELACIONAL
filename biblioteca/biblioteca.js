// importar o modulo mongoClient 
const {MongoClient} = require('mongodb');

// funcao principal
async function main(){
    // definir a url de conexao com o mongodb
    const url = "mongodb://127.0.0.1:27017";
    // criar instancia do cliente mongodb
    const client = new MongoClient(url);
    try{
        // conectar ao servidor
        await client.connect();
        // selecione o bd "biblioteca"
        const database = client.db('biblioteca-aula');
        // caso o banco nao exista, sera criado
        // selecionar a colecao "livros"
        const livros = database.collection('livros');
        // agora realizar insercao de dados na tabela 
        // await livros.insertMany([
        //     {titulo:"1984", autor:"George Orwell", ano:1949, genero:"Distopia"},
        //     {titulo:"Dom Casmurro", autor:"Machado de Assis", ano:1899, genero:"Romance"},
        //     {titulo:"Senhor dos Aneis", autor:"J.R.R. Tolkien", ano:1954, genero:"Fantasia"}
        // ]);

        // // consultar todos os documentos
        // const todosLivros = await livros.find().toArray();
        // console.log('livros: ', todosLivros);

        // atualizar um documento
        // await livros.updateOne(
        //     {titulo:"1984"}, //filtro p encontrar um registro
        //     {$set:{ano:1958}}//valor atualizado
        // );

        // excluir documento
        await livros.deleteOne({titulo:"Dom Casmurro"});

    }finally{
        await client.close();
    }
}
// chama a funcao principal e captura o erro, s ehouver
main().catch(console.error);
// para iniciar basta 