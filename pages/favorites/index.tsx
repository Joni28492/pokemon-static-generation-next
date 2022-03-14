import { Layout } from '../../components/layouts';
import { NoFavorites } from '../../components/ui';
import { useEffect, useState } from 'react';
import { localFavorites } from '../../utils';
import { Grid } from '@nextui-org/react';
import { FavoriteCardPokemon, FavoritePokemons } from '../../components/pokemon';



const favoritesPage = () => {


    const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])

    useEffect(() => {
        setFavoritePokemons(localFavorites.pokemons)
    }, [])


    return (
        <Layout title='Pokemons favoritos'>

            {
                favoritePokemons.length === 0
                    ? (<NoFavorites />)
                    : (<FavoritePokemons pokemons={favoritePokemons} />)
            }
        </Layout>
    )
}

export default favoritesPage;


