
import type { NextPage } from 'next'
import { Layout } from '../components/layouts'

interface Props {
  pokemons: SmallPokemon[];
}
//title: listado de pokemos

const HomePage: NextPage<Props> = ({ pokemons }) => {

  // console.log(pokemons);


  return (
    <Layout title='Listado de pokemons'>


      {/* <Image
        src='/img/banner.png'
        width={200}
        height={150}
      /> */}

      <Grid.Container gap={2} justify='flex-start'>
        {
          pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))
        }
      </Grid.Container>

    </Layout>
  )
}



import { GetStaticProps } from 'next'
import pokeApi from '../api/pokeApi';
import { PokemonListResponse, SmallPokemon } from '../interfaces';
import { Grid } from '@nextui-org/react';
import { PokemonCard } from '../components/pokemon/PokemonCard';
import Image from 'next/image';
//esta func solo se ejecuta del lado del servidor y solo en buildtime
//por eso sale el hola mundo en la terminal
export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
  // console.log(data);
  const pokemons: SmallPokemon[] = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: ` https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
  }))

  // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg
  return {
    props: {
      pokemons: pokemons
    }
  }
}


export default HomePage
